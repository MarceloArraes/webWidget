import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "306e96103371b6",
    pass: "5835649bc48189",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  /*   const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  }); */

  /*   transport.sendMail({
    from: "Marcelo Widget<marcelo@marcelo.com>",
    to: "Marcelo<marcelo.arraes@gmail.com>",
    subject: "Feedback",
    html: [
      `<div>`,
      `<h1>Feedback</h1>`,
      `<p>${type}</p>`,
      `<p>${comment}</p>`,
      `<p>${screenshot}</p>`,
      `</div>`,
    ].join("\n"),
  }); */

  console.log("Hello World :", type, comment, screenshot);
  return res.status(201).send();
});
