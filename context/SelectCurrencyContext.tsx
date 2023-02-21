/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCryptoPrices } from '@/components/api/queries';
import { SelectOption } from '@/types/select';
import { currencyOptions } from 'constants/options';
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

export type Currency = 'eur' | 'btc' | 'usd';

export type Prices = {
    USD: number;
    EUR: number;
};

type ISelectCurrencyContext = {
    selectedCurrency?: Currency;
    prices: Prices;
    onSelect: (selected: SelectOption) => void;
};

const SelectCurrencyContext = createContext({} as ISelectCurrencyContext);

export function SelectCurrencyContextProvider({
    children
}: {
    children: ReactNode;
}) {
    const [selectedCurrency, setSelectedCurrency] = useState<
        Currency | undefined
    >(currencyOptions[0].cryptoIcon);
    const [prices, setPrices] = useState<Prices>({
        EUR: 0,
        USD: 0
    });

    const { data, isLoading } = useGetCryptoPrices();

    useEffect(() => {
        if (!isLoading && data) {
            setPrices(data);
        }
    }, [data, isLoading]);

    const onSelect = (selected: SelectOption) =>
        setSelectedCurrency(selected.cryptoIcon as Currency);

    const value: ISelectCurrencyContext = useMemo(
        () => ({
            selectedCurrency,
            onSelect,
            prices
        }),
        [selectedCurrency, onSelect, prices]
    );

    return (
        <SelectCurrencyContext.Provider value={value}>
            {children}
        </SelectCurrencyContext.Provider>
    );
}

export function useSelectCurrencyContext() {
    return useContext(SelectCurrencyContext);
}
