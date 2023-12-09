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
 * @interface ProjectApiKey
 */
export interface ProjectApiKey {
    /**
     * The token's creation date
     * @type {Date}
     * @memberof ProjectApiKey
     */
    readonly created_at?: Date;
    /**
     * The token's ID.
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly id: string;
    /**
     * The Token's Name
     * 
     * Set this to help you remember, for example, where you use the token.
     * @type {string}
     * @memberof ProjectApiKey
     */
    name: string;
    /**
     * The token's owner
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly owner_id: string;
    /**
     * The Token's Project ID
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly project_id?: string;
    /**
     * The token's last update date
     * @type {Date}
     * @memberof ProjectApiKey
     */
    readonly updated_at?: Date;
    /**
     * The token's value
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly value?: string;
}

/**
 * Check if a given object implements the ProjectApiKey interface.
 */
export function instanceOfProjectApiKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "owner_id" in value;

    return isInstance;
}

export function ProjectApiKeyFromJSON(json: any): ProjectApiKey {
    return ProjectApiKeyFromJSONTyped(json, false);
}

export function ProjectApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectApiKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'owner_id': json['owner_id'],
        'project_id': !exists(json, 'project_id') ? undefined : json['project_id'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ProjectApiKeyToJSON(value?: ProjectApiKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

