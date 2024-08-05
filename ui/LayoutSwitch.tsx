"use client";

import { Switch } from "sedna-ui";
import { BoxIcon, GridIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface LayoutSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function LayoutSwitch({ checked = false, onChange }: LayoutSwitchProps) {
  return (
    <div className="flex items-center space-x-4">
      <BoxIcon
        className={clsx("size-6 transition-colors duration-300 ease-in-out", !checked ? "text-white" : "text-[#1e5e9a]")}
      />
      <Switch checked={checked} onChange={onChange} />
      <GridIcon
        className={clsx("size-6 transition-colors duration-300 ease-in-out", checked ? "text-white" : "text-[#1e5e9a]")}
      />
    </div>
  );
}
