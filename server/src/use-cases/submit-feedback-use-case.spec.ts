import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("SubmitFeedbackUseCase", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "This is a bug",
        screenshot: "data:image/png;base64,...",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should throw an error if type is not provided", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "dasdasdas",
        screenshot: "data:image/png;base64,...",
      })
    ).rejects.toThrow();
  });
  it("should throw an error if comment is not provided", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,...",
      })
    ).rejects.toThrow();
  });
  it("should throw an error if screenshot format is wrong", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "dasdasdas",
        screenshot: "asdasdasdasd",
      })
    ).rejects.toThrow();
  });
});
