import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseButton = () => {
  return (
    <Popover.Button
      className="w-5 h-5 top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 "
      title="fechar formulario de feedback"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};
