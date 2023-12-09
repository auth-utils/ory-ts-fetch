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
 * @interface GetVersion200Response
 */
export interface GetVersion200Response {
    /**
     * The version of Ory Kratos.
     * @type {string}
     * @memberof GetVersion200Response
     */
    version: string;
}

/**
 * Check if a given object implements the GetVersion200Response interface.
 */
export function instanceOfGetVersion200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function GetVersion200ResponseFromJSON(json: any): GetVersion200Response {
    return GetVersion200ResponseFromJSONTyped(json, false);
}

export function GetVersion200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetVersion200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
    };
}

export function GetVersion200ResponseToJSON(value?: GetVersion200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
    };
}

