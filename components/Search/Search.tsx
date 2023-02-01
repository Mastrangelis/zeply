"use client";

import React, { ReactElement } from "react";
import { defaultSearchInputAttributes } from "@/constants";
import { SeachProps } from "@/types/search";
import clsx from "clsx";

const Search = ({
  searchTerm,
  onSubmit,
  onChange,
  placeholderTxt,
  isDisabled = false,
  inputAttributes = defaultSearchInputAttributes,
}: SeachProps): ReactElement => {
  return (
    <div
      className={clsx({
        search: true,
        "text-disabled": isDisabled,
      })}
    >
      <form onSubmit={onSubmit}>
        <input
          {...inputAttributes}
          placeholder={placeholderTxt}
          value={searchTerm}
          type="search"
          onChange={onChange}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default Search;
