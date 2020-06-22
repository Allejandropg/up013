export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    fron: 'Equipe Gobarber <noreply@gobarber.com  >',
  },
};
/**
 *  Amazon SES
 * Mailgun
 * sparkpost
 * Mandril(MailChimp)
 * gmail x
 *
 * Mailtrap (DEV)
 */
