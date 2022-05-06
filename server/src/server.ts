import { prisma } from "./prisma";
import express from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "306e96103371b6",
    pass: "5835649bc48189",
  },
});

app.post("/feedbacks", async (req, res) => {
  //maneira curta de criar o row na tabela:
  /*   const { type, comment,screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  }); */
  //maneira mais semanticamente compreesível de criar o row na tabela:
  const feedback = await prisma.feedback.create({
    data: {
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot,
    },
  });

  await transport.sendMail(
    {
      from: "Marcelo widget mail <marcelo.arraes@gmail.com>",
      to: "Mailtrapson <marcelo.arraes@gmail.com>",
      subject: "Novo feedback",
      html: [
        `<div style="font-family: sans-serif; font-size:16px; color:#111;">`,
        `<h1>Novo feedback</h1>`,
        `<p>Tipo: ${feedback.type}</p>`,
        `<p>Comentário: ${feedback.comment}</p>`,
        `<p>Screenshot: ${feedback.screenshot}</p>`,
        `</div>`,
      ].join("\n"),
    },
    (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    }
  );

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
