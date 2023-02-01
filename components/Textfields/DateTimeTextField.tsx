import React from "react";
import Image from "next/image";

const DateTimeTextField = ({ timestamp }: { timestamp: number }) => {
  return (
    <div className="flex items-center">
      <Image
        src="/clock.svg"
        alt="Clock"
        height={16}
        width={16}
        quality={100}
      />
      <span className="pl-2">{new Date(timestamp * 1000).toString()}</span>
    </div>
  );
};
export default DateTimeTextField;
