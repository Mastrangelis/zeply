import React, { MouseEventHandler } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import Spinner from "../Spinner";

type SearchButtonProps = {
  isLoading: boolean;
  errorMessage?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SearchButton = ({
  isLoading,
  errorMessage,
  onClick,
}: SearchButtonProps) => {
  return (
    <button
      className={clsx({
        "searchbar__search-btn": true,
        "btn-disabled": isLoading,
        "hover:cursor-pointer hover:opacity-50": !errorMessage,
        "opacity-50 cursor-not-allowed": errorMessage,
      })}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full default-transition">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 22 }}
            transition={{ duration: 0.3 }}
          >
            <Spinner size="sm" color="disabled" />
          </motion.div>
          <motion.div animate={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Image
              src="/search.svg"
              alt="Search"
              height={22}
              width={22}
              quality={100}
            />
          </motion.div>
        </div>
      ) : (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.3 }}>
          <Image
            src="/search.svg"
            alt="Search"
            height={22}
            width={22}
            quality={100}
          />
        </motion.div>
      )}
    </button>
  );
};

export default SearchButton;
