import { Currency } from "context/SelectCurrencyContext";
import { StylesConfig } from "react-select";
import { Filter } from "./search";

type SelectOption = {
  label: string;
  value: string | Currency | Filter;
  cryptoIcon?: Currency;
};

type SelectProps = {
  placeholder?: string;
  defaultValue?: SelectOption;
  options: SelectOption[];
  isSearchable?: boolean;
  onChange: (selected: any) => void;
  components?: object;
  getOptionLabel?: CallableFunction;
  overrideStyles?: StylesConfig;
  isDisabled?: boolean;
};

type CryptoIconSelectProps = {
  defaultValue?: string;
  options: SelectOption[];
  isSearchable?: boolean;
  onChange: (selected: SelectOption) => void;
};

type CryptoIconOptionLabelProps = {
  label: string;
  cryptoIcon?: string;
};

export type {
  SelectOption,
  SelectProps,
  CryptoIconSelectProps,
  CryptoIconOptionLabelProps,
};
