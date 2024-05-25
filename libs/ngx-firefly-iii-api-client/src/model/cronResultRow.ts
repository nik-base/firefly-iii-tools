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


export interface CronResultRow { 
    /**
     * This value tells you if this specific cron job actually fired. It may not fire. Some cron jobs only fire every 24 hours, for example. 
     */
    job_fired?: boolean | null;
    /**
     * This value tells you if this specific cron job actually did something. The job may fire but not change anything. 
     */
    job_succeeded?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be true.
     */
    job_errored?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be the error message. The success message if the job actually ran OK. 
     */
    message?: string | null;
}

