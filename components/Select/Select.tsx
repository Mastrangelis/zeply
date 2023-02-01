"use client";

import React from "react";
import ReactSelect, {
  GetOptionLabel,
  GroupBase,
  OptionsOrGroups,
  StylesConfig,
} from "react-select";
import { SelectOption, SelectProps } from "@/types/select";

const Select = ({
  options = [],
  placeholder,
  defaultValue,
  onChange,
  isSearchable = false,
  components,
  getOptionLabel,
  overrideStyles,
  isDisabled = false,
}: SelectProps) => {
  // Styles
  const customSelectStyles: StylesConfig = {
    control: (styles, props) => ({
      ...styles,
      ...(overrideStyles?.["control"] && {
        ...overrideStyles?.control(styles, props),
      }),
      border: 0,
      fontSize: 14,
      borderRadius: 24,
      boxShadow: "none",
    }),
    indicatorsContainer: (styles, props) => ({
      ...styles,
      ...(overrideStyles?.["indicatorsContainer"] && {
        ...overrideStyles?.indicatorsContainer(styles, props),
      }),
      padding: 0,
    }),
    indicatorSeparator: (styles, props) => ({
      ...styles,
      ...(overrideStyles?.["indicatorSeparator"] && {
        ...overrideStyles?.indicatorSeparator(styles, props),
      }),
      display: "none",
    }),
    valueContainer: (styles, props) => ({
      ...styles,
      ...(overrideStyles?.["valueContainer"] && {
        ...overrideStyles?.valueContainer(styles, props),
      }),
      paddingRight: 0,
    }),
  };

  return (
    <ReactSelect
      options={
        options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>
      }
      isDisabled={isDisabled}
      placeholder={placeholder}
      defaultValue={defaultValue}
      isSearchable={isSearchable}
      onChange={onChange}
      components={components}
      getOptionLabel={getOptionLabel as GetOptionLabel<SelectOption>}
      styles={customSelectStyles as StylesConfig<SelectOption>}
      instanceId="6e62765e-4b91-400c-b2a0-87f8086b1b33"
    />
  );
};

export default Select;
