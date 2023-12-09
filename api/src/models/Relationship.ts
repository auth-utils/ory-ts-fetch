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
 * Relationship
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * Namespace of the Relation Tuple
     * @type {string}
     * @memberof Relationship
     */
    namespace: string;
    /**
     * Object of the Relation Tuple
     * @type {string}
     * @memberof Relationship
     */
    object: string;
    /**
     * Relation of the Relation Tuple
     * @type {string}
     * @memberof Relationship
     */
    relation: string;
    /**
     * SubjectID of the Relation Tuple
     * 
     * Either SubjectSet or SubjectID can be provided.
     * @type {string}
     * @memberof Relationship
     */
    subject_id?: string;
    /**
     * 
     * @type {SubjectSet}
     * @memberof Relationship
     */
    subject_set?: SubjectSet;
}

/**
 * Check if a given object implements the Relationship interface.
 */
export function instanceOfRelationship(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "relation" in value;

    return isInstance;
}

export function RelationshipFromJSON(json: any): Relationship {
    return RelationshipFromJSONTyped(json, false);
}

export function RelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relationship {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'object': json['object'],
        'relation': json['relation'],
        'subject_id': !exists(json, 'subject_id') ? undefined : json['subject_id'],
        'subject_set': !exists(json, 'subject_set') ? undefined : SubjectSetFromJSON(json['subject_set']),
    };
}

export function RelationshipToJSON(value?: Relationship | null): any {
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
