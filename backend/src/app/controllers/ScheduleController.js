import { endOfDay, parseISO, startOfHour } from 'date-fns';
import { Op } from 'sequelize';
import Command from '../models/Command';
import User from '../models/User';
import File from '../models/File';

class ScheduleControler {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const commands = await Command.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfHour(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'phone'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
      order: ['date'],
    });
    return res.json(commands);
  }
}

export default new ScheduleControler();
