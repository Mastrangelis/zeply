import { useQueries, useQuery } from "react-query";

import { useAxiosRequest } from "../axios";

interface QueryParams {
  address: string;
}

export default function useGetAddressDetailsQuery(query: QueryParams) {
  const queries = [
    {
      querKey: ["address", query],
      queryFn: useAxiosRequest({
        method: "get",
        url: `/multiaddr?active=${query.address}`,
      }),
    },
    {
      querKey: ["address-unspent", query],
      queryFn: useAxiosRequest({
        method: "get",
        url: `/unspent?active=${query.address}`,
      }),
    },
  ];
  const results = useQueries(
    queries.map((q) => ({
      queryKey: q.querKey,
      queryFn: q.queryFn,
      staleTime: Infinity,
      enabled: false,
      refetchOnWindowFocus: false,
    }))
  );

  return {
    refetch: async () => {
      return Promise.all([results[0].refetch(), results[1].refetch()]);
    },
    isLoading: results.some((result) => result.isLoading),
    data: results
      ? {
          address: results[0].data?.addresses[0],
          unspentOutputs: results[1].data?.unspent_outputs,
        }
      : {
          address: {},
          unspentOutputs: [],
        },
  };
}
