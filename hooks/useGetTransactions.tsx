"use client";

import { useEffect, useState } from "react";
import { areArraysEqual } from "@/utils";
import {
  useGetLatestBlockQuery,
  useGetTxnsDetailsQuery,
} from "@/components/api/queries";

export default function useGetTransactions() {
  const [latestTxnIdxs, setLatestTxnIdxs] = useState<number[]>([]);

  const { data: latestBlock, isLoading: isLatestBlockLoading } =
    useGetLatestBlockQuery();

  useEffect(() => {
    if (!isLatestBlockLoading && latestBlock?.txIndexes) {
      const { txIndexes } = latestBlock;
      const lastFiveTxIndexes = txIndexes.slice(0, 5);
      if (!areArraysEqual(lastFiveTxIndexes, latestTxnIdxs)) {
        setLatestTxnIdxs(lastFiveTxIndexes);
      }
    }
  }, [isLatestBlockLoading, latestBlock]);

  // Get details for the last 5 transactions
  const results = useGetTxnsDetailsQuery(latestTxnIdxs);

  // Check if any query for any transaction is still loading
  const isLoading = results.some((result) => result.isLoading);

  // Check if any query for any transaction had error
  const isError = results.some((result) => result.isError);

  // Merge transations details
  const data = results
    .map((result) => result.data)
    .sort((a, b) => b.time - a.time);

  return {
    latestBlock,
    data,
    isError,
    isLoading,
  };
}
