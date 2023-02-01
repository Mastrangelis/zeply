import React from "react";
import clsx from "clsx";
import { SpinnerProps } from "@/types/spinner";

export default function Spinner({
  size = "sm",
  color = "default",
}: SpinnerProps) {
  return (
    <div
      className={clsx({
        spinner: true,
        "w-8 h-8": size !== "sm",
        "w-[22px] h-[22px]": size === "sm",
        "border-blue-600": color === "default",
        "border-primary-300": color === "light",
        "border-blackWhite-350": color === "disabled",
      })}
    />
  );
}
