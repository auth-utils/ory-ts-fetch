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
 * Ory Identity Schema Location
 * @export
 * @interface GetManagedIdentitySchemaLocation
 */
export interface GetManagedIdentitySchemaLocation {
    /**
     * 
     * @type {string}
     * @memberof GetManagedIdentitySchemaLocation
     */
    location?: string;
}

/**
 * Check if a given object implements the GetManagedIdentitySchemaLocation interface.
 */
export function instanceOfGetManagedIdentitySchemaLocation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetManagedIdentitySchemaLocationFromJSON(json: any): GetManagedIdentitySchemaLocation {
    return GetManagedIdentitySchemaLocationFromJSONTyped(json, false);
}

export function GetManagedIdentitySchemaLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetManagedIdentitySchemaLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': !exists(json, 'location') ? undefined : json['location'],
    };
}

export function GetManagedIdentitySchemaLocationToJSON(value?: GetManagedIdentitySchemaLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': value.location,
    };
}

