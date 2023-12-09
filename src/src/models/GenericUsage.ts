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
 * @interface GenericUsage
 */
export interface GenericUsage {
    /**
     * AdditionalPrice is the price per-unit in cent exceeding IncludedUsage. A price of 0 means that no other items can be consumed.
     * @type {number}
     * @memberof GenericUsage
     */
    additional_price: number;
    /**
     * IncludedUsage is the number of included items.
     * @type {number}
     * @memberof GenericUsage
     */
    included_usage: number;
}

/**
 * Check if a given object implements the GenericUsage interface.
 */
export function instanceOfGenericUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "additional_price" in value;
    isInstance = isInstance && "included_usage" in value;

    return isInstance;
}

export function GenericUsageFromJSON(json: any): GenericUsage {
    return GenericUsageFromJSONTyped(json, false);
}

export function GenericUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_price': json['additional_price'],
        'included_usage': json['included_usage'],
    };
}

export function GenericUsageToJSON(value?: GenericUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_price': value.additional_price,
        'included_usage': value.included_usage,
    };
}

