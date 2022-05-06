import {
  ArrowArcLeft,
  ArrowElbowLeft,
  ArrowLeft,
  Camera,
} from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  setFeedbackSent: (sent: boolean) => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  handleRestartFeedback,
  setFeedbackSent,
}: FeedbackContentStepProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ screenshot, comment });
    setFeedbackSent(true);
  }

  return (
    <>
      <header className="">
        <button
          type="button"
          className="absolute top-5 left-5 w-2 h-2 text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft width={20} height={20} />
        </button>

        <span className="text-xl leading-6 items-center gap-2 flex ">
          {feedbackType}
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="h-6 w-6"
          />
        </span>

        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="p-2 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-1 min-w-[304px] min-h-[112px] w-full placeholder:zinc-400 placeholder:text-sm text-sm focus:ring-violet-400 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex justify-end w-full m-2 gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />
          <button
            type="submit"
            disabled={!screenshot && !comment}
            className="disabled:opacity-50 disabled:hover:bg-violet-400 p-2 bg-violet-400 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-violet-800"
          >
            Enviar
          </button>
        </footer>
      </form>
    </>
  );
};
