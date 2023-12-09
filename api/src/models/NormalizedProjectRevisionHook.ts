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
 * @interface NormalizedProjectRevisionHook
 */
export interface NormalizedProjectRevisionHook {
    /**
     * The Hooks Config Key
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    config_key: string;
    /**
     * The Project's Revision Creation Date
     * @type {Date}
     * @memberof NormalizedProjectRevisionHook
     */
    readonly created_at?: Date;
    /**
     * The Hook Type
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    hook: string;
    /**
     * ID of the entry
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    id?: string;
    /**
     * The Revision's ID this schema belongs to
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    project_revision_id?: string;
    /**
     * Last Time Project's Revision was Updated
     * @type {Date}
     * @memberof NormalizedProjectRevisionHook
     */
    readonly updated_at?: Date;
    /**
     * Whether to send the API Key in the HTTP Header or as a HTTP Cookie
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_api_key_in?: string;
    /**
     * The name of the api key
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_api_key_name?: string;
    /**
     * The value of the api key
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_api_key_value?: string;
    /**
     * The password to be sent in the HTTP Basic Auth Header
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_basic_auth_password?: string;
    /**
     * The username to be sent in the HTTP Basic Auth Header
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_basic_auth_user?: string;
    /**
     * HTTP Auth Method to use for the Web-Hook
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_auth_type?: string;
    /**
     * URI pointing to the JsonNet template used for Web-Hook payload generation. Only used for those HTTP methods, which support HTTP body payloads.
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_body?: string;
    /**
     * If enabled allows the web hook to interrupt / abort the self-service flow. It only applies to certain flows (registration/verification/login/settings) and requires a valid response format.
     * @type {boolean}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_can_interrupt?: boolean;
    /**
     * The HTTP method to use (GET, POST, etc) for the Web-Hook
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_method?: string;
    /**
     * Whether to ignore the Web Hook response
     * @type {boolean}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_response_ignore?: boolean;
    /**
     * Whether to parse the Web Hook response
     * @type {boolean}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_response_parse?: boolean;
    /**
     * The URL the Web-Hook should call
     * @type {string}
     * @memberof NormalizedProjectRevisionHook
     */
    web_hook_config_url?: string;
}

/**
 * Check if a given object implements the NormalizedProjectRevisionHook interface.
 */
export function instanceOfNormalizedProjectRevisionHook(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "config_key" in value;
    isInstance = isInstance && "hook" in value;

    return isInstance;
}

export function NormalizedProjectRevisionHookFromJSON(json: any): NormalizedProjectRevisionHook {
    return NormalizedProjectRevisionHookFromJSONTyped(json, false);
}

export function NormalizedProjectRevisionHookFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProjectRevisionHook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config_key': json['config_key'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'hook': json['hook'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'project_revision_id': !exists(json, 'project_revision_id') ? undefined : json['project_revision_id'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'web_hook_config_auth_api_key_in': !exists(json, 'web_hook_config_auth_api_key_in') ? undefined : json['web_hook_config_auth_api_key_in'],
        'web_hook_config_auth_api_key_name': !exists(json, 'web_hook_config_auth_api_key_name') ? undefined : json['web_hook_config_auth_api_key_name'],
        'web_hook_config_auth_api_key_value': !exists(json, 'web_hook_config_auth_api_key_value') ? undefined : json['web_hook_config_auth_api_key_value'],
        'web_hook_config_auth_basic_auth_password': !exists(json, 'web_hook_config_auth_basic_auth_password') ? undefined : json['web_hook_config_auth_basic_auth_password'],
        'web_hook_config_auth_basic_auth_user': !exists(json, 'web_hook_config_auth_basic_auth_user') ? undefined : json['web_hook_config_auth_basic_auth_user'],
        'web_hook_config_auth_type': !exists(json, 'web_hook_config_auth_type') ? undefined : json['web_hook_config_auth_type'],
        'web_hook_config_body': !exists(json, 'web_hook_config_body') ? undefined : json['web_hook_config_body'],
        'web_hook_config_can_interrupt': !exists(json, 'web_hook_config_can_interrupt') ? undefined : json['web_hook_config_can_interrupt'],
        'web_hook_config_method': !exists(json, 'web_hook_config_method') ? undefined : json['web_hook_config_method'],
        'web_hook_config_response_ignore': !exists(json, 'web_hook_config_response_ignore') ? undefined : json['web_hook_config_response_ignore'],
        'web_hook_config_response_parse': !exists(json, 'web_hook_config_response_parse') ? undefined : json['web_hook_config_response_parse'],
        'web_hook_config_url': !exists(json, 'web_hook_config_url') ? undefined : json['web_hook_config_url'],
    };
}

export function NormalizedProjectRevisionHookToJSON(value?: NormalizedProjectRevisionHook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config_key': value.config_key,
        'hook': value.hook,
        'id': value.id,
        'project_revision_id': value.project_revision_id,
        'web_hook_config_auth_api_key_in': value.web_hook_config_auth_api_key_in,
        'web_hook_config_auth_api_key_name': value.web_hook_config_auth_api_key_name,
        'web_hook_config_auth_api_key_value': value.web_hook_config_auth_api_key_value,
        'web_hook_config_auth_basic_auth_password': value.web_hook_config_auth_basic_auth_password,
        'web_hook_config_auth_basic_auth_user': value.web_hook_config_auth_basic_auth_user,
        'web_hook_config_auth_type': value.web_hook_config_auth_type,
        'web_hook_config_body': value.web_hook_config_body,
        'web_hook_config_can_interrupt': value.web_hook_config_can_interrupt,
        'web_hook_config_method': value.web_hook_config_method,
        'web_hook_config_response_ignore': value.web_hook_config_response_ignore,
        'web_hook_config_response_parse': value.web_hook_config_response_parse,
        'web_hook_config_url': value.web_hook_config_url,
    };
}
