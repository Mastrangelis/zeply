import { useQuery } from "react-query";

import { useAxiosRequest } from "../axios";
import { LatestBlock } from "@/types/blockchain";

export default function useGetLatestBlockQuery() {
  const request = useAxiosRequest({
    method: "get",
    url: "/latestblock",
  });

  const { data, ...rest } = useQuery(["latest-block"], request);

  return {
    ...rest,
    data: (data as LatestBlock) ?? {},
  };
}
