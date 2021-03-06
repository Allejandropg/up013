import jwt from 'jsonwebtoken';
import { addDays, addMinutes, parseISO } from 'date-fns';
import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';
import authConfig from '../../config/auth';
import Mail from '../../lib/Mail';

class UserController {
  // Adiciona um novo usuário
  async read(req, res) {
    return res.json(
      await User.findAll({
        where: { master: true, is_active: true },
      })
    );
  }

  // Adiciona um novo usuário
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });
    const password = Math.random()
      .toString(36)
      .slice(-10);
    if (userExists) {
      return res.status(400).json({ erro: 'User already exists.' });
    }
    try {
      const result = await User.create({ ...req.body, password });
      // ,// password_time:  new Date()

      const user = {
        name: result.name,
        email: result.email,
        password,
        link: `${process.env.SITE_URL}/welcome/${jwt.sign(
          {
            id: result.id,
            date: addDays(parseISO(new Date()), 7),
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        )}`,
      };
      // date: addDays(parseISO(new Date()),1)

      await Mail.sendMail({
        to: `${user.name} <${user.email}`,
        subject: 'Cadastro Realizado com sucesso',
        template: 'register',
        context: {
          user: user.name,
          password: user.password,
          link: user.link,
        },
      });

      return res.json({ id, name, email, provider });
    } catch (error) {
      return res.json({ error });
    }
  }

  // Altera um usuário
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) => {
        return password ? field.required().oneOf([Yup.ref('password')]) : field;
      }),
      is_active: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword, password } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({ erro: 'User already exists.' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ erro: 'Password does not match' });
    }

    if (oldPassword && password && oldPassword === password) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    // console.log('updateUser',oldPassword,password);
    await user.update(req.body);
    const { id, name, provider, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, name, email, provider, avatar });
  }

  async send(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (!userExists) {
      return res.status(200).json({
        error:
          'If your user exists an email will be sent to him with a new password.',
      });
    }
    const password = Math.random()
      .toString(36)
      .slice(-10);
    try {
      const user = {
        name: userExists.name,
        email: userExists.email,
        password,
        link: `${process.env.SITE_URL}/forgot/${jwt.sign(
          {
            id: userExists.id,
            date: addMinutes(parseISO(new Date()), 1),
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        )}`,
      };
      // date: addDays(parseISO(new Date()),1)

      await Mail.sendMail({
        to: `${user.name} <${user.email}`,
        subject: 'E-mail de recuperação de conta',
        template: 'forgot',
        context: {
          user: user.name,
          password: user.password,
          link: user.link,
        },
      });

      return res.json({
        msg: 'If your user exists an email will be sent to him',
      });
    } catch (error) {
      return res.json({ error });
    }
  }
}
export default new UserController();
