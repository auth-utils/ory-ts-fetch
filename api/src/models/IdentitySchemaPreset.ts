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
 * @interface IdentitySchemaPreset
 */
export interface IdentitySchemaPreset {
    /**
     * Schema is the Identity JSON Schema
     * @type {object}
     * @memberof IdentitySchemaPreset
     */
    schema: object;
    /**
     * URL is the preset identifier
     * @type {string}
     * @memberof IdentitySchemaPreset
     */
    url: string;
}

/**
 * Check if a given object implements the IdentitySchemaPreset interface.
 */
export function instanceOfIdentitySchemaPreset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "schema" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function IdentitySchemaPresetFromJSON(json: any): IdentitySchemaPreset {
    return IdentitySchemaPresetFromJSONTyped(json, false);
}

export function IdentitySchemaPresetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySchemaPreset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': json['schema'],
        'url': json['url'],
    };
}

export function IdentitySchemaPresetToJSON(value?: IdentitySchemaPreset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': value.schema,
        'url': value.url,
    };
}

