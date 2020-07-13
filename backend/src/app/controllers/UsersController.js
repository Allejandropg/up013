import jwt from 'jsonwebtoken';
import { addDays, addMinutes, parseISO } from 'date-fns';
import * as Yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';
import Mail from '../../lib/Mail';

class UserController {
  // Adiciona um novo usuário
  async read(req, res) {
    return res.json(
      await User.findAll({
        where: { master: false, is_active: true },
        order: [['provider', 'desc'], 'name'],
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

      return res.json({ id: result.id });
    } catch (error) {
      return res.json({ error });
    }
  }

  // Altera um usuário
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      phone: Yup.string(),
      birthday: Yup.string(),
      is_active: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // console.log('teste', req.body);
    const { id } = req.params;
    const { email } = req.body;
    const user = await User.findByPk(id);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({ erro: 'User already exists.' });
      }
    }

    // console.log('updateUser',oldPassword,password);
    await user.update(req.body);

    return res.json({ id });
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
