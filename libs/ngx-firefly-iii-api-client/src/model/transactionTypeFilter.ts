/**
 * Firefly III API v2.1.0
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2024-05-19T04:33:01+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export type TransactionTypeFilter = 'all' | 'withdrawal' | 'withdrawals' | 'expense' | 'deposit' | 'deposits' | 'income' | 'transfer' | 'transfers' | 'opening_balance' | 'reconciliation' | 'special' | 'specials' | 'default';

export const TransactionTypeFilter = {
    All: 'all' as TransactionTypeFilter,
    Withdrawal: 'withdrawal' as TransactionTypeFilter,
    Withdrawals: 'withdrawals' as TransactionTypeFilter,
    Expense: 'expense' as TransactionTypeFilter,
    Deposit: 'deposit' as TransactionTypeFilter,
    Deposits: 'deposits' as TransactionTypeFilter,
    Income: 'income' as TransactionTypeFilter,
    Transfer: 'transfer' as TransactionTypeFilter,
    Transfers: 'transfers' as TransactionTypeFilter,
    OpeningBalance: 'opening_balance' as TransactionTypeFilter,
    Reconciliation: 'reconciliation' as TransactionTypeFilter,
    Special: 'special' as TransactionTypeFilter,
    Specials: 'specials' as TransactionTypeFilter,
    Default: 'default' as TransactionTypeFilter
};

