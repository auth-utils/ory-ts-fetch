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
 * Update Login flow using the code method
 * @export
 * @interface UpdateLoginFlowWithCodeMethod
 */
export interface UpdateLoginFlowWithCodeMethod {
    /**
     * Code is the 6 digits code sent to the user
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    code?: string;
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    csrf_token: string;
    /**
     * Identifier is the code identifier
     * The identifier requires that the user has already completed the registration or settings with code flow.
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    identifier?: string;
    /**
     * Method should be set to "code" when logging in using the code strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    method: string;
    /**
     * Resend is set when the user wants to resend the code
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    resend?: string;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithCodeMethod interface.
 */
export function instanceOfUpdateLoginFlowWithCodeMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "csrf_token" in value;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateLoginFlowWithCodeMethodFromJSON(json: any): UpdateLoginFlowWithCodeMethod {
    return UpdateLoginFlowWithCodeMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithCodeMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithCodeMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'csrf_token': json['csrf_token'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'method': json['method'],
        'resend': !exists(json, 'resend') ? undefined : json['resend'],
    };
}

export function UpdateLoginFlowWithCodeMethodToJSON(value?: UpdateLoginFlowWithCodeMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'csrf_token': value.csrf_token,
        'identifier': value.identifier,
        'method': value.method,
        'resend': value.resend,
    };
}

