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
 * @interface NormalizedProjectRevisionTokenizerTemplate
 */
export interface NormalizedProjectRevisionTokenizerTemplate {
    /**
     * Claims mapper URL
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    claims_mapper_url?: string;
    /**
     * The Project's Revision Creation Date
     * @type {Date}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    readonly created_at?: Date;
    /**
     * The revision ID.
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    readonly id?: string;
    /**
     * JSON Web Key URL
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    jwks_url?: string;
    /**
     * The unique key of the template
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    key?: string;
    /**
     * The Revision's ID this schema belongs to
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    project_revision_id?: string;
    /**
     * Token time to live
     * @type {string}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    ttl?: string;
    /**
     * Last Time Project's Revision was Updated
     * @type {Date}
     * @memberof NormalizedProjectRevisionTokenizerTemplate
     */
    readonly updated_at?: Date;
}

/**
 * Check if a given object implements the NormalizedProjectRevisionTokenizerTemplate interface.
 */
export function instanceOfNormalizedProjectRevisionTokenizerTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NormalizedProjectRevisionTokenizerTemplateFromJSON(json: any): NormalizedProjectRevisionTokenizerTemplate {
    return NormalizedProjectRevisionTokenizerTemplateFromJSONTyped(json, false);
}

export function NormalizedProjectRevisionTokenizerTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProjectRevisionTokenizerTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'claims_mapper_url': !exists(json, 'claims_mapper_url') ? undefined : json['claims_mapper_url'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'jwks_url': !exists(json, 'jwks_url') ? undefined : json['jwks_url'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'project_revision_id': !exists(json, 'project_revision_id') ? undefined : json['project_revision_id'],
        'ttl': !exists(json, 'ttl') ? undefined : json['ttl'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function NormalizedProjectRevisionTokenizerTemplateToJSON(value?: NormalizedProjectRevisionTokenizerTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'claims_mapper_url': value.claims_mapper_url,
        'jwks_url': value.jwks_url,
        'key': value.key,
        'project_revision_id': value.project_revision_id,
        'ttl': value.ttl,
    };
}

