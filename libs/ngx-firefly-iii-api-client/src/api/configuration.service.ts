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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { BadRequestResponse } from '../model/badRequestResponse';
// @ts-ignore
import { ConfigValueFilter } from '../model/configValueFilter';
// @ts-ignore
import { ConfigValueUpdateFilter } from '../model/configValueUpdateFilter';
// @ts-ignore
import { Configuration } from '../model/configuration';
// @ts-ignore
import { ConfigurationSingle } from '../model/configurationSingle';
// @ts-ignore
import { InternalExceptionResponse } from '../model/internalExceptionResponse';
// @ts-ignore
import { NotFoundResponse } from '../model/notFoundResponse';
// @ts-ignore
import { PolymorphicProperty } from '../model/polymorphicProperty';
// @ts-ignore
import { UnauthenticatedResponse } from '../model/unauthenticatedResponse';
// @ts-ignore
import { ValidationErrorResponse } from '../model/validationErrorResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { HttpConfiguration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    protected basePath = 'https://demo.firefly-iii.org/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new HttpConfiguration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: HttpConfiguration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Get Firefly III system configuration values.
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getConfiguration(xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/x-www-form-urlencoded', context?: HttpContext, transferCache?: boolean}): Observable<Array<Configuration>>;
    public getConfiguration(xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/x-www-form-urlencoded', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<Configuration>>>;
    public getConfiguration(xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/x-www-form-urlencoded', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<Configuration>>>;
    public getConfiguration(xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/x-www-form-urlencoded', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;
        if (xTraceId !== undefined && xTraceId !== null) {
            localVarHeaders = localVarHeaders.set('X-Trace-Id', String(xTraceId));
        }

        let localVarCredential: string | undefined;
        // authentication (firefly_iii_auth) required
        localVarCredential = this.configuration.lookupCredential('firefly_iii_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (local_bearer_auth) required
        localVarCredential = this.configuration.lookupCredential('local_bearer_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/x-www-form-urlencoded'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v1/configuration`;
        return this.httpClient.request<Array<Configuration>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a single Firefly III system configuration value
     * Returns one configuration variable for this Firefly III installation
     * @param name The name of the configuration value you want to know.
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSingleConfiguration(name: ConfigValueFilter, xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ConfigurationSingle>;
    public getSingleConfiguration(name: ConfigValueFilter, xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ConfigurationSingle>>;
    public getSingleConfiguration(name: ConfigValueFilter, xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ConfigurationSingle>>;
    public getSingleConfiguration(name: ConfigValueFilter, xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSingleConfiguration.');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xTraceId !== undefined && xTraceId !== null) {
            localVarHeaders = localVarHeaders.set('X-Trace-Id', String(xTraceId));
        }

        let localVarCredential: string | undefined;
        // authentication (firefly_iii_auth) required
        localVarCredential = this.configuration.lookupCredential('firefly_iii_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (local_bearer_auth) required
        localVarCredential = this.configuration.lookupCredential('local_bearer_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v1/configuration/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "ConfigValueFilter", dataFormat: undefined})}`;
        return this.httpClient.request<ConfigurationSingle>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update configuration value
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * @param name The name of the configuration value you want to update.
     * @param value 
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setConfiguration(name: ConfigValueUpdateFilter, value: PolymorphicProperty, xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ConfigurationSingle>;
    public setConfiguration(name: ConfigValueUpdateFilter, value: PolymorphicProperty, xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ConfigurationSingle>>;
    public setConfiguration(name: ConfigValueUpdateFilter, value: PolymorphicProperty, xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ConfigurationSingle>>;
    public setConfiguration(name: ConfigValueUpdateFilter, value: PolymorphicProperty, xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling setConfiguration.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling setConfiguration.');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xTraceId !== undefined && xTraceId !== null) {
            localVarHeaders = localVarHeaders.set('X-Trace-Id', String(xTraceId));
        }

        let localVarCredential: string | undefined;
        // authentication (firefly_iii_auth) required
        localVarCredential = this.configuration.lookupCredential('firefly_iii_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (local_bearer_auth) required
        localVarCredential = this.configuration.lookupCredential('local_bearer_auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded',
            'application/json'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let localVarFormParams: { append(param: string, value: any): any; };
        let localVarUseForm = false;
        let localVarConvertFormParamsToString = false;
        if (localVarUseForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new HttpParams({encoder: this.encoder});
        }

        if (value !== undefined) {
            localVarFormParams = localVarFormParams.append('value', localVarUseForm ? new Blob([JSON.stringify(value)], {type: 'application/json'}) : <any>value) as any || localVarFormParams;
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v1/configuration/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "ConfigValueUpdateFilter", dataFormat: undefined})}`;
        return this.httpClient.request<ConfigurationSingle>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: localVarConvertFormParamsToString ? localVarFormParams.toString() : localVarFormParams,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
