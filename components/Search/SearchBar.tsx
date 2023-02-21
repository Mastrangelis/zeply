'use client';

import React, { ReactElement } from 'react';
import Select from '../Select/Select';
import clsx from 'clsx';
import { useSearchInputValidation } from '@/hooks';
import { SearchBarProps } from '@/types/search';
import Search from './Search';
import { useSearchContext } from 'context/SearchContext';
import SearchButton from '../Buttons/SearchButton';
import { Filter } from 'constants/enums';

const SearchBar = ({ listItems = [] }: SearchBarProps): ReactElement => {
    const {
        isLoading,
        searchTerm,
        searchFilter,
        searchPlaceholder,
        onSearchFilterChange,
        onSearchTermChange,
        onSearchTermSubmit
    } = useSearchContext();

    const { errorMessage } = useSearchInputValidation({
        searchTerm,
        searchFilter
    });

    return (
        <div className="flex flex-col h-[65px]">
            <div className="flex items-center justify-start xss:justify-center">
                <div className="searchbar">
                    {listItems?.length && (
                        <div
                            className={clsx({
                                'h-full flex items-center rounded-2xl ': true,
                                'py-2 pl-2 border-r-2': !isLoading
                            })}
                        >
                            <Select
                                options={listItems}
                                onChange={onSearchFilterChange}
                                defaultValue={listItems[0]}
                                isDisabled={isLoading}
                                overrideStyles={{
                                    control: (styles) => ({
                                        ...styles,
                                        minWidth: 125,
                                        width: 125
                                    })
                                }}
                            />
                        </div>
                    )}

                    <Search
                        placeholderTxt={searchPlaceholder}
                        searchTerm={searchTerm}
                        onSubmit={onSearchTermSubmit}
                        onChange={onSearchTermChange}
                        isDisabled={isLoading}
                    />

                    <SearchButton
                        onClick={onSearchTermSubmit}
                        errorMessage={errorMessage}
                        isLoading={isLoading}
                    />
                </div>
            </div>
            <div
                className={clsx({
                    'flex items-center justify-start pl-[150px] xss:justify-center ':
                        true,
                    'xss:pr-[165px] xs:pr-[260px] sm:pr-[380px] md:pr-[450px] lg:pr-[610px] xlg:pr-[760px]':
                        searchFilter === Filter.TRANSACTION,
                    'xss:pr-[230px] xs:pr-[310px] sm:pr-[430px] md:pr-[510px] lg:pr-[670px] xlg:pr-[820px]':
                        searchFilter === Filter.ADDRESS
                })}
            >
                <span
                    className={clsx({
                        'text-tiny text-negative-200 default-transition': true,
                        'opacity-0 visually-hidden': !errorMessage
                    })}
                >
                    {errorMessage}
                </span>
            </div>
        </div>
    );
};

export default SearchBar;
