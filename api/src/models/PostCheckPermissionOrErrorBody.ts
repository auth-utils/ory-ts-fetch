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
import type { SubjectSet } from './SubjectSet';
import {
    SubjectSetFromJSON,
    SubjectSetFromJSONTyped,
    SubjectSetToJSON,
} from './SubjectSet';

/**
 * Post Check Permission Or Error Body
 * @export
 * @interface PostCheckPermissionOrErrorBody
 */
export interface PostCheckPermissionOrErrorBody {
    /**
     * Namespace to query
     * @type {string}
     * @memberof PostCheckPermissionOrErrorBody
     */
    namespace?: string;
    /**
     * Object to query
     * @type {string}
     * @memberof PostCheckPermissionOrErrorBody
     */
    object?: string;
    /**
     * Relation to query
     * @type {string}
     * @memberof PostCheckPermissionOrErrorBody
     */
    relation?: string;
    /**
     * SubjectID to query
     * 
     * Either SubjectSet or SubjectID can be provided.
     * @type {string}
     * @memberof PostCheckPermissionOrErrorBody
     */
    subject_id?: string;
    /**
     * 
     * @type {SubjectSet}
     * @memberof PostCheckPermissionOrErrorBody
     */
    subject_set?: SubjectSet;
}

/**
 * Check if a given object implements the PostCheckPermissionOrErrorBody interface.
 */
export function instanceOfPostCheckPermissionOrErrorBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostCheckPermissionOrErrorBodyFromJSON(json: any): PostCheckPermissionOrErrorBody {
    return PostCheckPermissionOrErrorBodyFromJSONTyped(json, false);
}

export function PostCheckPermissionOrErrorBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCheckPermissionOrErrorBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'subject_id': !exists(json, 'subject_id') ? undefined : json['subject_id'],
        'subject_set': !exists(json, 'subject_set') ? undefined : SubjectSetFromJSON(json['subject_set']),
    };
}

export function PostCheckPermissionOrErrorBodyToJSON(value?: PostCheckPermissionOrErrorBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'object': value.object,
        'relation': value.relation,
        'subject_id': value.subject_id,
        'subject_set': SubjectSetToJSON(value.subject_set),
    };
}

