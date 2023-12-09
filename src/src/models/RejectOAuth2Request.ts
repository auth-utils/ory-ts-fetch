/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: latest
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RejectOAuth2Request
 */
export interface RejectOAuth2Request {
    /**
     * The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).
     * 
     * Defaults to `request_denied`.
     * @type {string}
     * @memberof RejectOAuth2Request
     */
    error?: string;
    /**
     * Debug contains information to help resolve the problem as a developer. Usually not exposed
     * to the public but only in the server logs.
     * @type {string}
     * @memberof RejectOAuth2Request
     */
    error_debug?: string;
    /**
     * Description of the error in a human readable format.
     * @type {string}
     * @memberof RejectOAuth2Request
     */
    error_description?: string;
    /**
     * Hint to help resolve the error.
     * @type {string}
     * @memberof RejectOAuth2Request
     */
    error_hint?: string;
    /**
     * Represents the HTTP status code of the error (e.g. 401 or 403)
     * 
     * Defaults to 400
     * @type {number}
     * @memberof RejectOAuth2Request
     */
    status_code?: number;
}

/**
 * Check if a given object implements the RejectOAuth2Request interface.
 */
export function instanceOfRejectOAuth2Request(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RejectOAuth2RequestFromJSON(json: any): RejectOAuth2Request {
    return RejectOAuth2RequestFromJSONTyped(json, false);
}

export function RejectOAuth2RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RejectOAuth2Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'error_debug': !exists(json, 'error_debug') ? undefined : json['error_debug'],
        'error_description': !exists(json, 'error_description') ? undefined : json['error_description'],
        'error_hint': !exists(json, 'error_hint') ? undefined : json['error_hint'],
        'status_code': !exists(json, 'status_code') ? undefined : json['status_code'],
    };
}

export function RejectOAuth2RequestToJSON(value?: RejectOAuth2Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'error_debug': value.error_debug,
        'error_description': value.error_description,
        'error_hint': value.error_hint,
        'status_code': value.status_code,
    };
}

