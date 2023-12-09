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
import type { ProjectCors } from './ProjectCors';
import {
    ProjectCorsFromJSON,
    ProjectCorsFromJSONTyped,
    ProjectCorsToJSON,
} from './ProjectCors';
import type { ProjectServices } from './ProjectServices';
import {
    ProjectServicesFromJSON,
    ProjectServicesFromJSONTyped,
    ProjectServicesToJSON,
} from './ProjectServices';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {ProjectCors}
     * @memberof Project
     */
    cors_admin?: ProjectCors;
    /**
     * 
     * @type {ProjectCors}
     * @memberof Project
     */
    cors_public?: ProjectCors;
    /**
     * The project's ID.
     * @type {string}
     * @memberof Project
     */
    readonly id: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * The configuration revision ID.
     * @type {string}
     * @memberof Project
     */
    readonly revision_id: string;
    /**
     * 
     * @type {ProjectServices}
     * @memberof Project
     */
    services: ProjectServices;
    /**
     * The project's slug
     * @type {string}
     * @memberof Project
     */
    readonly slug: string;
    /**
     * The state of the project.
     * running Running
     * halted Halted
     * deleted Deleted
     * @type {string}
     * @memberof Project
     */
    readonly state: ProjectStateEnum;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    workspace_id?: string | null;
}


/**
 * @export
 */
export const ProjectStateEnum = {
    Running: 'running',
    Halted: 'halted',
    Deleted: 'deleted'
} as const;
export type ProjectStateEnum = typeof ProjectStateEnum[keyof typeof ProjectStateEnum];


/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "revision_id" in value;
    isInstance = isInstance && "services" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cors_admin': !exists(json, 'cors_admin') ? undefined : ProjectCorsFromJSON(json['cors_admin']),
        'cors_public': !exists(json, 'cors_public') ? undefined : ProjectCorsFromJSON(json['cors_public']),
        'id': json['id'],
        'name': json['name'],
        'revision_id': json['revision_id'],
        'services': ProjectServicesFromJSON(json['services']),
        'slug': json['slug'],
        'state': json['state'],
        'workspace_id': !exists(json, 'workspace_id') ? undefined : json['workspace_id'],
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cors_admin': ProjectCorsToJSON(value.cors_admin),
        'cors_public': ProjectCorsToJSON(value.cors_public),
        'name': value.name,
        'services': ProjectServicesToJSON(value.services),
        'workspace_id': value.workspace_id,
    };
}
