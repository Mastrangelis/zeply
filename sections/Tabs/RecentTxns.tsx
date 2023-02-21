import React, { useMemo } from 'react';
import useGetTransactions from '@/hooks/useGetTransactions';
import { AccordionCard } from '@/components/Cards';
import { FormattedTxn, Txn } from '@/types/blockchain';
import { formatTxn } from '@/utils/blockchain';
import { Item } from '@/components';
import { Filter } from 'constants/enums';
import { useSelectCurrencyContext } from 'context/SelectCurrencyContext';

const RecentTxns = () => {
    const {
        latestBlock,
        data: transactions,
        customLoading: isTransactionsLoading
    } = useGetTransactions();

    const { selectedCurrency, prices } = useSelectCurrencyContext();

    const items: FormattedTxn[] = useMemo(() => {
        if (isTransactionsLoading) return new Array(5).fill({});

        return transactions?.map((transaction: Txn) =>
            formatTxn(transaction, latestBlock, prices, selectedCurrency)
        );
    }, [transactions, isTransactionsLoading]);

    const renderAccordionCardHeader = (item: FormattedTxn) => (
        <div className="flex items-center justify-between mr-2">
            <span className="font-medium text-base">
                Details for Transaction with hash{' '}
                <span className="font-bold text-disabled">{item?.hash}</span>
            </span>
            {item?.time && (
                <span>{new Date(item.time * 1000).toISOString()}</span>
            )}
        </div>
    );

    return (
        <>
            {items?.map((item: FormattedTxn, idx: number) => (
                <AccordionCard
                    key={idx}
                    isLoading={isTransactionsLoading}
                    header={renderAccordionCardHeader(item)}
                >
                    <div key={idx}>
                        <Item item={item} type={Filter.TRANSACTION} />
                    </div>
                </AccordionCard>
            ))}
        </>
    );
};

export default RecentTxns;
