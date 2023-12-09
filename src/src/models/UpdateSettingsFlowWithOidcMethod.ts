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
 * Update Settings Flow with OpenID Connect Method
 * @export
 * @interface UpdateSettingsFlowWithOidcMethod
 */
export interface UpdateSettingsFlowWithOidcMethod {
    /**
     * Flow ID is the flow's ID.
     * 
     * in: query
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    flow?: string;
    /**
     * Link this provider
     * 
     * Either this or `unlink` must be set.
     * 
     * type: string
     * in: body
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    link?: string;
    /**
     * Method
     * 
     * Should be set to profile when trying to update a profile.
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    method: string;
    /**
     * The identity's traits
     * 
     * in: body
     * @type {object}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    traits?: object;
    /**
     * Unlink this provider
     * 
     * Either this or `link` must be set.
     * 
     * type: string
     * in: body
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    unlink?: string;
    /**
     * UpstreamParameters are the parameters that are passed to the upstream identity provider.
     * 
     * These parameters are optional and depend on what the upstream identity provider supports.
     * Supported parameters are:
     * `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session.
     * `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.
     * `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
     * @type {object}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    upstream_parameters?: object;
}

/**
 * Check if a given object implements the UpdateSettingsFlowWithOidcMethod interface.
 */
export function instanceOfUpdateSettingsFlowWithOidcMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateSettingsFlowWithOidcMethodFromJSON(json: any): UpdateSettingsFlowWithOidcMethod {
    return UpdateSettingsFlowWithOidcMethodFromJSONTyped(json, false);
}

export function UpdateSettingsFlowWithOidcMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowWithOidcMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flow': !exists(json, 'flow') ? undefined : json['flow'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'method': json['method'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'unlink': !exists(json, 'unlink') ? undefined : json['unlink'],
        'upstream_parameters': !exists(json, 'upstream_parameters') ? undefined : json['upstream_parameters'],
    };
}

export function UpdateSettingsFlowWithOidcMethodToJSON(value?: UpdateSettingsFlowWithOidcMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flow': value.flow,
        'link': value.link,
        'method': value.method,
        'traits': value.traits,
        'unlink': value.unlink,
        'upstream_parameters': value.upstream_parameters,
    };
}

