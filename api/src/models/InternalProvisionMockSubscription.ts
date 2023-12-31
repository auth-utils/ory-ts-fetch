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
 * Internal Provision Mock Subscription Request Body
 * @export
 * @interface InternalProvisionMockSubscription
 */
export interface InternalProvisionMockSubscription {
    /**
     * Currency
     * usd USD
     * eur Euro
     * @type {string}
     * @memberof InternalProvisionMockSubscription
     */
    currency: InternalProvisionMockSubscriptionCurrencyEnum;
    /**
     * Identity ID
     * @type {string}
     * @memberof InternalProvisionMockSubscription
     */
    identity_id: string;
    /**
     * Billing Interval
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof InternalProvisionMockSubscription
     */
    interval: InternalProvisionMockSubscriptionIntervalEnum;
    /**
     * Plan ID
     * @type {string}
     * @memberof InternalProvisionMockSubscription
     */
    plan: string;
}


/**
 * @export
 */
export const InternalProvisionMockSubscriptionCurrencyEnum = {
    Usd: 'usd',
    Eur: 'eur'
} as const;
export type InternalProvisionMockSubscriptionCurrencyEnum = typeof InternalProvisionMockSubscriptionCurrencyEnum[keyof typeof InternalProvisionMockSubscriptionCurrencyEnum];

/**
 * @export
 */
export const InternalProvisionMockSubscriptionIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type InternalProvisionMockSubscriptionIntervalEnum = typeof InternalProvisionMockSubscriptionIntervalEnum[keyof typeof InternalProvisionMockSubscriptionIntervalEnum];


/**
 * Check if a given object implements the InternalProvisionMockSubscription interface.
 */
export function instanceOfInternalProvisionMockSubscription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "identity_id" in value;
    isInstance = isInstance && "interval" in value;
    isInstance = isInstance && "plan" in value;

    return isInstance;
}

export function InternalProvisionMockSubscriptionFromJSON(json: any): InternalProvisionMockSubscription {
    return InternalProvisionMockSubscriptionFromJSONTyped(json, false);
}

export function InternalProvisionMockSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalProvisionMockSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'identity_id': json['identity_id'],
        'interval': json['interval'],
        'plan': json['plan'],
    };
}

export function InternalProvisionMockSubscriptionToJSON(value?: InternalProvisionMockSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'identity_id': value.identity_id,
        'interval': value.interval,
        'plan': value.plan,
    };
}

