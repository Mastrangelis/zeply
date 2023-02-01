import { SelectOption } from "@/types/select";
import { TabOption } from "@/types/tabs";
import { Tab } from "./enums";

const searchFilterOptions: SelectOption[] = [
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Transaction",
    value: "transaction",
  },
];

const currencyOptions: SelectOption[] = [
  {
    label: "BTC",
    value: "btc",
    cryptoIcon: "btc",
  },
  {
    label: "EUR",
    value: "eur",
    cryptoIcon: "eur",
  },
  {
    label: "USD",
    value: "usd",
    cryptoIcon: "usd",
  },
];

const tabOptions: TabOption[] = [
  { label: "Last five transactions", key: Tab.RECENTTXNSTAB },
  { label: "Search results", key: Tab.SEARCHTAB },
];

export { searchFilterOptions, currencyOptions, tabOptions };
