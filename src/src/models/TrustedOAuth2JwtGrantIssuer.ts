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
import type { TrustedOAuth2JwtGrantJsonWebKey } from './TrustedOAuth2JwtGrantJsonWebKey';
import {
    TrustedOAuth2JwtGrantJsonWebKeyFromJSON,
    TrustedOAuth2JwtGrantJsonWebKeyFromJSONTyped,
    TrustedOAuth2JwtGrantJsonWebKeyToJSON,
} from './TrustedOAuth2JwtGrantJsonWebKey';

/**
 * OAuth2 JWT Bearer Grant Type Issuer Trust Relationship
 * @export
 * @interface TrustedOAuth2JwtGrantIssuer
 */
export interface TrustedOAuth2JwtGrantIssuer {
    /**
     * The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.
     * @type {boolean}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    allow_any_subject?: boolean;
    /**
     * The "created_at" indicates, when grant was created.
     * @type {Date}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    created_at?: Date;
    /**
     * The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".
     * @type {Date}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    expires_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    id?: string;
    /**
     * The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    issuer?: string;
    /**
     * 
     * @type {TrustedOAuth2JwtGrantJsonWebKey}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    public_key?: TrustedOAuth2JwtGrantJsonWebKey;
    /**
     * The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])
     * @type {Array<string>}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    scope?: Array<string>;
    /**
     * The "subject" identifies the principal that is the subject of the JWT.
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    subject?: string;
}

/**
 * Check if a given object implements the TrustedOAuth2JwtGrantIssuer interface.
 */
export function instanceOfTrustedOAuth2JwtGrantIssuer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrustedOAuth2JwtGrantIssuerFromJSON(json: any): TrustedOAuth2JwtGrantIssuer {
    return TrustedOAuth2JwtGrantIssuerFromJSONTyped(json, false);
}

export function TrustedOAuth2JwtGrantIssuerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrustedOAuth2JwtGrantIssuer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allow_any_subject': !exists(json, 'allow_any_subject') ? undefined : json['allow_any_subject'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'expires_at': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'issuer': !exists(json, 'issuer') ? undefined : json['issuer'],
        'public_key': !exists(json, 'public_key') ? undefined : TrustedOAuth2JwtGrantJsonWebKeyFromJSON(json['public_key']),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
    };
}

export function TrustedOAuth2JwtGrantIssuerToJSON(value?: TrustedOAuth2JwtGrantIssuer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_any_subject': value.allow_any_subject,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'expires_at': value.expires_at === undefined ? undefined : (value.expires_at.toISOString()),
        'id': value.id,
        'issuer': value.issuer,
        'public_key': TrustedOAuth2JwtGrantJsonWebKeyToJSON(value.public_key),
        'scope': value.scope,
        'subject': value.subject,
    };
}

