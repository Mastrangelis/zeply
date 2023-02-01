import React from "react";
import CryptoIcon from "../CryptoIcon";
import clsx from "clsx";
import { TextColor } from "constants/formats";
import { useSelectCurrencyContext } from "context/SelectCurrencyContext";
import { motion } from "framer-motion";

type CurrencyTextFieldProps = {
  total: number;
  textColor?: TextColor;
};

const CurrencyTextField = ({ total, textColor }: CurrencyTextFieldProps) => {
  const { selectedCurrency } = useSelectCurrencyContext();
  return (
    <div className="flex items-center justify-between">
      <span
        className={clsx({
          "pr-2": true,
          "text-positive-200": textColor === "positive",
          "text-negative-200": textColor === "negative",
          "text-primary-300": textColor === "primary",
        })}
      >
        {total}
      </span>
      {selectedCurrency && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 22 }}
          transition={{ duration: 0.3 }}
        >
          <CryptoIcon code={selectedCurrency} />
        </motion.div>
      )}
    </div>
  );
};
export default CurrencyTextField;
