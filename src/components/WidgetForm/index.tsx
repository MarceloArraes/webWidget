import { CloseButton } from "./../CloseButton";
import { Bug, Lightbulb, Note } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import bug from "../../images/bug.svg";
import lightbulb from "../../images/light-bulb.svg";
import thoughtballoon from "../../images/thought-balloon.svg";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      icon: <Bug />,
      source: bug,
      alt: "Imagem de Bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      icon: <Lightbulb />,
      source: lightbulb,
      alt: "Imagem de Ideia",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      icon: <Note />,
      source: thoughtballoon,
      alt: "Imagem de Outro",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="w-[calc(100vw-2rem)] sm:w-auto bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col justify-center items-center shadow-lg">
      {feedbackSent ? (
        <FeedbackSucessStep handleRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              setFeedbackSent={setFeedbackSent}
              handleRestartFeedback={handleRestartFeedback}
              feedbackType={feedbackType}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with discipline and{" "}
        <a
          target={"_blank"}
          href="https://blog.doist.com/deep-work/"
          className="underline underline-offset-1"
        >
          deep work.
        </a>
      </footer>
    </div>
  );
};
