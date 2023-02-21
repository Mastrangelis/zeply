/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useGetTxnDetailsQuery,
    useGetAddressDetailsQuery
} from '@/components/api/queries';
import { placeholders } from '@/constants';
import { useSearchInputValidation } from '@/hooks';
import { AddressDetails, Txn } from '@/types/blockchain';
import { SelectOption } from '@/types/select';
import { Filter } from 'constants/enums';
import React, {
    ChangeEvent,
    ChangeEventHandler,
    createContext,
    ReactNode,
    SyntheticEvent,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

interface ISearchContext {
    searchTerm: string;
    searchPlaceholder: string;
    searchFilter: Filter;
    searchResult: Txn | AddressDetails | object;
    onSearchTermChange: ChangeEventHandler<HTMLInputElement>;
    onSearchTermSubmit: any;
    onSearchFilterChange: (selected: SelectOption) => void;
    isLoading: boolean;
}
const SearchContext = createContext({} as ISearchContext);

export function SearchContextProvider({ children }: { children: ReactNode }) {
    const [searchFilter, setSearchFilter] = useState<Filter>(Filter.ADDRESS);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchPlaceholder, setSearchPlaceholder] = useState<string>(
        placeholders.address
    );
    const [searchResult, setSearchResult] = useState<object>({});

    const { errorMessage } = useSearchInputValidation({
        searchFilter,
        searchTerm
    });

    const { isLoading: isTxnLoading, refetch: txnRefetch } =
        useGetTxnDetailsQuery({
            txnHash: searchTerm
        });

    const { isLoading: isAddrLoading, refetch: addrRefetch } =
        useGetAddressDetailsQuery({
            address: searchTerm
        });

    const callFunc: any = {
        [Filter.ADDRESS]: addrRefetch,
        [Filter.TRANSACTION]: txnRefetch
    };

    const onSearchTermSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (errorMessage) return;
        if (searchTerm) {
            callFunc[searchFilter]().then((result: any) => {
                let data;
                if (searchFilter === Filter.ADDRESS && result?.length > 1) {
                    data = {
                        address: result[0].data?.addresses[0],
                        unspentOutputs: result[1].data?.unspent_outputs
                    };
                } else if (searchFilter === Filter.TRANSACTION) {
                    data = result?.data;
                }
                setSearchResult(data ?? {});
            });
        }
        return;
    };

    const onSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const onSearchFilterChange = (selected: SelectOption) => {
        const selectedFilter = selected.value as Filter;
        const placeholder: string =
            selectedFilter === Filter.TRANSACTION
                ? placeholders.transaction
                : placeholders.address;
        setSearchPlaceholder(placeholder);
        setSearchFilter(selectedFilter);
        setSearchTerm('');
        setSearchResult({});
    };

    useEffect(() => {
        if (!searchTerm && searchResult) {
            setSearchResult({});
        }
    }, [searchTerm]);

    const isLoading = isAddrLoading || isTxnLoading;

    const value: ISearchContext = useMemo(
        () => ({
            onSearchFilterChange,
            onSearchTermChange,
            onSearchTermSubmit,
            searchResult,
            searchTerm,
            searchFilter,
            searchPlaceholder,
            isLoading
        }),
        [
            onSearchFilterChange,
            onSearchTermChange,
            onSearchTermSubmit,
            searchResult,
            searchTerm,
            searchFilter,
            searchPlaceholder,
            isLoading
        ]
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchContext() {
    return useContext(SearchContext);
}
