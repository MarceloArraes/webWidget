import { CloseButton } from "./../CloseButton";
import { Bug, Lightbulb, Note } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: <Bug />,
      alt: "Imagem de Bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: <Lightbulb />,
      alt: "Imagem de Ideia",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: <Note />,
      alt: "Imagem de Outro",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="w-[calc(100vw-2rem)] sm:w-auto bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col justify-center items-center shadow-lg">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} />
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
