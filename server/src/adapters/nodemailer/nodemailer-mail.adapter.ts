import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "306e96103371b6",
    pass: "5835649bc48189",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Marcelo Widget<marcelo@marcelo.com>",
      to: "Marcelo<marcelo.arraes@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
/* [
        `<div>`,
        `<h1>Feedback</h1>`,
        `<p>${type}</p>`,
        `<p>${comment}</p>`,
        `<p>${screenshot}</p>`,
        `</div>`,
      ].join("\n"), */
