import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Command from '../models/Command';
import User from '../models/User';
import Notification from '../schemas/Notification';
import Mail from '../../lib/Mail';

// import Qeue from '../../lib/Qeue';

class CompletCommandController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const commands = await Command.findAll({
      where: { canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date', 'past', 'canceled_at', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name', 'provider'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });
    return res.json(commands);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { provider_id, date } = req.body;
    if (provider_id === req.userId) {
      return res
        .status(401)
        .json({ error: "You don't have permission to make the command" });
    }
    /**
     * Check if provide_id is a provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create commands with providers' });
    }
    const hourStart = startOfHour(parseISO(date));

    /**
     * Check past dates
     */
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ erro: 'Past dates are not permitted' });
    }
    /**
     * Check date availability
     */
    const checkAvailability = await Command.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      return res.status(400).json({ erro: 'Appoint date is not available' });
    }
    const command = await Command.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });

    /**
     * Notify command provider
      const user = await User.findByPk(req.userId);
      const formattedDate = format(
        hourStart,
        "'dia' dd 'de' MMMM', às' H:mm'h'",
        { locale: pt }
      );

      await Notification.create({
        content: `Novo agendamento de ${user.name} para ${formattedDate}`,
        user: provider_id,
      });
    */
    return res.json(command);
  }

  async delete(req, res) {
    const command = await Command.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });
    if (!command) {
      return res.status(404).json({
        error: 'Command not found.',
      });
    }
    if (command.user_id !== req.userId) {
      return res.status(400).json({
        error: "Yout don't have permission to cancel this command",
      });
    }
    const dateWithSub = subHours(command.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      return res.status(400).json({
        error: "Yout cann't only cancel command 2 hours in advance.",
      });
    }

    command.canceled_at = new Date();
    await command.save();

    // FIXME envio de cancelamento
    // await Qeue.add(CancellationMail.key, { command });

    await Mail.sendMail({
      to: `${command.provider.name} <${command.provider.email}`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: command.provider.name,
        user: command.user.name,
        date: format(
          parseISO(command.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });

    return res.json(command);
  }
}

export default new CompletCommandController();
