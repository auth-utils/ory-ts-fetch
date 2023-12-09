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
 * Update Verification Flow with Link Method
 * @export
 * @interface UpdateVerificationFlowWithLinkMethod
 */
export interface UpdateVerificationFlowWithLinkMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateVerificationFlowWithLinkMethod
     */
    csrf_token?: string;
    /**
     * Email to Verify
     * 
     * Needs to be set when initiating the flow. If the email is a registered
     * verification email, a verification link will be sent. If the email is not known,
     * a email with details on what happened will be sent instead.
     * 
     * format: email
     * @type {string}
     * @memberof UpdateVerificationFlowWithLinkMethod
     */
    email: string;
    /**
     * Method is the method that should be used for this verification flow
     * 
     * Allowed values are `link` and `code`
     * link VerificationStrategyLink
     * code VerificationStrategyCode
     * @type {string}
     * @memberof UpdateVerificationFlowWithLinkMethod
     */
    method: UpdateVerificationFlowWithLinkMethodMethodEnum;
}


/**
 * @export
 */
export const UpdateVerificationFlowWithLinkMethodMethodEnum = {
    Link: 'link',
    Code: 'code'
} as const;
export type UpdateVerificationFlowWithLinkMethodMethodEnum = typeof UpdateVerificationFlowWithLinkMethodMethodEnum[keyof typeof UpdateVerificationFlowWithLinkMethodMethodEnum];


/**
 * Check if a given object implements the UpdateVerificationFlowWithLinkMethod interface.
 */
export function instanceOfUpdateVerificationFlowWithLinkMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateVerificationFlowWithLinkMethodFromJSON(json: any): UpdateVerificationFlowWithLinkMethod {
    return UpdateVerificationFlowWithLinkMethodFromJSONTyped(json, false);
}

export function UpdateVerificationFlowWithLinkMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVerificationFlowWithLinkMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'email': json['email'],
        'method': json['method'],
    };
}

export function UpdateVerificationFlowWithLinkMethodToJSON(value?: UpdateVerificationFlowWithLinkMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrf_token': value.csrf_token,
        'email': value.email,
        'method': value.method,
    };
}
