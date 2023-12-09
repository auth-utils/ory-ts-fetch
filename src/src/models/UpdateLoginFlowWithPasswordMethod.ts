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
 * Update Login Flow with Password Method
 * @export
 * @interface UpdateLoginFlowWithPasswordMethod
 */
export interface UpdateLoginFlowWithPasswordMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateLoginFlowWithPasswordMethod
     */
    csrf_token?: string;
    /**
     * Identifier is the email or username of the user trying to log in.
     * @type {string}
     * @memberof UpdateLoginFlowWithPasswordMethod
     */
    identifier: string;
    /**
     * Method should be set to "password" when logging in using the identifier and password strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithPasswordMethod
     */
    method: string;
    /**
     * The user's password.
     * @type {string}
     * @memberof UpdateLoginFlowWithPasswordMethod
     */
    password: string;
    /**
     * Identifier is the email or username of the user trying to log in.
     * This field is deprecated!
     * @type {string}
     * @memberof UpdateLoginFlowWithPasswordMethod
     */
    password_identifier?: string;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithPasswordMethod interface.
 */
export function instanceOfUpdateLoginFlowWithPasswordMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function UpdateLoginFlowWithPasswordMethodFromJSON(json: any): UpdateLoginFlowWithPasswordMethod {
    return UpdateLoginFlowWithPasswordMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithPasswordMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithPasswordMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'identifier': json['identifier'],
        'method': json['method'],
        'password': json['password'],
        'password_identifier': !exists(json, 'password_identifier') ? undefined : json['password_identifier'],
    };
}

export function UpdateLoginFlowWithPasswordMethodToJSON(value?: UpdateLoginFlowWithPasswordMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrf_token': value.csrf_token,
        'identifier': value.identifier,
        'method': value.method,
        'password': value.password,
        'password_identifier': value.password_identifier,
    };
}

