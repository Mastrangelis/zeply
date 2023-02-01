import { useQueries } from "react-query";

import { useAxiosRequest } from "../axios";

export default function useGetTxnsDetailsQuery(txIndexes: number[]) {
  return useQueries(
    txIndexes.map((txIdx: number) => ({
      queryKey: ["transaction", txIdx],
      queryFn: useAxiosRequest({
        method: "get",
        url: `/rawtx/${txIdx}`,
      }),
      staleTime: Infinity,
    }))
  );
}
