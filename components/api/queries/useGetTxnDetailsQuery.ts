import { useQuery } from "react-query";

import { useAxiosRequest } from "../axios";

interface QueryParams {
  txnHash: string;
}

export default function useGetTxnDetailsQuery(query: QueryParams) {
  const request = useAxiosRequest({
    method: "get",
    url: `/rawtx/${query.txnHash}`,
  });

  const { data, ...rest } = useQuery(["transaction", query], request, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return {
    ...rest,
    data: data ?? {},
  };
}
