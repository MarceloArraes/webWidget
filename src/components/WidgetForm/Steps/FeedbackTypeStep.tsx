import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  setFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-ls leading-6 mr-10">Deixe seu feedback</span>
        <CloseButton />
      </header>
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
              setFeedbackType(key as FeedbackType);
            }}
          >
            <div className="flex flex-col items-center">
              {value.image.icon}
              {/* alt  
          <img src="{value.image.source}" alt="{value.image.alt}" /> */}
              <span className="text-ls leading-6 mt-2">{value.title}</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
