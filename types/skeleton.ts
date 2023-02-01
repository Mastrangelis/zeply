import { ReactNode } from "react";

type LoadingComponentProps = {
  isLoading?: boolean;
  width?: number;
  height?: number;
  children: ReactNode;
  overflowHidden?: boolean;
  isCentered?: boolean;
  right?: boolean;
  left?: boolean;
  fullWidth?: boolean;
};

type SkeletonWrapperProps = {
  children: ReactNode;
  baseColor?: string;
  highlightColor?: string;
  borderRadius?: string;
  duration?: number;
};

export type { LoadingComponentProps, SkeletonWrapperProps };
