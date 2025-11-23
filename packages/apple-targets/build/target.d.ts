import { PBXNativeTarget, XcodeProject } from "@bacons/xcode";
export type ExtensionType = "widget" | "notification-content" | "notification-service" | "share" | "intent" | "bg-download" | "intent-ui" | "spotlight" | "matter" | "quicklook-thumbnail" | "imessage" | "clip" | "watch" | "location-push" | "credentials-provider" | "account-auth" | "action" | "safari" | "app-intent" | "device-activity-monitor" | "keyboard";
export declare const KNOWN_EXTENSION_POINT_IDENTIFIERS: Record<string, ExtensionType>;
export declare const SHOULD_USE_APP_GROUPS_BY_DEFAULT: Record<ExtensionType, boolean>;
export declare function getTargetInfoPlistForType(type: ExtensionType): string;
export declare function productTypeForType(type: ExtensionType): "com.apple.product-type.application.on-demand-install-capable" | "com.apple.product-type.application" | "com.apple.product-type.extensionkit-extension" | "com.apple.product-type.app-extension";
export declare function needsEmbeddedSwift(type: ExtensionType): boolean;
export declare function getFrameworksForType(type: ExtensionType): string[];
export declare function isNativeTargetOfType(target: PBXNativeTarget, type: ExtensionType): boolean;
export declare function getMainAppTarget(project: XcodeProject): PBXNativeTarget;
/**
 * Finds a target by its name (matches against target.props.name or target.props.productName)
 *
 * @param project - The Xcode project
 * @param targetName - The name to search for
 * @returns The found target or undefined
 */
export declare function findTargetByName(project: XcodeProject, targetName: string): PBXNativeTarget | undefined;
export declare function getAuxiliaryTargets(project: XcodeProject): PBXNativeTarget[];
