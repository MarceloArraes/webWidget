import { CloseButton } from "./CloseButton";
import { Bug, Lightbulb, Note } from "phosphor-react";
import { useState } from "react";

const feedbackTypes = {
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

type FeedbackType = typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="w-[calc(100vw-2rem)] sm:w-auto bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col justify-center items-center shadow-lg">
      <header>
        <span className="text-ls leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <button
              key={key}
              className="
        flex-1
        flex-col
        gap-2
        border-2
        border-zinc-400
        items-center 
        justify-center w-24 py-5 pt-2 rounded-lg bg-zinc-800
        px-3 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-800 
        hover:border-violet-400 focus:outline-none focus:border-violet-400
        "
              type="button"
              onClick={() => {
                setFeedbackType(key as unknown as FeedbackType);
              }}
            >
              <div className="flex flex-col items-center">
                {value.image.source}
                {/* alt  */}
                <span className="text-ls leading-6 mt-2">{value.title}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p>Hello World</p>
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
