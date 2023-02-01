"use client";

import React, { createContext, ReactNode, useContext, useMemo } from "react";
import axios from "axios";

const AxiosContext = createContext(axios);

interface AxiosProviderProps {
  children: ReactNode;
  baseUrl: string;
}

export function AxiosContextProvider({
  children,
  baseUrl,
}: AxiosProviderProps) {
  const axiosInstance: any = useMemo(() => {
    return axios.create({
      baseURL: baseUrl,
      withCredentials: false,
    });
  }, [baseUrl]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}

export function useAxiosRequest(options: object, diffBaseUrl?: string) {
  const axiosInstance = useContext(AxiosContext);

  return async (runtimeOptions: object) => {
    const res = await axiosInstance({
      ...options,
      ...runtimeOptions,
      ...(diffBaseUrl && { baseURL: diffBaseUrl }),
    });

    return res.data;
  };
}
