import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class RegisterMail {
  get key() {
    return 'RegisterMail';
  }

  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      to: `${user.name} <${user.email}`,
      subject: 'Cadastro Realizado com sucesso',
      template: 'register',
      context: {
        user: user.name,
        password: user.password,
        link: user.link,
        date: format(
          parseISO(date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new RegisterMail();
