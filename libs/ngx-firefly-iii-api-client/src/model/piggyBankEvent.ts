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


export interface PiggyBankEvent { 
    created_at?: string;
    updated_at?: string;
    currency_id?: string;
    currency_code?: string;
    currency_symbol?: string;
    currency_decimal_places?: number;
    amount?: string;
    /**
     * The journal associated with the event.
     */
    transaction_journal_id?: string | null;
    /**
     * The transaction group associated with the event.
     */
    transaction_group_id?: string | null;
}

