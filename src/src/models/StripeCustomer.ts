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
 * @interface StripeCustomer
 */
export interface StripeCustomer {
    /**
     * 
     * @type {string}
     * @memberof StripeCustomer
     */
    id?: string;
}

/**
 * Check if a given object implements the StripeCustomer interface.
 */
export function instanceOfStripeCustomer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StripeCustomerFromJSON(json: any): StripeCustomer {
    return StripeCustomerFromJSONTyped(json, false);
}

export function StripeCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StripeCustomerToJSON(value?: StripeCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

