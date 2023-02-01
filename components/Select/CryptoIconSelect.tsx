"use client";

import React from "react";
import { GroupBase, OptionProps, components } from "react-select";
import Select from "./Select";
import CryptoIcon from "@/components/CryptoIcon";
import {
  CryptoIconOptionLabelProps,
  CryptoIconSelectProps,
  SelectOption,
} from "@/types/select";
import { useSelectCurrencyContext } from "context/SelectCurrencyContext";

const CryptoIconSelect = ({
  options = [],
  onChange,
}: CryptoIconSelectProps) => {
  const { selectedCurrency } = useSelectCurrencyContext();
  const { Option } = components;

  const CryptoIconLabel = ({
    label,
    cryptoIcon,
  }: CryptoIconOptionLabelProps) => {
    return (
      <div className="flex items-center gap-2">
        {cryptoIcon && <CryptoIcon code={cryptoIcon} />}
        <span>{label}</span>
      </div>
    );
  };

  const CryptoIconOption = (
    props: JSX.IntrinsicAttributes &
      OptionProps<unknown, boolean, GroupBase<unknown>>
  ) => {
    const data = props?.data as SelectOption;
    const { label, cryptoIcon } = data;
    return (
      <Option {...props}>
        <CryptoIconLabel label={label} cryptoIcon={cryptoIcon} />
      </Option>
    );
  };

  return (
    <Select
      options={options}
      onChange={onChange}
      components={{ Option: CryptoIconOption }}
      placeholder="Select currency"
      defaultValue={options.find(
        (option: SelectOption) => option.cryptoIcon === selectedCurrency
      )}
      getOptionLabel={(
        props: JSX.IntrinsicAttributes & CryptoIconOptionLabelProps
      ) => <CryptoIconLabel {...props} />}
      overrideStyles={{
        control: (styles) => ({
          ...styles,
          minWidth: 110,
          width: 110,
        }),
      }}
    />
  );
};

export default CryptoIconSelect;
