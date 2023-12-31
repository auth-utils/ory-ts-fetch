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
 * Update Recovery Flow with Link Method
 * @export
 * @interface UpdateRecoveryFlowWithLinkMethod
 */
export interface UpdateRecoveryFlowWithLinkMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateRecoveryFlowWithLinkMethod
     */
    csrf_token?: string;
    /**
     * Email to Recover
     * 
     * Needs to be set when initiating the flow. If the email is a registered
     * recovery email, a recovery link will be sent. If the email is not known,
     * a email with details on what happened will be sent instead.
     * 
     * format: email
     * @type {string}
     * @memberof UpdateRecoveryFlowWithLinkMethod
     */
    email: string;
    /**
     * Method is the method that should be used for this recovery flow
     * 
     * Allowed values are `link` and `code`
     * link RecoveryStrategyLink
     * code RecoveryStrategyCode
     * @type {string}
     * @memberof UpdateRecoveryFlowWithLinkMethod
     */
    method: UpdateRecoveryFlowWithLinkMethodMethodEnum;
}


/**
 * @export
 */
export const UpdateRecoveryFlowWithLinkMethodMethodEnum = {
    Link: 'link',
    Code: 'code'
} as const;
export type UpdateRecoveryFlowWithLinkMethodMethodEnum = typeof UpdateRecoveryFlowWithLinkMethodMethodEnum[keyof typeof UpdateRecoveryFlowWithLinkMethodMethodEnum];


/**
 * Check if a given object implements the UpdateRecoveryFlowWithLinkMethod interface.
 */
export function instanceOfUpdateRecoveryFlowWithLinkMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateRecoveryFlowWithLinkMethodFromJSON(json: any): UpdateRecoveryFlowWithLinkMethod {
    return UpdateRecoveryFlowWithLinkMethodFromJSONTyped(json, false);
}

export function UpdateRecoveryFlowWithLinkMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRecoveryFlowWithLinkMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'email': json['email'],
        'method': json['method'],
    };
}

export function UpdateRecoveryFlowWithLinkMethodToJSON(value?: UpdateRecoveryFlowWithLinkMethod | null): any {
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

