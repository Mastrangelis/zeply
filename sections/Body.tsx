"use client";

import { useEffect, useState } from "react";
import { Container, TabsController } from "@/components";
import { RecentTxns, SearchTab } from "./Tabs";
import { SearchBar } from "@/components/Search";
import { useBlockchainSocket, useToaster } from "@/hooks";
import { Card } from "@/components/Cards";
import { Tab } from "constants/enums";
import { searchFilterOptions, tabOptions } from "constants/options";
import SubscribeUnsubscribeButton from "@/components/Buttons/SubscribeUnsubscribeButton";
import { TxnOut } from "@/types/blockchain";
import { convertToBTC } from "@/utils/blockchain";

const Body = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.RECENTTXNSTAB);

  const {
    popedItem,
    subscribeToAllNewBtcTransactions,
    subscribedToTxns,
    handleSubscriptionToTxns,
  } = useBlockchainSocket();

  const { toastInfo } = useToaster();

  useEffect(() => {
    // Subscribe to all new transactionss
    subscribeToAllNewBtcTransactions();
  }, []);

  useEffect(() => {
    if (popedItem?.data) {
      const data = JSON.parse(popedItem.data);

      const txnAmountInSathoshis = data?.x?.out?.reduce(
        (acc: number, val: TxnOut) => (acc += val?.value),
        0
      );
      if (txnAmountInSathoshis) {
        toastInfo(`${convertToBTC(txnAmountInSathoshis)} BTC just transfered.`);
      }
    }
  }, [popedItem]);

  return (
    <main>
      <section>
        <Container>
          <SearchBar listItems={searchFilterOptions} />
          <Card>
            <Card.Header hasBorderBottom>
              <TabsController
                tabs={tabOptions}
                activeTab={currentTab}
                onClick={(selectedTab: Tab) => setCurrentTab(selectedTab)}
              />
            </Card.Header>
            <Card.Content classes="recentTxns-tab__card-content">
              {currentTab === Tab.RECENTTXNSTAB ? (
                <RecentTxns />
              ) : (
                <SearchTab />
              )}
            </Card.Content>
          </Card>
          <div className="w-full flex items-center justify-center mt-5">
            <SubscribeUnsubscribeButton
              buttonText={`${
                subscribedToTxns ? "Unsubscribe from" : "Subscribe to"
              } new transactions`}
              onClick={handleSubscriptionToTxns}
              condition={subscribedToTxns}
            />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Body;
