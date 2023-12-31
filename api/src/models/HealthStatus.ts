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
 * @interface HealthStatus
 */
export interface HealthStatus {
    /**
     * Status always contains "ok".
     * @type {string}
     * @memberof HealthStatus
     */
    status?: string;
}

/**
 * Check if a given object implements the HealthStatus interface.
 */
export function instanceOfHealthStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthStatusFromJSON(json: any): HealthStatus {
    return HealthStatusFromJSONTyped(json, false);
}

export function HealthStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function HealthStatusToJSON(value?: HealthStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

