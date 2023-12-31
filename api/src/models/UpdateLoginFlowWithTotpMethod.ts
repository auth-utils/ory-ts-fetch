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
 * Update Login Flow with TOTP Method
 * @export
 * @interface UpdateLoginFlowWithTotpMethod
 */
export interface UpdateLoginFlowWithTotpMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateLoginFlowWithTotpMethod
     */
    csrf_token?: string;
    /**
     * Method should be set to "totp" when logging in using the TOTP strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithTotpMethod
     */
    method: string;
    /**
     * The TOTP code.
     * @type {string}
     * @memberof UpdateLoginFlowWithTotpMethod
     */
    totp_code: string;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithTotpMethod interface.
 */
export function instanceOfUpdateLoginFlowWithTotpMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "totp_code" in value;

    return isInstance;
}

export function UpdateLoginFlowWithTotpMethodFromJSON(json: any): UpdateLoginFlowWithTotpMethod {
    return UpdateLoginFlowWithTotpMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithTotpMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithTotpMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'method': json['method'],
        'totp_code': json['totp_code'],
    };
}

export function UpdateLoginFlowWithTotpMethodToJSON(value?: UpdateLoginFlowWithTotpMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrf_token': value.csrf_token,
        'method': value.method,
        'totp_code': value.totp_code,
    };
}

