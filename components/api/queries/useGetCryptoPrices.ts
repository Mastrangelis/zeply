//min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR

import { useQuery } from "react-query";

import { useAxiosRequest } from "../axios";

export default function useGetCryptoPrices() {
  const request = useAxiosRequest(
    {
      method: "get",
      url: "/data/price?fsym=BTC&tsyms=USD,EUR",
    },
    "https:/min-api.cryptocompare.com"
  );

  const { data, ...rest } = useQuery(["crypto-prices"], request);

  return {
    ...rest,
    data: data ?? {},
  };
}
