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
 * @interface SourcePosition
 */
export interface SourcePosition {
    /**
     * 
     * @type {number}
     * @memberof SourcePosition
     */
    Line?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcePosition
     */
    column?: number;
}

/**
 * Check if a given object implements the SourcePosition interface.
 */
export function instanceOfSourcePosition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourcePositionFromJSON(json: any): SourcePosition {
    return SourcePositionFromJSONTyped(json, false);
}

export function SourcePositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourcePosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Line': !exists(json, 'Line') ? undefined : json['Line'],
        'column': !exists(json, 'column') ? undefined : json['column'],
    };
}

export function SourcePositionToJSON(value?: SourcePosition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Line': value.Line,
        'column': value.column,
    };
}

