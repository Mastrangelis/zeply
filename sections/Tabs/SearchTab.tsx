"use client";

import React, { useMemo } from "react";
import { NoResults } from "@/components/Search";
import { Item, Spinner } from "@/components";
import { isEmptyObject } from "@/utils";
import { motion } from "framer-motion";
import { Card } from "@/components/Cards";
import { useSearchContext } from "context/SearchContext";
import { Filter } from "constants/enums";
import { formatAddr, formatTxn } from "@/utils/blockchain";
import { useBlockchainSocket, useGetTransactions } from "@/hooks";
import { AddressDetails, Txn } from "@/types/blockchain";
import SubscribeUnsubscribeButton from "@/components/Buttons/SubscribeUnsubscribeButton";
import { useSelectCurrencyContext } from "context/SelectCurrencyContext";

const SearchTab = () => {
  const { searchFilter, isLoading, searchResult } = useSearchContext();
  const { latestBlock } = useGetTransactions();
  const { subAddresses, handleAddressSubscription } = useBlockchainSocket();
  const { selectedCurrency, prices } = useSelectCurrencyContext();

  const item: any = useMemo(() => {
    if (isLoading || isEmptyObject(searchResult)) return {};
    if (searchFilter === Filter.TRANSACTION) {
      return formatTxn(
        searchResult as Txn,
        latestBlock,
        prices,
        selectedCurrency
      );
    } else {
      const result = searchResult as AddressDetails;
      if (!result?.address) return {};
      return formatAddr(result, prices, selectedCurrency);
    }
  }, [
    searchFilter,
    searchResult,
    isLoading,
    latestBlock,
    selectedCurrency,
    prices,
  ]);

  const renderSearchResultCardHeader = () => {
    let condition;
    if (searchFilter === Filter.ADDRESS) {
      condition = subAddresses.find(
        (address) => address.addr === item?.address
      );
    }
    return (
      <>
        {searchFilter === Filter.TRANSACTION ? (
          <span className="font-bold text-lg">Transaction Details</span>
        ) : (
          <div className="flex items-center justify-between pr-2">
            <span className="font-bold text-lg">Address Details</span>
            <SubscribeUnsubscribeButton
              buttonText={`${
                condition?.subscribed ? "Unsubscribe from" : "Subscribe to"
              } address`}
              onClick={() => handleAddressSubscription(item.address as string)}
              condition={condition?.subscribed}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center default-transition">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 32 }}
            transition={{ duration: 0.3 }}
          >
            <Spinner size="md" color="disabled" />
          </motion.div>
        </div>
      ) : isEmptyObject(item) ? (
        <NoResults />
      ) : (
        <Card fullHeight>
          <Card.Header
            header={renderSearchResultCardHeader()}
            hasBorderBottom
          />
          <Card.Content classes="pt-5">
            <Item item={item} type={searchFilter} />
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default SearchTab;
