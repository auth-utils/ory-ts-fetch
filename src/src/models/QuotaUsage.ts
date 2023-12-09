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
 * @interface QuotaUsage
 */
export interface QuotaUsage {
    /**
     * The additional price per unit in cents.
     * @type {number}
     * @memberof QuotaUsage
     */
    additional_price: number;
    /**
     * 
     * @type {boolean}
     * @memberof QuotaUsage
     */
    can_use_more: boolean;
    /**
     * 
     * region_eu RegionEU
     * region_us RegionUS
     * region_apac RegionAPAC
     * region_global RegionGlobal
     * production_projects ProductionProjects
     * daily_active_users DailyActiveUsers
     * custom_domains CustomDomains
     * sla SLA
     * collaborator_seats CollaboratorSeats
     * edge_cache EdgeCache
     * branding_themes BrandingThemes
     * zendesk_support ZendeskSupport
     * project_metrics ProjectMetrics
     * project_metrics_time_window ProjectMetricsTimeWindow
     * organizations Organizations
     * rop_grant ResourceOwnerPasswordGrant
     * rate_limit_tier RateLimitTier
     * session_rate_limit_tier RateLimitTierSessions
     * identities_list_rate_limit_tier RateLimitTierIdentitiesList
     * @type {string}
     * @memberof QuotaUsage
     */
    feature: QuotaUsageFeatureEnum;
    /**
     * 
     * @type {boolean}
     * @memberof QuotaUsage
     */
    feature_available: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuotaUsage
     */
    included: number;
    /**
     * 
     * @type {number}
     * @memberof QuotaUsage
     */
    used: number;
}


/**
 * @export
 */
export const QuotaUsageFeatureEnum = {
    RegionEu: 'region_eu',
    RegionUs: 'region_us',
    RegionApac: 'region_apac',
    RegionGlobal: 'region_global',
    ProductionProjects: 'production_projects',
    DailyActiveUsers: 'daily_active_users',
    CustomDomains: 'custom_domains',
    Sla: 'sla',
    CollaboratorSeats: 'collaborator_seats',
    EdgeCache: 'edge_cache',
    BrandingThemes: 'branding_themes',
    ZendeskSupport: 'zendesk_support',
    ProjectMetrics: 'project_metrics',
    ProjectMetricsTimeWindow: 'project_metrics_time_window',
    Organizations: 'organizations',
    RopGrant: 'rop_grant',
    RateLimitTier: 'rate_limit_tier',
    SessionRateLimitTier: 'session_rate_limit_tier',
    IdentitiesListRateLimitTier: 'identities_list_rate_limit_tier'
} as const;
export type QuotaUsageFeatureEnum = typeof QuotaUsageFeatureEnum[keyof typeof QuotaUsageFeatureEnum];


/**
 * Check if a given object implements the QuotaUsage interface.
 */
export function instanceOfQuotaUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "additional_price" in value;
    isInstance = isInstance && "can_use_more" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "feature_available" in value;
    isInstance = isInstance && "included" in value;
    isInstance = isInstance && "used" in value;

    return isInstance;
}

export function QuotaUsageFromJSON(json: any): QuotaUsage {
    return QuotaUsageFromJSONTyped(json, false);
}

export function QuotaUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotaUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_price': json['additional_price'],
        'can_use_more': json['can_use_more'],
        'feature': json['feature'],
        'feature_available': json['feature_available'],
        'included': json['included'],
        'used': json['used'],
    };
}

export function QuotaUsageToJSON(value?: QuotaUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_price': value.additional_price,
        'can_use_more': value.can_use_more,
        'feature': value.feature,
        'feature_available': value.feature_available,
        'included': value.included,
        'used': value.used,
    };
}

