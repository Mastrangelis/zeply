"use client";

import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import useInterval from "./useInterval";
import { WEBSOCKET_URL } from "@/constants";

type SubscribedAddress = {
  addr: string;
  subscribed: boolean;
};

const useBlockchainSocket = () => {
  // Public API that will echo messages sent to it back to the client
  const socketUrl = WEBSOCKET_URL;
  const [messagesHistory, setMessagesHistory] = useState<MessageEvent<any>[]>(
    []
  );
  const [subscribedToTxns, setSubscribedToTxns] = useState<boolean>(true);
  const [popedItem, setPopedItem] = useState<MessageEvent<any>>();
  const [subAddresses, setSubAddresses] = useState<SubscribedAddress[]>([]);

  const { sendMessage, lastMessage, sendJsonMessage, readyState } =
    useWebSocket(socketUrl, {
      onOpen: () => console.log("Connected to blockchain.info web socket"),
      onClose: () => console.log("Close socket connection on blockchain.info"),
      //Will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: () => true,
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    });

  useEffect(() => {
    if (lastMessage !== null) {
      setMessagesHistory((prev: any) => [...prev, lastMessage]);
    }
  }, [lastMessage, setMessagesHistory]);

  useInterval(() => {
    if (messagesHistory?.length) {
      const firstMessage = messagesHistory.shift();
      setPopedItem(firstMessage);
    }
  }, 2500);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const handleSendMessage = useCallback((msg: string) => sendMessage(msg), []);

  const handleSendJsonMessage = useCallback(
    (obj: object) => sendJsonMessage(obj),
    []
  );

  const subscribeToAllNewBtcTransactions = () =>
    handleSendJsonMessage({
      op: "unconfirmed_sub",
    });

  const unsubscribeFromAllNewBtcTransactions = () =>
    handleSendJsonMessage({
      op: "unconfirmed_unsub",
    });

  const subscribeToBtcAddress = (addr: string) =>
    handleSendJsonMessage({
      op: "addr_sub",
      addr,
    });

  const unsubscribeFromBtcAddress = (addr: string) =>
    handleSendJsonMessage({
      op: "addr_unsub",
      addr,
    });

  const handleAddressSubscription = (addr: string) => {
    const shallowCopy = [...subAddresses];
    const index = shallowCopy.findIndex(
      (address: SubscribedAddress) => address.addr === addr
    );
    debugger;
    if (index > -1) {
      if (shallowCopy[index].subscribed) {
        shallowCopy.splice(index, 1, {
          ...shallowCopy[index],
          subscribed: false,
        });
        unsubscribeFromBtcAddress(addr);
      } else {
        shallowCopy.splice(index, 1, {
          ...shallowCopy[index],
          subscribed: true,
        });
        subscribeToBtcAddress(addr);
      }
      setSubAddresses(shallowCopy);
      return;
    }
    setSubAddresses((prev: SubscribedAddress[]) => [
      ...prev,
      {
        addr,
        subscribed: true,
      },
    ]);
    return subscribeToBtcAddress(addr);
  };

  const handleSubscriptionToTxns = () => {
    if (subscribedToTxns) {
      unsubscribeFromAllNewBtcTransactions();
    } else {
      subscribeToAllNewBtcTransactions();
    }
    setSubscribedToTxns((prev: boolean) => !prev);
    setMessagesHistory([]);
  };

  return {
    handleSubscriptionToTxns,
    handleAddressSubscription,
    subAddresses,
    popedItem,
    subscribedToTxns,
    messagesHistory,
    subscribeToAllNewBtcTransactions,
    subscribeToBtcAddress,
    unsubscribeFromAllNewBtcTransactions,
    unsubscribeFromBtcAddress,
    connectionStatus,
    handleSendMessage,
    handleSendJsonMessage,
  };
};

export default useBlockchainSocket;
