import jwt from 'jsonwebtoken';
import {  parseISO, isBefore } from 'date-fns';
import User from '../models/User';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }

    if (!(await user.checkPassword(password))) {
       return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, provider, password_time, is_active } = user;
    // console.log('aqui', id, name, avatar, provider )
    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        provider,
        password_time,
        is_active
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async updateForgot(req, res) {
    const { email, password, token } = req.body;

    try {
      const decoded = await jwt.verify(token, authConfig.secret);
      /**
       * Check past dates
       */
      if (isBefore(parseISO(decoded.date), new Date())) {
        return res.status(400).json({ erro: 'Past dates are not permitted' });
      }
    } catch (err) {
      // return res.status(401).json({ error: 'Token invalid' });
      return res.status(401).json({ err });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user && user.id !== decoded.id) {
      return res.status(401).json({ error: 'User not found!' });
    }

    await user.update({password});

    const { id, name, avatar, provider, password_time, is_active } = user;
    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        provider,
        password_time,
        is_active
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
