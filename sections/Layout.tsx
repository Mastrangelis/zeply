"use client";

import { Toaster } from "@/components";
import { SkeletonWrapper } from "@/components/Skeleton";
import { AxiosContextProvider } from "@/components/api";
import { PROXY_URL } from "@/constants";
import { SearchContextProvider } from "context/SearchContext";
import { SelectCurrencyContextProvider } from "context/SelectCurrencyContext";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <AxiosContextProvider baseUrl={PROXY_URL}>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <SelectCurrencyContextProvider>
            <AnimatePresence mode="wait">
              <SkeletonWrapper>
                <Navbar />
                <Body />
                <Footer />
              </SkeletonWrapper>
            </AnimatePresence>
          </SelectCurrencyContextProvider>
        </SearchContextProvider>
      </QueryClientProvider>
      <Toaster />
    </AxiosContextProvider>
  );
};

export default Layout;
