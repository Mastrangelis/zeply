import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonWrapperProps } from "@/types/skeleton";

export default function SkeletonWrapper({
  children,
  baseColor = "#DEE0E6",
  highlightColor = "#F6F6F9",
  borderRadius = "3px",
  duration = 2,
}: SkeletonWrapperProps) {
  return (
    <SkeletonTheme
      baseColor={baseColor}
      highlightColor={highlightColor}
      borderRadius={borderRadius}
      duration={duration}
    >
      {children}
    </SkeletonTheme>
  );
}
