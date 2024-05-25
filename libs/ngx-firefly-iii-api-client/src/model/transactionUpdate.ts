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
import { TransactionSplitUpdate } from './transactionSplitUpdate';


export interface TransactionUpdate { 
    /**
     * Whether or not to apply rules when submitting transaction.
     */
    apply_rules?: boolean;
    /**
     * Whether or not to fire the webhooks that are related to this event.
     */
    fire_webhooks?: boolean;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     */
    group_title?: string | null;
    transactions?: Array<TransactionSplitUpdate>;
}

