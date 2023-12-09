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
 * Update Settings Flow with WebAuthn Method
 * @export
 * @interface UpdateSettingsFlowWithWebAuthnMethod
 */
export interface UpdateSettingsFlowWithWebAuthnMethod {
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateSettingsFlowWithWebAuthnMethod
     */
    csrf_token?: string;
    /**
     * Method
     * 
     * Should be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.
     * @type {string}
     * @memberof UpdateSettingsFlowWithWebAuthnMethod
     */
    method: string;
    /**
     * Register a WebAuthn Security Key
     * 
     * It is expected that the JSON returned by the WebAuthn registration process
     * is included here.
     * @type {string}
     * @memberof UpdateSettingsFlowWithWebAuthnMethod
     */
    webauthn_register?: string;
    /**
     * Name of the WebAuthn Security Key to be Added
     * 
     * A human-readable name for the security key which will be added.
     * @type {string}
     * @memberof UpdateSettingsFlowWithWebAuthnMethod
     */
    webauthn_register_displayname?: string;
    /**
     * Remove a WebAuthn Security Key
     * 
     * This must contain the ID of the WebAuthN connection.
     * @type {string}
     * @memberof UpdateSettingsFlowWithWebAuthnMethod
     */
    webauthn_remove?: string;
}

/**
 * Check if a given object implements the UpdateSettingsFlowWithWebAuthnMethod interface.
 */
export function instanceOfUpdateSettingsFlowWithWebAuthnMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateSettingsFlowWithWebAuthnMethodFromJSON(json: any): UpdateSettingsFlowWithWebAuthnMethod {
    return UpdateSettingsFlowWithWebAuthnMethodFromJSONTyped(json, false);
}

export function UpdateSettingsFlowWithWebAuthnMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowWithWebAuthnMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'method': json['method'],
        'webauthn_register': !exists(json, 'webauthn_register') ? undefined : json['webauthn_register'],
        'webauthn_register_displayname': !exists(json, 'webauthn_register_displayname') ? undefined : json['webauthn_register_displayname'],
        'webauthn_remove': !exists(json, 'webauthn_remove') ? undefined : json['webauthn_remove'],
    };
}

export function UpdateSettingsFlowWithWebAuthnMethodToJSON(value?: UpdateSettingsFlowWithWebAuthnMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrf_token': value.csrf_token,
        'method': value.method,
        'webauthn_register': value.webauthn_register,
        'webauthn_register_displayname': value.webauthn_register_displayname,
        'webauthn_remove': value.webauthn_remove,
    };
}

