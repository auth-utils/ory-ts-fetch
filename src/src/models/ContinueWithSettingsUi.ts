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
import type { ContinueWithSettingsUiFlow } from './ContinueWithSettingsUiFlow';
import {
    ContinueWithSettingsUiFlowFromJSON,
    ContinueWithSettingsUiFlowFromJSONTyped,
    ContinueWithSettingsUiFlowToJSON,
} from './ContinueWithSettingsUiFlow';

/**
 * Indicates, that the UI flow could be continued by showing a settings ui
 * @export
 * @interface ContinueWithSettingsUi
 */
export interface ContinueWithSettingsUi {
    /**
     * Action will always be `show_settings_ui`
     * show_settings_ui ContinueWithActionShowSettingsUIString
     * @type {string}
     * @memberof ContinueWithSettingsUi
     */
    action: ContinueWithSettingsUiActionEnum;
    /**
     * 
     * @type {ContinueWithSettingsUiFlow}
     * @memberof ContinueWithSettingsUi
     */
    flow: ContinueWithSettingsUiFlow;
}


/**
 * @export
 */
export const ContinueWithSettingsUiActionEnum = {
    ShowSettingsUi: 'show_settings_ui'
} as const;
export type ContinueWithSettingsUiActionEnum = typeof ContinueWithSettingsUiActionEnum[keyof typeof ContinueWithSettingsUiActionEnum];


/**
 * Check if a given object implements the ContinueWithSettingsUi interface.
 */
export function instanceOfContinueWithSettingsUi(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "flow" in value;

    return isInstance;
}

export function ContinueWithSettingsUiFromJSON(json: any): ContinueWithSettingsUi {
    return ContinueWithSettingsUiFromJSONTyped(json, false);
}

export function ContinueWithSettingsUiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueWithSettingsUi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'flow': ContinueWithSettingsUiFlowFromJSON(json['flow']),
    };
}

export function ContinueWithSettingsUiToJSON(value?: ContinueWithSettingsUi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'flow': ContinueWithSettingsUiFlowToJSON(value.flow),
    };
}
