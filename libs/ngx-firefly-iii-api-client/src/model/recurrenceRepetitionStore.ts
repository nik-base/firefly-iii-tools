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
import { RecurrenceRepetitionType } from './recurrenceRepetitionType';


export interface RecurrenceRepetitionStore { 
    type: RecurrenceRepetitionType;
    /**
     * Information that defined the type of repetition. - For \'daily\', this is empty. - For \'weekly\', it is day of the week between 1 and 7 (Monday - Sunday). - For \'ndom\', it is \'1,2\' or \'4,5\' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). \'2,3\' means: the 2nd Wednesday of the month - For \'monthly\' it is the day of the month (1 - 31) - For yearly, it is a full date, ie \'2018-09-17\'. The year you use does not matter. 
     */
    moment: string;
    /**
     * How many occurrences to skip. 0 means skip nothing. 1 means every other.
     */
    skip?: number;
    /**
     * How to respond when the recurring transaction falls in the weekend. Possible values: 1. Do nothing, just create it 2. Create no transaction. 3. Skip to the previous Friday. 4. Skip to the next Monday. 
     */
    weekend?: number;
}
export namespace RecurrenceRepetitionStore {
}


