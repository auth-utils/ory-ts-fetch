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
import type { NormalizedProjectRevision } from './NormalizedProjectRevision';
import {
    NormalizedProjectRevisionFromJSON,
    NormalizedProjectRevisionFromJSONTyped,
    NormalizedProjectRevisionToJSON,
} from './NormalizedProjectRevision';

/**
 * 
 * @export
 * @interface NormalizedProject
 */
export interface NormalizedProject {
    /**
     * The Project's Creation Date
     * @type {Date}
     * @memberof NormalizedProject
     */
    readonly created_at: Date;
    /**
     * 
     * @type {NormalizedProjectRevision}
     * @memberof NormalizedProject
     */
    current_revision: NormalizedProjectRevision;
    /**
     * The environment of the project.
     * prod Production
     * dev Development
     * @type {string}
     * @memberof NormalizedProject
     */
    environment: NormalizedProjectEnvironmentEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof NormalizedProject
     */
    hosts: Array<string>;
    /**
     * The project's ID.
     * @type {string}
     * @memberof NormalizedProject
     */
    readonly id: string;
    /**
     * The project's slug
     * @type {string}
     * @memberof NormalizedProject
     */
    readonly slug: string;
    /**
     * The state of the project.
     * running Running
     * halted Halted
     * deleted Deleted
     * @type {string}
     * @memberof NormalizedProject
     */
    readonly state: NormalizedProjectStateEnum;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProject
     */
    subscription_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProject
     */
    subscription_plan?: string | null;
    /**
     * Last Time Project was Updated
     * @type {Date}
     * @memberof NormalizedProject
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProject
     */
    workspace_id: string | null;
}


/**
 * @export
 */
export const NormalizedProjectEnvironmentEnum = {
    Prod: 'prod',
    Dev: 'dev'
} as const;
export type NormalizedProjectEnvironmentEnum = typeof NormalizedProjectEnvironmentEnum[keyof typeof NormalizedProjectEnvironmentEnum];

/**
 * @export
 */
export const NormalizedProjectStateEnum = {
    Running: 'running',
    Halted: 'halted',
    Deleted: 'deleted'
} as const;
export type NormalizedProjectStateEnum = typeof NormalizedProjectStateEnum[keyof typeof NormalizedProjectStateEnum];


/**
 * Check if a given object implements the NormalizedProject interface.
 */
export function instanceOfNormalizedProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "current_revision" in value;
    isInstance = isInstance && "environment" in value;
    isInstance = isInstance && "hosts" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "updated_at" in value;
    isInstance = isInstance && "workspace_id" in value;

    return isInstance;
}

export function NormalizedProjectFromJSON(json: any): NormalizedProject {
    return NormalizedProjectFromJSONTyped(json, false);
}

export function NormalizedProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'current_revision': NormalizedProjectRevisionFromJSON(json['current_revision']),
        'environment': json['environment'],
        'hosts': json['hosts'],
        'id': json['id'],
        'slug': json['slug'],
        'state': json['state'],
        'subscription_id': !exists(json, 'subscription_id') ? undefined : json['subscription_id'],
        'subscription_plan': !exists(json, 'subscription_plan') ? undefined : json['subscription_plan'],
        'updated_at': (new Date(json['updated_at'])),
        'workspace_id': json['workspace_id'],
    };
}

export function NormalizedProjectToJSON(value?: NormalizedProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_revision': NormalizedProjectRevisionToJSON(value.current_revision),
        'environment': value.environment,
        'hosts': value.hosts,
        'subscription_id': value.subscription_id,
        'subscription_plan': value.subscription_plan,
        'workspace_id': value.workspace_id,
    };
}

