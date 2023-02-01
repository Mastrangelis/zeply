"use client";

import { ReactNode } from "react";
import { toast } from "react-toastify";

export default function useToaster() {
  const toastSuccess = (message: string | ReactNode) =>
    toast(message, { type: "success" });

  const toastError = (message: string | ReactNode) =>
    toast(message, { type: "error" });

  const toastWarning = (message: string | ReactNode) =>
    toast(message, { type: "warning" });

  const toastInfo = (message: string | ReactNode) =>
    toast(message, { type: "info" });

  return {
    toastError,
    toastInfo,
    toastSuccess,
    toastWarning,
  };
}
