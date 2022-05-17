"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "306e96103371b6",
        pass: "5835649bc48189",
    },
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Marcelo Widget<marcelo@marcelo.com>",
            to: "Marcelo<marcelo.arraes@gmail.com>",
            subject: subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
/* [
        `<div>`,
        `<h1>Feedback</h1>`,
        `<p>${type}</p>`,
        `<p>${comment}</p>`,
        `<p>${screenshot}</p>`,
        `</div>`,
      ].join("\n"), */
