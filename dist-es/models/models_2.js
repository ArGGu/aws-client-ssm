import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { PatchSource, } from "./models_0";
import { MaintenanceWindowTaskInvocationParameters, } from "./models_1";
export var UpdateMaintenanceWindowResult;
(function (UpdateMaintenanceWindowResult) {
    UpdateMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowResult || (UpdateMaintenanceWindowResult = {}));
export var UpdateMaintenanceWindowTargetRequest;
(function (UpdateMaintenanceWindowTargetRequest) {
    UpdateMaintenanceWindowTargetRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTargetRequest || (UpdateMaintenanceWindowTargetRequest = {}));
export var UpdateMaintenanceWindowTargetResult;
(function (UpdateMaintenanceWindowTargetResult) {
    UpdateMaintenanceWindowTargetResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTargetResult || (UpdateMaintenanceWindowTargetResult = {}));
export var UpdateMaintenanceWindowTaskRequest;
(function (UpdateMaintenanceWindowTaskRequest) {
    UpdateMaintenanceWindowTaskRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTaskRequest || (UpdateMaintenanceWindowTaskRequest = {}));
export var UpdateMaintenanceWindowTaskResult;
(function (UpdateMaintenanceWindowTaskResult) {
    UpdateMaintenanceWindowTaskResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTaskResult || (UpdateMaintenanceWindowTaskResult = {}));
export var UpdateManagedInstanceRoleRequest;
(function (UpdateManagedInstanceRoleRequest) {
    UpdateManagedInstanceRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateManagedInstanceRoleRequest || (UpdateManagedInstanceRoleRequest = {}));
export var UpdateManagedInstanceRoleResult;
(function (UpdateManagedInstanceRoleResult) {
    UpdateManagedInstanceRoleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateManagedInstanceRoleResult || (UpdateManagedInstanceRoleResult = {}));
export var UpdateOpsItemRequest;
(function (UpdateOpsItemRequest) {
    UpdateOpsItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsItemRequest || (UpdateOpsItemRequest = {}));
export var UpdateOpsItemResponse;
(function (UpdateOpsItemResponse) {
    UpdateOpsItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsItemResponse || (UpdateOpsItemResponse = {}));
export var OpsMetadataKeyLimitExceededException;
(function (OpsMetadataKeyLimitExceededException) {
    OpsMetadataKeyLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataKeyLimitExceededException || (OpsMetadataKeyLimitExceededException = {}));
export var UpdateOpsMetadataRequest;
(function (UpdateOpsMetadataRequest) {
    UpdateOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsMetadataRequest || (UpdateOpsMetadataRequest = {}));
export var UpdateOpsMetadataResult;
(function (UpdateOpsMetadataResult) {
    UpdateOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsMetadataResult || (UpdateOpsMetadataResult = {}));
export var UpdatePatchBaselineRequest;
(function (UpdatePatchBaselineRequest) {
    UpdatePatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(UpdatePatchBaselineRequest || (UpdatePatchBaselineRequest = {}));
export var UpdatePatchBaselineResult;
(function (UpdatePatchBaselineResult) {
    UpdatePatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(UpdatePatchBaselineResult || (UpdatePatchBaselineResult = {}));
export var ResourceDataSyncConflictException;
(function (ResourceDataSyncConflictException) {
    ResourceDataSyncConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncConflictException || (ResourceDataSyncConflictException = {}));
export var UpdateResourceDataSyncRequest;
(function (UpdateResourceDataSyncRequest) {
    UpdateResourceDataSyncRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceDataSyncRequest || (UpdateResourceDataSyncRequest = {}));
export var UpdateResourceDataSyncResult;
(function (UpdateResourceDataSyncResult) {
    UpdateResourceDataSyncResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceDataSyncResult || (UpdateResourceDataSyncResult = {}));
export var UpdateServiceSettingRequest;
(function (UpdateServiceSettingRequest) {
    UpdateServiceSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingRequest || (UpdateServiceSettingRequest = {}));
export var UpdateServiceSettingResult;
(function (UpdateServiceSettingResult) {
    UpdateServiceSettingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingResult || (UpdateServiceSettingResult = {}));
export var InventoryAggregator;
(function (InventoryAggregator) {
    InventoryAggregator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryAggregator || (InventoryAggregator = {}));
export var OpsAggregator;
(function (OpsAggregator) {
    OpsAggregator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsAggregator || (OpsAggregator = {}));
export var GetInventoryRequest;
(function (GetInventoryRequest) {
    GetInventoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInventoryRequest || (GetInventoryRequest = {}));
export var GetOpsSummaryRequest;
(function (GetOpsSummaryRequest) {
    GetOpsSummaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsSummaryRequest || (GetOpsSummaryRequest = {}));
