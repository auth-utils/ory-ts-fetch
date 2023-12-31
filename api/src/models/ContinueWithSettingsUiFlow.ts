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
 * @interface ContinueWithSettingsUiFlow
 */
export interface ContinueWithSettingsUiFlow {
    /**
     * The ID of the settings flow
     * @type {string}
     * @memberof ContinueWithSettingsUiFlow
     */
    id: string;
}

/**
 * Check if a given object implements the ContinueWithSettingsUiFlow interface.
 */
export function instanceOfContinueWithSettingsUiFlow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ContinueWithSettingsUiFlowFromJSON(json: any): ContinueWithSettingsUiFlow {
    return ContinueWithSettingsUiFlowFromJSONTyped(json, false);
}

export function ContinueWithSettingsUiFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueWithSettingsUiFlow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function ContinueWithSettingsUiFlowToJSON(value?: ContinueWithSettingsUiFlow | null): any {
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

