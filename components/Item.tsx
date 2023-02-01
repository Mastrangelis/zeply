import React from "react";
import clsx from "clsx";
import { FieldMetada, addrFormatted, txnFormatted } from "constants/formats";
import { Filter } from "constants/enums";
import {
  CopyTextField,
  CurrencyTextField,
  DateTimeTextField,
} from "./Textfields";

const Item = ({ item, type }: { item: any; type: Filter }) => {
  const renderRow = (metadata: FieldMetada, index: number) => {
    return (
      <div key={index} className="flex items-center mt-1 mb-4">
        {/* Label */}
        <div className="pl-2 flex-[0_0_25%]">
          <span>{metadata.label}</span>
        </div>

        {/* Value */}
        <div
          className={clsx({
            "badge-in": metadata?.hasBadge,
          })}
        >
          {metadata?.isTimestamp ? (
            <DateTimeTextField timestamp={item[metadata.prop] as number} />
          ) : metadata?.copyToClipboard ? (
            <CopyTextField text={item[metadata.prop] as string} type={type} />
          ) : metadata?.hasCurrencyIcon ? (
            <CurrencyTextField
              total={item[metadata.prop] as number}
              textColor={metadata?.textColor}
            />
          ) : (
            <span>{item[metadata.prop]}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {type === Filter.TRANSACTION
        ? txnFormatted.map(renderRow)
        : addrFormatted.map(renderRow)}
    </>
  );
};

export default Item;
