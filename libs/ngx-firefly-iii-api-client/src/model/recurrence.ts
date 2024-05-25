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
import { RecurrenceRepetition } from './recurrenceRepetition';
import { RecurrenceTransaction } from './recurrenceTransaction';
import { RecurrenceTransactionType } from './recurrenceTransactionType';


export interface Recurrence { 
    readonly created_at?: string;
    readonly updated_at?: string;
    type?: RecurrenceTransactionType;
    title?: string;
    /**
     * Not to be confused with the description of the actual transaction(s) being created.
     */
    description?: string;
    /**
     * First time the recurring transaction will fire. Must be after today.
     */
    first_date?: string;
    /**
     * Last time the recurring transaction has fired.
     */
    readonly latest_date?: string | null;
    /**
     * Date until the recurring transaction can fire. Use either this field or repetitions.
     */
    repeat_until?: string | null;
    /**
     * Max number of created transactions. Use either this field or repeat_until.
     */
    nr_of_repetitions?: number | null;
    /**
     * Whether or not to fire the rules after the creation of a transaction.
     */
    apply_rules?: boolean;
    /**
     * If the recurrence is even active.
     */
    active?: boolean;
    notes?: string | null;
    repetitions?: Array<RecurrenceRepetition>;
    transactions?: Array<RecurrenceTransaction>;
}
export namespace Recurrence {
}


