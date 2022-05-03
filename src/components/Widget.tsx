import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4">
      <Popover.Panel className="text-4xl">Hello WORLD</Popover.Panel>
      <Popover.Button className="flex items-center bg-violet-500 rounded-full h-12  px-3 text-white group">
        <ChatTeardropDots className="items-center h-6 w-6" />
        <span className="transition-all ease-in-out duration-700 overflow-hidden max-w-0 group-hover:max-w-xs group-focus:max-w-xs ">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
