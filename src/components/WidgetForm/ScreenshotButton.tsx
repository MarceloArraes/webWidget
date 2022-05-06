import html2canvas from "html2canvas";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  setScreenshot: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  screenshot,
  setScreenshot,
}: ScreenshotButtonProps) {
  const [isScreenshotReady, setIsScreenshotReady] = useState(false);

  async function handleTakeScreenshot() {
    setIsScreenshotReady(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setScreenshot(base64image);
    setIsScreenshotReady(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="text-zinc-400 hover:text-zinc-100 transition-colors p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash
          onClick={() => setScreenshot(null)}
          weight="fill"
          className="w-4 h-4 absolute"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-violet-800"
      onClick={handleTakeScreenshot}
    >
      {!isScreenshotReady ? <Camera className="h-6 w-6" /> : <Loading />}
    </button>
  );
}
