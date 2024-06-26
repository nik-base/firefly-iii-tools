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
import { InternalExceptionResponse } from '../model/internalExceptionResponse';
// @ts-ignore
import { NotFoundResponse } from '../model/notFoundResponse';
// @ts-ignore
import { Preference } from '../model/preference';
// @ts-ignore
import { PreferenceArray } from '../model/preferenceArray';
// @ts-ignore
import { PreferenceSingle } from '../model/preferenceSingle';
// @ts-ignore
import { PreferenceUpdate } from '../model/preferenceUpdate';
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
export class PreferencesService {

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
     * Return a single preference.
     * Return a single preference and the value.
     * @param name The name of the preference.
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPreference(name: string, xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<PreferenceSingle>;
    public getPreference(name: string, xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PreferenceSingle>>;
    public getPreference(name: string, xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<PreferenceSingle>>;
    public getPreference(name: string, xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPreference.');
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
                'application/vnd.api+json',
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

        let localVarPath = `/v1/preferences/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "string"})}`;
        return this.httpClient.request<PreferenceSingle>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * List all users preferences.
     * List all of the preferences of the user.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listPreference(xTraceId?: string, limit?: number, page?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<PreferenceArray>;
    public listPreference(xTraceId?: string, limit?: number, page?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PreferenceArray>>;
    public listPreference(xTraceId?: string, limit?: number, page?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<PreferenceArray>>;
    public listPreference(xTraceId?: string, limit?: number, page?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
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
                'application/vnd.api+json',
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

        let localVarPath = `/v1/preferences`;
        return this.httpClient.request<PreferenceArray>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
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
     * Store a new preference for this user.
     * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
     * @param preference JSON array with the necessary preference information or key&#x3D;value pairs. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public storePreference(preference: Preference, xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<PreferenceSingle>;
    public storePreference(preference: Preference, xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PreferenceSingle>>;
    public storePreference(preference: Preference, xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<PreferenceSingle>>;
    public storePreference(preference: Preference, xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (preference === null || preference === undefined) {
            throw new Error('Required parameter preference was null or undefined when calling storePreference.');
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
                'application/vnd.api+json',
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
            'application/json',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
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

        let localVarPath = `/v1/preferences`;
        return this.httpClient.request<PreferenceSingle>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: preference,
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
     * Update preference
     * Update a user\&#39;s preference.
     * @param name The name of the preference. Will always overwrite. Will be created if it does not exist.
     * @param preferenceUpdate JSON array or key&#x3D;value pairs with the necessary preference information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePreference(name: string, preferenceUpdate: PreferenceUpdate, xTraceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<PreferenceSingle>;
    public updatePreference(name: string, preferenceUpdate: PreferenceUpdate, xTraceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PreferenceSingle>>;
    public updatePreference(name: string, preferenceUpdate: PreferenceUpdate, xTraceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<PreferenceSingle>>;
    public updatePreference(name: string, preferenceUpdate: PreferenceUpdate, xTraceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updatePreference.');
        }
        if (preferenceUpdate === null || preferenceUpdate === undefined) {
            throw new Error('Required parameter preferenceUpdate was null or undefined when calling updatePreference.');
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
                'application/vnd.api+json',
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
            'application/json',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
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

        let localVarPath = `/v1/preferences/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "string"})}`;
        return this.httpClient.request<PreferenceSingle>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: preferenceUpdate,
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
