import { MouseEventHandler, ReactNode } from "react";

type ChildrenProps = {
  children?: ReactNode;
};

type CardProps = ChildrenProps & {
  fullHeight?: boolean;
};

type CardHeaderProps = ChildrenProps & {
  header?: string | ReactNode;
  hasBorderBottom: boolean;
  isLoading?: boolean; // used for skeleton loading on card title
  onClick?: MouseEventHandler<HTMLDivElement>;
};

type CardContentProps = ChildrenProps & {
  classes?: string;
};

type AccordionCardProps = {
  isLoading?: boolean;
  children?: ReactNode;
  header: string | ReactNode;
};

export type {
  CardContentProps,
  CardHeaderProps,
  ChildrenProps,
  CardProps,
  AccordionCardProps,
};
