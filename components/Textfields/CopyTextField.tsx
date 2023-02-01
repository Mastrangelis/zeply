import React from "react";
import Image from "next/image";
import { copyText } from "@/utils/copyText";
import { Filter } from "constants/enums";

type CopyTextFieldProps = {
  text: string;
  type: Filter;
};
const CopyTextField = ({ text, type }: CopyTextFieldProps) => {
  return (
    <div className="flex items-center text-link">
      <span>{text}</span>
      <div
        className="pl-2 opacity-40 cursor-pointer"
        onClick={() => copyText(text, type)}
      >
        <Image
          src="/copy.svg"
          alt="Copy to clipboard"
          height={14}
          width={14}
          quality={100}
        />
      </div>
    </div>
  );
};
export default CopyTextField;
