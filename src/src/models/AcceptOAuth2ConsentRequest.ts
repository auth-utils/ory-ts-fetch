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
import type { AcceptOAuth2ConsentRequestSession } from './AcceptOAuth2ConsentRequestSession';
import {
    AcceptOAuth2ConsentRequestSessionFromJSON,
    AcceptOAuth2ConsentRequestSessionFromJSONTyped,
    AcceptOAuth2ConsentRequestSessionToJSON,
} from './AcceptOAuth2ConsentRequestSession';

/**
 * 
 * @export
 * @interface AcceptOAuth2ConsentRequest
 */
export interface AcceptOAuth2ConsentRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AcceptOAuth2ConsentRequest
     */
    grant_access_token_audience?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AcceptOAuth2ConsentRequest
     */
    grant_scope?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof AcceptOAuth2ConsentRequest
     */
    handled_at?: Date;
    /**
     * Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same
     * client asks the same user for the same, or a subset of, scope.
     * @type {boolean}
     * @memberof AcceptOAuth2ConsentRequest
     */
    remember?: boolean;
    /**
     * RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the
     * authorization will be remembered indefinitely.
     * @type {number}
     * @memberof AcceptOAuth2ConsentRequest
     */
    remember_for?: number;
    /**
     * 
     * @type {AcceptOAuth2ConsentRequestSession}
     * @memberof AcceptOAuth2ConsentRequest
     */
    session?: AcceptOAuth2ConsentRequestSession;
}

/**
 * Check if a given object implements the AcceptOAuth2ConsentRequest interface.
 */
export function instanceOfAcceptOAuth2ConsentRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AcceptOAuth2ConsentRequestFromJSON(json: any): AcceptOAuth2ConsentRequest {
    return AcceptOAuth2ConsentRequestFromJSONTyped(json, false);
}

export function AcceptOAuth2ConsentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptOAuth2ConsentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grant_access_token_audience': !exists(json, 'grant_access_token_audience') ? undefined : json['grant_access_token_audience'],
        'grant_scope': !exists(json, 'grant_scope') ? undefined : json['grant_scope'],
        'handled_at': !exists(json, 'handled_at') ? undefined : (new Date(json['handled_at'])),
        'remember': !exists(json, 'remember') ? undefined : json['remember'],
        'remember_for': !exists(json, 'remember_for') ? undefined : json['remember_for'],
        'session': !exists(json, 'session') ? undefined : AcceptOAuth2ConsentRequestSessionFromJSON(json['session']),
    };
}

export function AcceptOAuth2ConsentRequestToJSON(value?: AcceptOAuth2ConsentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grant_access_token_audience': value.grant_access_token_audience,
        'grant_scope': value.grant_scope,
        'handled_at': value.handled_at === undefined ? undefined : (value.handled_at.toISOString()),
        'remember': value.remember,
        'remember_for': value.remember_for,
        'session': AcceptOAuth2ConsentRequestSessionToJSON(value.session),
    };
}
