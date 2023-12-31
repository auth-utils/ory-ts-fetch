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
 * CredentialsCode represents a one time login/registration code
 * @export
 * @interface IdentityCredentialsCode
 */
export interface IdentityCredentialsCode {
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsCode
     */
    address_type?: string;
    /**
     * 
     * @type {Date}
     * @memberof IdentityCredentialsCode
     */
    used_at?: Date | null;
}

/**
 * Check if a given object implements the IdentityCredentialsCode interface.
 */
export function instanceOfIdentityCredentialsCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityCredentialsCodeFromJSON(json: any): IdentityCredentialsCode {
    return IdentityCredentialsCodeFromJSONTyped(json, false);
}

export function IdentityCredentialsCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityCredentialsCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address_type': !exists(json, 'address_type') ? undefined : json['address_type'],
        'used_at': !exists(json, 'used_at') ? undefined : (json['used_at'] === null ? null : new Date(json['used_at'])),
    };
}

export function IdentityCredentialsCodeToJSON(value?: IdentityCredentialsCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address_type': value.address_type,
        'used_at': value.used_at === undefined ? undefined : (value.used_at === null ? null : value.used_at.toISOString()),
    };
}

