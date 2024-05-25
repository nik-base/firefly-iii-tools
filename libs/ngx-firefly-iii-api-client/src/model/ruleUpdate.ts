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
import { RuleTriggerType } from './ruleTriggerType';
import { RuleActionUpdate } from './ruleActionUpdate';
import { RuleTriggerUpdate } from './ruleTriggerUpdate';


export interface RuleUpdate { 
    title?: string;
    description?: string;
    /**
     * ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.
     */
    rule_group_id?: string;
    order?: number;
    trigger?: RuleTriggerType;
    /**
     * Whether or not the rule is even active. Default is true.
     */
    active?: boolean;
    /**
     * If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.
     */
    strict?: boolean;
    /**
     * If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.
     */
    stop_processing?: boolean;
    triggers?: Array<RuleTriggerUpdate>;
    actions?: Array<RuleActionUpdate>;
}
export namespace RuleUpdate {
}

