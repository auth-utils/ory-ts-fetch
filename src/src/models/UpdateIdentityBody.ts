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
import type { IdentityState } from './IdentityState';
import {
    IdentityStateFromJSON,
    IdentityStateFromJSONTyped,
    IdentityStateToJSON,
} from './IdentityState';
import type { IdentityWithCredentials } from './IdentityWithCredentials';
import {
    IdentityWithCredentialsFromJSON,
    IdentityWithCredentialsFromJSONTyped,
    IdentityWithCredentialsToJSON,
} from './IdentityWithCredentials';

/**
 * Update Identity Body
 * @export
 * @interface UpdateIdentityBody
 */
export interface UpdateIdentityBody {
    /**
     * 
     * @type {IdentityWithCredentials}
     * @memberof UpdateIdentityBody
     */
    credentials?: IdentityWithCredentials;
    /**
     * Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.
     * @type {any}
     * @memberof UpdateIdentityBody
     */
    metadata_admin?: any | null;
    /**
     * Store metadata about the identity which the identity itself can see when calling for example the
     * session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.
     * @type {any}
     * @memberof UpdateIdentityBody
     */
    metadata_public?: any | null;
    /**
     * SchemaID is the ID of the JSON Schema to be used for validating the identity's traits. If set
     * will update the Identity's SchemaID.
     * @type {string}
     * @memberof UpdateIdentityBody
     */
    schema_id: string;
    /**
     * 
     * @type {IdentityState}
     * @memberof UpdateIdentityBody
     */
    state: IdentityState;
    /**
     * Traits represent an identity's traits. The identity is able to create, modify, and delete traits
     * in a self-service manner. The input will always be validated against the JSON Schema defined
     * in `schema_id`.
     * @type {object}
     * @memberof UpdateIdentityBody
     */
    traits: object;
}

/**
 * Check if a given object implements the UpdateIdentityBody interface.
 */
export function instanceOfUpdateIdentityBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "schema_id" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "traits" in value;

    return isInstance;
}

export function UpdateIdentityBodyFromJSON(json: any): UpdateIdentityBody {
    return UpdateIdentityBodyFromJSONTyped(json, false);
}

export function UpdateIdentityBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateIdentityBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credentials': !exists(json, 'credentials') ? undefined : IdentityWithCredentialsFromJSON(json['credentials']),
        'metadata_admin': !exists(json, 'metadata_admin') ? undefined : json['metadata_admin'],
        'metadata_public': !exists(json, 'metadata_public') ? undefined : json['metadata_public'],
        'schema_id': json['schema_id'],
        'state': IdentityStateFromJSON(json['state']),
        'traits': json['traits'],
    };
}

export function UpdateIdentityBodyToJSON(value?: UpdateIdentityBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credentials': IdentityWithCredentialsToJSON(value.credentials),
        'metadata_admin': value.metadata_admin,
        'metadata_public': value.metadata_public,
        'schema_id': value.schema_id,
        'state': IdentityStateToJSON(value.state),
        'traits': value.traits,
    };
}

