import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { command } = data;
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
  }
}

export default new CancellationMail();
