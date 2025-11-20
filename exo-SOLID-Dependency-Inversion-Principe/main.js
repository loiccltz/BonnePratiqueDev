const sendgrid = {
  async send({ to, subject, text }) {
    console.log('[sendgrid] Email envoyé à', to, 'Sujet:', subject);
    console.log(text);
  },
};


class SendgridEmailProvider {
  async send({ to, subject, text }) {

    return sendgrid.send({ to, subject, text });
  }
}

class EmailService {
 
  constructor(emailProvider) {
    this.emailProvider = emailProvider; 
  }

  async sendWelcomeEmail(user) {
    const subject = 'Bienvenue sur notre plateforme';
    const text = `Bonjour ${user.firstName},

Merci pour votre inscription.

À bientôt !`;

    // On utilise seulement le CONTRAT (emailProvider.send)
    await this.emailProvider.send({
      to: user.email,
      subject,
      text,
    });
  }
}

const user = { firstName: 'Kenan', email: 'kenan@example.com' };


const emailProvider = new SendgridEmailProvider();

const emailService = new EmailService(emailProvider);
emailService.sendWelcomeEmail(user);
