"use client";

import Image from "next/image";
import { Container } from "@/components";
import { CryptoIconSelect } from "@/components/Select";
import { currencyOptions } from "constants/options";
import { useSelectCurrencyContext } from "context/SelectCurrencyContext";

const Navbar = () => {
  const { onSelect } = useSelectCurrencyContext();

  const NavbarTitle = () => {
    return <div className="header__title">BTCScan</div>;
  };

  const NavbarSelectCurrency = () => {
    return (
      <div className="header__select-currency">
        <div className="flex items-center justify-between">
          <span className="mr-2 text-2xl text-white">Select currency in: </span>
          <CryptoIconSelect options={currencyOptions} onChange={onSelect} />
        </div>
      </div>
    );
  };

  return (
    <div data-testid="header" className="header">
      <Container>
        <div className="header__wrapper">
          <Image
            className="btc-img"
            src="/btc.svg"
            alt="BTC-animated-logo"
            height={56}
            width={56}
            quality={100}
          />
          <NavbarTitle />
          <NavbarSelectCurrency />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
