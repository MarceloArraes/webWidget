import { FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export const FeedbackContentStep = ({
  feedbackType,
}: FeedbackContentStepProps) => {
  return (
    <>
      <header className="">
        <span className="text-ls leading-6">
          {feedbackType}
          <img src="" alt="" />
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
};
