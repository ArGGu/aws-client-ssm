"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowsCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = exports.serializeAws_json1_1DescribeInventoryDeletionsCommand = exports.serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = exports.serializeAws_json1_1DescribeInstancePatchStatesCommand = exports.serializeAws_json1_1DescribeInstancePatchesCommand = exports.serializeAws_json1_1DescribeInstanceInformationCommand = exports.serializeAws_json1_1DescribeInstanceAssociationsStatusCommand = exports.serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = exports.serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = exports.serializeAws_json1_1DescribeDocumentPermissionCommand = exports.serializeAws_json1_1DescribeDocumentCommand = exports.serializeAws_json1_1DescribeAvailablePatchesCommand = exports.serializeAws_json1_1DescribeAutomationStepExecutionsCommand = exports.serializeAws_json1_1DescribeAutomationExecutionsCommand = exports.serializeAws_json1_1DescribeAssociationExecutionTargetsCommand = exports.serializeAws_json1_1DescribeAssociationExecutionsCommand = exports.serializeAws_json1_1DescribeAssociationCommand = exports.serializeAws_json1_1DescribeActivationsCommand = exports.serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = exports.serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = exports.serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = exports.serializeAws_json1_1DeregisterManagedInstanceCommand = exports.serializeAws_json1_1DeleteResourceDataSyncCommand = exports.serializeAws_json1_1DeletePatchBaselineCommand = exports.serializeAws_json1_1DeleteParametersCommand = exports.serializeAws_json1_1DeleteParameterCommand = exports.serializeAws_json1_1DeleteOpsMetadataCommand = exports.serializeAws_json1_1DeleteMaintenanceWindowCommand = exports.serializeAws_json1_1DeleteInventoryCommand = exports.serializeAws_json1_1DeleteDocumentCommand = exports.serializeAws_json1_1DeleteAssociationCommand = exports.serializeAws_json1_1DeleteActivationCommand = exports.serializeAws_json1_1CreateResourceDataSyncCommand = exports.serializeAws_json1_1CreatePatchBaselineCommand = exports.serializeAws_json1_1CreateOpsMetadataCommand = exports.serializeAws_json1_1CreateOpsItemCommand = exports.serializeAws_json1_1CreateMaintenanceWindowCommand = exports.serializeAws_json1_1CreateDocumentCommand = exports.serializeAws_json1_1CreateAssociationBatchCommand = exports.serializeAws_json1_1CreateAssociationCommand = exports.serializeAws_json1_1CreateActivationCommand = exports.serializeAws_json1_1CancelMaintenanceWindowExecutionCommand = exports.serializeAws_json1_1CancelCommandCommand = exports.serializeAws_json1_1AssociateOpsItemRelatedItemCommand = exports.serializeAws_json1_1AddTagsToResourceCommand = void 0;
exports.serializeAws_json1_1ListResourceDataSyncCommand = exports.serializeAws_json1_1ListResourceComplianceSummariesCommand = exports.serializeAws_json1_1ListOpsMetadataCommand = exports.serializeAws_json1_1ListOpsItemRelatedItemsCommand = exports.serializeAws_json1_1ListOpsItemEventsCommand = exports.serializeAws_json1_1ListInventoryEntriesCommand = exports.serializeAws_json1_1ListDocumentVersionsCommand = exports.serializeAws_json1_1ListDocumentsCommand = exports.serializeAws_json1_1ListDocumentMetadataHistoryCommand = exports.serializeAws_json1_1ListComplianceSummariesCommand = exports.serializeAws_json1_1ListComplianceItemsCommand = exports.serializeAws_json1_1ListCommandsCommand = exports.serializeAws_json1_1ListCommandInvocationsCommand = exports.serializeAws_json1_1ListAssociationVersionsCommand = exports.serializeAws_json1_1ListAssociationsCommand = exports.serializeAws_json1_1LabelParameterVersionCommand = exports.serializeAws_json1_1GetServiceSettingCommand = exports.serializeAws_json1_1GetPatchBaselineForPatchGroupCommand = exports.serializeAws_json1_1GetPatchBaselineCommand = exports.serializeAws_json1_1GetParametersByPathCommand = exports.serializeAws_json1_1GetParametersCommand = exports.serializeAws_json1_1GetParameterHistoryCommand = exports.serializeAws_json1_1GetParameterCommand = exports.serializeAws_json1_1GetOpsSummaryCommand = exports.serializeAws_json1_1GetOpsMetadataCommand = exports.serializeAws_json1_1GetOpsItemCommand = exports.serializeAws_json1_1GetMaintenanceWindowTaskCommand = exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = exports.serializeAws_json1_1GetMaintenanceWindowExecutionCommand = exports.serializeAws_json1_1GetMaintenanceWindowCommand = exports.serializeAws_json1_1GetInventorySchemaCommand = exports.serializeAws_json1_1GetInventoryCommand = exports.serializeAws_json1_1GetDocumentCommand = exports.serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = exports.serializeAws_json1_1GetDefaultPatchBaselineCommand = exports.serializeAws_json1_1GetConnectionStatusCommand = exports.serializeAws_json1_1GetCommandInvocationCommand = exports.serializeAws_json1_1GetCalendarStateCommand = exports.serializeAws_json1_1GetAutomationExecutionCommand = exports.serializeAws_json1_1DisassociateOpsItemRelatedItemCommand = exports.serializeAws_json1_1DescribeSessionsCommand = exports.serializeAws_json1_1DescribePatchPropertiesCommand = exports.serializeAws_json1_1DescribePatchGroupStateCommand = exports.serializeAws_json1_1DescribePatchGroupsCommand = exports.serializeAws_json1_1DescribePatchBaselinesCommand = exports.serializeAws_json1_1DescribeParametersCommand = exports.serializeAws_json1_1DescribeOpsItemsCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowTasksCommand = exports.serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = void 0;
exports.deserializeAws_json1_1DeleteAssociationCommand = exports.deserializeAws_json1_1DeleteActivationCommand = exports.deserializeAws_json1_1CreateResourceDataSyncCommand = exports.deserializeAws_json1_1CreatePatchBaselineCommand = exports.deserializeAws_json1_1CreateOpsMetadataCommand = exports.deserializeAws_json1_1CreateOpsItemCommand = exports.deserializeAws_json1_1CreateMaintenanceWindowCommand = exports.deserializeAws_json1_1CreateDocumentCommand = exports.deserializeAws_json1_1CreateAssociationBatchCommand = exports.deserializeAws_json1_1CreateAssociationCommand = exports.deserializeAws_json1_1CreateActivationCommand = exports.deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand = exports.deserializeAws_json1_1CancelCommandCommand = exports.deserializeAws_json1_1AssociateOpsItemRelatedItemCommand = exports.deserializeAws_json1_1AddTagsToResourceCommand = exports.serializeAws_json1_1UpdateServiceSettingCommand = exports.serializeAws_json1_1UpdateResourceDataSyncCommand = exports.serializeAws_json1_1UpdatePatchBaselineCommand = exports.serializeAws_json1_1UpdateOpsMetadataCommand = exports.serializeAws_json1_1UpdateOpsItemCommand = exports.serializeAws_json1_1UpdateManagedInstanceRoleCommand = exports.serializeAws_json1_1UpdateMaintenanceWindowTaskCommand = exports.serializeAws_json1_1UpdateMaintenanceWindowTargetCommand = exports.serializeAws_json1_1UpdateMaintenanceWindowCommand = exports.serializeAws_json1_1UpdateDocumentMetadataCommand = exports.serializeAws_json1_1UpdateDocumentDefaultVersionCommand = exports.serializeAws_json1_1UpdateDocumentCommand = exports.serializeAws_json1_1UpdateAssociationStatusCommand = exports.serializeAws_json1_1UpdateAssociationCommand = exports.serializeAws_json1_1UnlabelParameterVersionCommand = exports.serializeAws_json1_1TerminateSessionCommand = exports.serializeAws_json1_1StopAutomationExecutionCommand = exports.serializeAws_json1_1StartSessionCommand = exports.serializeAws_json1_1StartChangeRequestExecutionCommand = exports.serializeAws_json1_1StartAutomationExecutionCommand = exports.serializeAws_json1_1StartAssociationsOnceCommand = exports.serializeAws_json1_1SendCommandCommand = exports.serializeAws_json1_1SendAutomationSignalCommand = exports.serializeAws_json1_1ResumeSessionCommand = exports.serializeAws_json1_1ResetServiceSettingCommand = exports.serializeAws_json1_1RemoveTagsFromResourceCommand = exports.serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = exports.serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = exports.serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = exports.serializeAws_json1_1RegisterDefaultPatchBaselineCommand = exports.serializeAws_json1_1PutParameterCommand = exports.serializeAws_json1_1PutInventoryCommand = exports.serializeAws_json1_1PutComplianceItemsCommand = exports.serializeAws_json1_1ModifyDocumentPermissionCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = void 0;
exports.deserializeAws_json1_1GetDefaultPatchBaselineCommand = exports.deserializeAws_json1_1GetConnectionStatusCommand = exports.deserializeAws_json1_1GetCommandInvocationCommand = exports.deserializeAws_json1_1GetCalendarStateCommand = exports.deserializeAws_json1_1GetAutomationExecutionCommand = exports.deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand = exports.deserializeAws_json1_1DescribeSessionsCommand = exports.deserializeAws_json1_1DescribePatchPropertiesCommand = exports.deserializeAws_json1_1DescribePatchGroupStateCommand = exports.deserializeAws_json1_1DescribePatchGroupsCommand = exports.deserializeAws_json1_1DescribePatchBaselinesCommand = exports.deserializeAws_json1_1DescribeParametersCommand = exports.deserializeAws_json1_1DescribeOpsItemsCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowsCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = exports.deserializeAws_json1_1DescribeInventoryDeletionsCommand = exports.deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = exports.deserializeAws_json1_1DescribeInstancePatchStatesCommand = exports.deserializeAws_json1_1DescribeInstancePatchesCommand = exports.deserializeAws_json1_1DescribeInstanceInformationCommand = exports.deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand = exports.deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = exports.deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = exports.deserializeAws_json1_1DescribeDocumentPermissionCommand = exports.deserializeAws_json1_1DescribeDocumentCommand = exports.deserializeAws_json1_1DescribeAvailablePatchesCommand = exports.deserializeAws_json1_1DescribeAutomationStepExecutionsCommand = exports.deserializeAws_json1_1DescribeAutomationExecutionsCommand = exports.deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand = exports.deserializeAws_json1_1DescribeAssociationExecutionsCommand = exports.deserializeAws_json1_1DescribeAssociationCommand = exports.deserializeAws_json1_1DescribeActivationsCommand = exports.deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = exports.deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = exports.deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = exports.deserializeAws_json1_1DeregisterManagedInstanceCommand = exports.deserializeAws_json1_1DeleteResourceDataSyncCommand = exports.deserializeAws_json1_1DeletePatchBaselineCommand = exports.deserializeAws_json1_1DeleteParametersCommand = exports.deserializeAws_json1_1DeleteParameterCommand = exports.deserializeAws_json1_1DeleteOpsMetadataCommand = exports.deserializeAws_json1_1DeleteMaintenanceWindowCommand = exports.deserializeAws_json1_1DeleteInventoryCommand = exports.deserializeAws_json1_1DeleteDocumentCommand = void 0;
exports.deserializeAws_json1_1StartAssociationsOnceCommand = exports.deserializeAws_json1_1SendCommandCommand = exports.deserializeAws_json1_1SendAutomationSignalCommand = exports.deserializeAws_json1_1ResumeSessionCommand = exports.deserializeAws_json1_1ResetServiceSettingCommand = exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = exports.deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = exports.deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = exports.deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = exports.deserializeAws_json1_1RegisterDefaultPatchBaselineCommand = exports.deserializeAws_json1_1PutParameterCommand = exports.deserializeAws_json1_1PutInventoryCommand = exports.deserializeAws_json1_1PutComplianceItemsCommand = exports.deserializeAws_json1_1ModifyDocumentPermissionCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResourceDataSyncCommand = exports.deserializeAws_json1_1ListResourceComplianceSummariesCommand = exports.deserializeAws_json1_1ListOpsMetadataCommand = exports.deserializeAws_json1_1ListOpsItemRelatedItemsCommand = exports.deserializeAws_json1_1ListOpsItemEventsCommand = exports.deserializeAws_json1_1ListInventoryEntriesCommand = exports.deserializeAws_json1_1ListDocumentVersionsCommand = exports.deserializeAws_json1_1ListDocumentsCommand = exports.deserializeAws_json1_1ListDocumentMetadataHistoryCommand = exports.deserializeAws_json1_1ListComplianceSummariesCommand = exports.deserializeAws_json1_1ListComplianceItemsCommand = exports.deserializeAws_json1_1ListCommandsCommand = exports.deserializeAws_json1_1ListCommandInvocationsCommand = exports.deserializeAws_json1_1ListAssociationVersionsCommand = exports.deserializeAws_json1_1ListAssociationsCommand = exports.deserializeAws_json1_1LabelParameterVersionCommand = exports.deserializeAws_json1_1GetServiceSettingCommand = exports.deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand = exports.deserializeAws_json1_1GetPatchBaselineCommand = exports.deserializeAws_json1_1GetParametersByPathCommand = exports.deserializeAws_json1_1GetParametersCommand = exports.deserializeAws_json1_1GetParameterHistoryCommand = exports.deserializeAws_json1_1GetParameterCommand = exports.deserializeAws_json1_1GetOpsSummaryCommand = exports.deserializeAws_json1_1GetOpsMetadataCommand = exports.deserializeAws_json1_1GetOpsItemCommand = exports.deserializeAws_json1_1GetMaintenanceWindowTaskCommand = exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = exports.deserializeAws_json1_1GetMaintenanceWindowExecutionCommand = exports.deserializeAws_json1_1GetMaintenanceWindowCommand = exports.deserializeAws_json1_1GetInventorySchemaCommand = exports.deserializeAws_json1_1GetInventoryCommand = exports.deserializeAws_json1_1GetDocumentCommand = exports.deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = void 0;
exports.deserializeAws_json1_1UpdateServiceSettingCommand = exports.deserializeAws_json1_1UpdateResourceDataSyncCommand = exports.deserializeAws_json1_1UpdatePatchBaselineCommand = exports.deserializeAws_json1_1UpdateOpsMetadataCommand = exports.deserializeAws_json1_1UpdateOpsItemCommand = exports.deserializeAws_json1_1UpdateManagedInstanceRoleCommand = exports.deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand = exports.deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand = exports.deserializeAws_json1_1UpdateMaintenanceWindowCommand = exports.deserializeAws_json1_1UpdateDocumentMetadataCommand = exports.deserializeAws_json1_1UpdateDocumentDefaultVersionCommand = exports.deserializeAws_json1_1UpdateDocumentCommand = exports.deserializeAws_json1_1UpdateAssociationStatusCommand = exports.deserializeAws_json1_1UpdateAssociationCommand = exports.deserializeAws_json1_1UnlabelParameterVersionCommand = exports.deserializeAws_json1_1TerminateSessionCommand = exports.deserializeAws_json1_1StopAutomationExecutionCommand = exports.deserializeAws_json1_1StartSessionCommand = exports.deserializeAws_json1_1StartChangeRequestExecutionCommand = exports.deserializeAws_json1_1StartAutomationExecutionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_json1_1AddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.AddTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
const serializeAws_json1_1AssociateOpsItemRelatedItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.AssociateOpsItemRelatedItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateOpsItemRelatedItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateOpsItemRelatedItemCommand = serializeAws_json1_1AssociateOpsItemRelatedItemCommand;
const serializeAws_json1_1CancelCommandCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CancelCommand",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelCommandCommand = serializeAws_json1_1CancelCommandCommand;
const serializeAws_json1_1CancelMaintenanceWindowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CancelMaintenanceWindowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelMaintenanceWindowExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelMaintenanceWindowExecutionCommand = serializeAws_json1_1CancelMaintenanceWindowExecutionCommand;
const serializeAws_json1_1CreateActivationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateActivation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateActivationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateActivationCommand = serializeAws_json1_1CreateActivationCommand;
const serializeAws_json1_1CreateAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAssociationCommand = serializeAws_json1_1CreateAssociationCommand;
const serializeAws_json1_1CreateAssociationBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateAssociationBatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssociationBatchRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAssociationBatchCommand = serializeAws_json1_1CreateAssociationBatchCommand;
const serializeAws_json1_1CreateDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDocumentCommand = serializeAws_json1_1CreateDocumentCommand;
const serializeAws_json1_1CreateMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMaintenanceWindowCommand = serializeAws_json1_1CreateMaintenanceWindowCommand;
const serializeAws_json1_1CreateOpsItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateOpsItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateOpsItemCommand = serializeAws_json1_1CreateOpsItemCommand;
const serializeAws_json1_1CreateOpsMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateOpsMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOpsMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateOpsMetadataCommand = serializeAws_json1_1CreateOpsMetadataCommand;
const serializeAws_json1_1CreatePatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreatePatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePatchBaselineCommand = serializeAws_json1_1CreatePatchBaselineCommand;
const serializeAws_json1_1CreateResourceDataSyncCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.CreateResourceDataSync",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResourceDataSyncCommand = serializeAws_json1_1CreateResourceDataSyncCommand;
const serializeAws_json1_1DeleteActivationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteActivation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteActivationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteActivationCommand = serializeAws_json1_1DeleteActivationCommand;
const serializeAws_json1_1DeleteAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAssociationCommand = serializeAws_json1_1DeleteAssociationCommand;
const serializeAws_json1_1DeleteDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDocumentCommand = serializeAws_json1_1DeleteDocumentCommand;
const serializeAws_json1_1DeleteInventoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteInventory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInventoryCommand = serializeAws_json1_1DeleteInventoryCommand;
const serializeAws_json1_1DeleteMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMaintenanceWindowCommand = serializeAws_json1_1DeleteMaintenanceWindowCommand;
const serializeAws_json1_1DeleteOpsMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteOpsMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOpsMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOpsMetadataCommand = serializeAws_json1_1DeleteOpsMetadataCommand;
const serializeAws_json1_1DeleteParameterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteParameter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteParameterCommand = serializeAws_json1_1DeleteParameterCommand;
const serializeAws_json1_1DeleteParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteParametersCommand = serializeAws_json1_1DeleteParametersCommand;
const serializeAws_json1_1DeletePatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeletePatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePatchBaselineCommand = serializeAws_json1_1DeletePatchBaselineCommand;
const serializeAws_json1_1DeleteResourceDataSyncCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeleteResourceDataSync",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourceDataSyncCommand = serializeAws_json1_1DeleteResourceDataSyncCommand;
const serializeAws_json1_1DeregisterManagedInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeregisterManagedInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterManagedInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterManagedInstanceCommand = serializeAws_json1_1DeregisterManagedInstanceCommand;
const serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeregisterPatchBaselineForPatchGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand;
const serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeregisterTargetFromMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand;
const serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DeregisterTaskFromMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand;
const serializeAws_json1_1DescribeActivationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeActivations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeActivationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeActivationsCommand = serializeAws_json1_1DescribeActivationsCommand;
const serializeAws_json1_1DescribeAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssociationCommand = serializeAws_json1_1DescribeAssociationCommand;
const serializeAws_json1_1DescribeAssociationExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAssociationExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssociationExecutionsCommand = serializeAws_json1_1DescribeAssociationExecutionsCommand;
const serializeAws_json1_1DescribeAssociationExecutionTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAssociationExecutionTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssociationExecutionTargetsCommand = serializeAws_json1_1DescribeAssociationExecutionTargetsCommand;
const serializeAws_json1_1DescribeAutomationExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAutomationExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAutomationExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAutomationExecutionsCommand = serializeAws_json1_1DescribeAutomationExecutionsCommand;
const serializeAws_json1_1DescribeAutomationStepExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAutomationStepExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAutomationStepExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAutomationStepExecutionsCommand = serializeAws_json1_1DescribeAutomationStepExecutionsCommand;
const serializeAws_json1_1DescribeAvailablePatchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeAvailablePatches",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAvailablePatchesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAvailablePatchesCommand = serializeAws_json1_1DescribeAvailablePatchesCommand;
const serializeAws_json1_1DescribeDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDocumentCommand = serializeAws_json1_1DescribeDocumentCommand;
const serializeAws_json1_1DescribeDocumentPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeDocumentPermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDocumentPermissionCommand = serializeAws_json1_1DescribeDocumentPermissionCommand;
const serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeEffectiveInstanceAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand;
const serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeEffectivePatchesForPatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand;
const serializeAws_json1_1DescribeInstanceAssociationsStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInstanceAssociationsStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstanceAssociationsStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstanceAssociationsStatusCommand = serializeAws_json1_1DescribeInstanceAssociationsStatusCommand;
const serializeAws_json1_1DescribeInstanceInformationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInstanceInformation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstanceInformationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstanceInformationCommand = serializeAws_json1_1DescribeInstanceInformationCommand;
const serializeAws_json1_1DescribeInstancePatchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInstancePatches",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstancePatchesCommand = serializeAws_json1_1DescribeInstancePatchesCommand;
const serializeAws_json1_1DescribeInstancePatchStatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInstancePatchStates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstancePatchStatesCommand = serializeAws_json1_1DescribeInstancePatchStatesCommand;
const serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInstancePatchStatesForPatchGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand;
const serializeAws_json1_1DescribeInventoryDeletionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeInventoryDeletions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInventoryDeletionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInventoryDeletionsCommand = serializeAws_json1_1DescribeInventoryDeletionsCommand;
const serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand;
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand;
const serializeAws_json1_1DescribeMaintenanceWindowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowsCommand = serializeAws_json1_1DescribeMaintenanceWindowsCommand;
const serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand;
const serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowsForTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand;
const serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand;
const serializeAws_json1_1DescribeMaintenanceWindowTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceWindowTasksCommand = serializeAws_json1_1DescribeMaintenanceWindowTasksCommand;
const serializeAws_json1_1DescribeOpsItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeOpsItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOpsItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOpsItemsCommand = serializeAws_json1_1DescribeOpsItemsCommand;
const serializeAws_json1_1DescribeParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeParametersCommand = serializeAws_json1_1DescribeParametersCommand;
const serializeAws_json1_1DescribePatchBaselinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribePatchBaselines",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchBaselinesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePatchBaselinesCommand = serializeAws_json1_1DescribePatchBaselinesCommand;
const serializeAws_json1_1DescribePatchGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribePatchGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePatchGroupsCommand = serializeAws_json1_1DescribePatchGroupsCommand;
const serializeAws_json1_1DescribePatchGroupStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribePatchGroupState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchGroupStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePatchGroupStateCommand = serializeAws_json1_1DescribePatchGroupStateCommand;
const serializeAws_json1_1DescribePatchPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribePatchProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePatchPropertiesCommand = serializeAws_json1_1DescribePatchPropertiesCommand;
const serializeAws_json1_1DescribeSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DescribeSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSessionsCommand = serializeAws_json1_1DescribeSessionsCommand;
const serializeAws_json1_1DisassociateOpsItemRelatedItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.DisassociateOpsItemRelatedItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateOpsItemRelatedItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateOpsItemRelatedItemCommand = serializeAws_json1_1DisassociateOpsItemRelatedItemCommand;
const serializeAws_json1_1GetAutomationExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetAutomationExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAutomationExecutionCommand = serializeAws_json1_1GetAutomationExecutionCommand;
const serializeAws_json1_1GetCalendarStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetCalendarState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCalendarStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCalendarStateCommand = serializeAws_json1_1GetCalendarStateCommand;
const serializeAws_json1_1GetCommandInvocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetCommandInvocation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommandInvocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommandInvocationCommand = serializeAws_json1_1GetCommandInvocationCommand;
const serializeAws_json1_1GetConnectionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetConnectionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConnectionStatusCommand = serializeAws_json1_1GetConnectionStatusCommand;
const serializeAws_json1_1GetDefaultPatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetDefaultPatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDefaultPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDefaultPatchBaselineCommand = serializeAws_json1_1GetDefaultPatchBaselineCommand;
const serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetDeployablePatchSnapshotForInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand;
const serializeAws_json1_1GetDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDocumentCommand = serializeAws_json1_1GetDocumentCommand;
const serializeAws_json1_1GetInventoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetInventory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInventoryCommand = serializeAws_json1_1GetInventoryCommand;
const serializeAws_json1_1GetInventorySchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetInventorySchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInventorySchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInventorySchemaCommand = serializeAws_json1_1GetInventorySchemaCommand;
const serializeAws_json1_1GetMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMaintenanceWindowCommand = serializeAws_json1_1GetMaintenanceWindowCommand;
const serializeAws_json1_1GetMaintenanceWindowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMaintenanceWindowExecutionCommand = serializeAws_json1_1GetMaintenanceWindowExecutionCommand;
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand;
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand;
const serializeAws_json1_1GetMaintenanceWindowTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetMaintenanceWindowTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMaintenanceWindowTaskCommand = serializeAws_json1_1GetMaintenanceWindowTaskCommand;
const serializeAws_json1_1GetOpsItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetOpsItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOpsItemCommand = serializeAws_json1_1GetOpsItemCommand;
const serializeAws_json1_1GetOpsMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetOpsMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpsMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOpsMetadataCommand = serializeAws_json1_1GetOpsMetadataCommand;
const serializeAws_json1_1GetOpsSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetOpsSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpsSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOpsSummaryCommand = serializeAws_json1_1GetOpsSummaryCommand;
const serializeAws_json1_1GetParameterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetParameter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetParameterCommand = serializeAws_json1_1GetParameterCommand;
const serializeAws_json1_1GetParameterHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetParameterHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParameterHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetParameterHistoryCommand = serializeAws_json1_1GetParameterHistoryCommand;
const serializeAws_json1_1GetParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetParametersCommand = serializeAws_json1_1GetParametersCommand;
const serializeAws_json1_1GetParametersByPathCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetParametersByPath",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersByPathRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetParametersByPathCommand = serializeAws_json1_1GetParametersByPathCommand;
const serializeAws_json1_1GetPatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetPatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPatchBaselineCommand = serializeAws_json1_1GetPatchBaselineCommand;
const serializeAws_json1_1GetPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetPatchBaselineForPatchGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPatchBaselineForPatchGroupCommand = serializeAws_json1_1GetPatchBaselineForPatchGroupCommand;
const serializeAws_json1_1GetServiceSettingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.GetServiceSetting",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServiceSettingCommand = serializeAws_json1_1GetServiceSettingCommand;
const serializeAws_json1_1LabelParameterVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.LabelParameterVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1LabelParameterVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1LabelParameterVersionCommand = serializeAws_json1_1LabelParameterVersionCommand;
const serializeAws_json1_1ListAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociationsCommand = serializeAws_json1_1ListAssociationsCommand;
const serializeAws_json1_1ListAssociationVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListAssociationVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociationVersionsCommand = serializeAws_json1_1ListAssociationVersionsCommand;
const serializeAws_json1_1ListCommandInvocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListCommandInvocations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCommandInvocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCommandInvocationsCommand = serializeAws_json1_1ListCommandInvocationsCommand;
const serializeAws_json1_1ListCommandsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListCommands",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCommandsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCommandsCommand = serializeAws_json1_1ListCommandsCommand;
const serializeAws_json1_1ListComplianceItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListComplianceItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListComplianceItemsCommand = serializeAws_json1_1ListComplianceItemsCommand;
const serializeAws_json1_1ListComplianceSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListComplianceSummaries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListComplianceSummariesCommand = serializeAws_json1_1ListComplianceSummariesCommand;
const serializeAws_json1_1ListDocumentMetadataHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListDocumentMetadataHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentMetadataHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDocumentMetadataHistoryCommand = serializeAws_json1_1ListDocumentMetadataHistoryCommand;
const serializeAws_json1_1ListDocumentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListDocuments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDocumentsCommand = serializeAws_json1_1ListDocumentsCommand;
const serializeAws_json1_1ListDocumentVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListDocumentVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDocumentVersionsCommand = serializeAws_json1_1ListDocumentVersionsCommand;
const serializeAws_json1_1ListInventoryEntriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListInventoryEntries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInventoryEntriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInventoryEntriesCommand = serializeAws_json1_1ListInventoryEntriesCommand;
const serializeAws_json1_1ListOpsItemEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListOpsItemEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOpsItemEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOpsItemEventsCommand = serializeAws_json1_1ListOpsItemEventsCommand;
const serializeAws_json1_1ListOpsItemRelatedItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListOpsItemRelatedItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOpsItemRelatedItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOpsItemRelatedItemsCommand = serializeAws_json1_1ListOpsItemRelatedItemsCommand;
const serializeAws_json1_1ListOpsMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListOpsMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOpsMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOpsMetadataCommand = serializeAws_json1_1ListOpsMetadataCommand;
const serializeAws_json1_1ListResourceComplianceSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListResourceComplianceSummaries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceComplianceSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceComplianceSummariesCommand = serializeAws_json1_1ListResourceComplianceSummariesCommand;
const serializeAws_json1_1ListResourceDataSyncCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListResourceDataSync",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceDataSyncCommand = serializeAws_json1_1ListResourceDataSyncCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ModifyDocumentPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ModifyDocumentPermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyDocumentPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyDocumentPermissionCommand = serializeAws_json1_1ModifyDocumentPermissionCommand;
const serializeAws_json1_1PutComplianceItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.PutComplianceItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutComplianceItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutComplianceItemsCommand = serializeAws_json1_1PutComplianceItemsCommand;
const serializeAws_json1_1PutInventoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.PutInventory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutInventoryCommand = serializeAws_json1_1PutInventoryCommand;
const serializeAws_json1_1PutParameterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.PutParameter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutParameterCommand = serializeAws_json1_1PutParameterCommand;
const serializeAws_json1_1RegisterDefaultPatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.RegisterDefaultPatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterDefaultPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterDefaultPatchBaselineCommand = serializeAws_json1_1RegisterDefaultPatchBaselineCommand;
const serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.RegisterPatchBaselineForPatchGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand;
const serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.RegisterTargetWithMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand;
const serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.RegisterTaskWithMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand;
const serializeAws_json1_1RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.RemoveTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
const serializeAws_json1_1ResetServiceSettingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ResetServiceSetting",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetServiceSettingCommand = serializeAws_json1_1ResetServiceSettingCommand;
const serializeAws_json1_1ResumeSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.ResumeSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResumeSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResumeSessionCommand = serializeAws_json1_1ResumeSessionCommand;
const serializeAws_json1_1SendAutomationSignalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.SendAutomationSignal",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendAutomationSignalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendAutomationSignalCommand = serializeAws_json1_1SendAutomationSignalCommand;
const serializeAws_json1_1SendCommandCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.SendCommand",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendCommandCommand = serializeAws_json1_1SendCommandCommand;
const serializeAws_json1_1StartAssociationsOnceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.StartAssociationsOnce",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAssociationsOnceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAssociationsOnceCommand = serializeAws_json1_1StartAssociationsOnceCommand;
const serializeAws_json1_1StartAutomationExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.StartAutomationExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAutomationExecutionCommand = serializeAws_json1_1StartAutomationExecutionCommand;
const serializeAws_json1_1StartChangeRequestExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.StartChangeRequestExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartChangeRequestExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartChangeRequestExecutionCommand = serializeAws_json1_1StartChangeRequestExecutionCommand;
const serializeAws_json1_1StartSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.StartSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartSessionCommand = serializeAws_json1_1StartSessionCommand;
const serializeAws_json1_1StopAutomationExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.StopAutomationExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopAutomationExecutionCommand = serializeAws_json1_1StopAutomationExecutionCommand;
const serializeAws_json1_1TerminateSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.TerminateSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TerminateSessionCommand = serializeAws_json1_1TerminateSessionCommand;
const serializeAws_json1_1UnlabelParameterVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UnlabelParameterVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlabelParameterVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnlabelParameterVersionCommand = serializeAws_json1_1UnlabelParameterVersionCommand;
const serializeAws_json1_1UpdateAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAssociationCommand = serializeAws_json1_1UpdateAssociationCommand;
const serializeAws_json1_1UpdateAssociationStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateAssociationStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssociationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAssociationStatusCommand = serializeAws_json1_1UpdateAssociationStatusCommand;
const serializeAws_json1_1UpdateDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDocumentCommand = serializeAws_json1_1UpdateDocumentCommand;
const serializeAws_json1_1UpdateDocumentDefaultVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateDocumentDefaultVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDocumentDefaultVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDocumentDefaultVersionCommand = serializeAws_json1_1UpdateDocumentDefaultVersionCommand;
const serializeAws_json1_1UpdateDocumentMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateDocumentMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDocumentMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDocumentMetadataCommand = serializeAws_json1_1UpdateDocumentMetadataCommand;
const serializeAws_json1_1UpdateMaintenanceWindowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateMaintenanceWindow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMaintenanceWindowCommand = serializeAws_json1_1UpdateMaintenanceWindowCommand;
const serializeAws_json1_1UpdateMaintenanceWindowTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMaintenanceWindowTargetCommand = serializeAws_json1_1UpdateMaintenanceWindowTargetCommand;
const serializeAws_json1_1UpdateMaintenanceWindowTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMaintenanceWindowTaskCommand = serializeAws_json1_1UpdateMaintenanceWindowTaskCommand;
const serializeAws_json1_1UpdateManagedInstanceRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateManagedInstanceRole",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateManagedInstanceRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateManagedInstanceRoleCommand = serializeAws_json1_1UpdateManagedInstanceRoleCommand;
const serializeAws_json1_1UpdateOpsItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateOpsItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateOpsItemCommand = serializeAws_json1_1UpdateOpsItemCommand;
const serializeAws_json1_1UpdateOpsMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateOpsMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateOpsMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateOpsMetadataCommand = serializeAws_json1_1UpdateOpsMetadataCommand;
const serializeAws_json1_1UpdatePatchBaselineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdatePatchBaseline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePatchBaselineCommand = serializeAws_json1_1UpdatePatchBaselineCommand;
const serializeAws_json1_1UpdateResourceDataSyncCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateResourceDataSync",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResourceDataSyncCommand = serializeAws_json1_1UpdateResourceDataSyncCommand;
const serializeAws_json1_1UpdateServiceSettingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonSSM.UpdateServiceSetting",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServiceSettingCommand = serializeAws_json1_1UpdateServiceSettingCommand;
const deserializeAws_json1_1AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsError":
        case "com.amazonaws.ssm#TooManyTagsError":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateOpsItemRelatedItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateOpsItemRelatedItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateOpsItemRelatedItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateOpsItemRelatedItemCommand = deserializeAws_json1_1AssociateOpsItemRelatedItemCommand;
const deserializeAws_json1_1AssociateOpsItemRelatedItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemRelatedItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemRelatedItemAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CancelCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelCommandResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelCommandCommand = deserializeAws_json1_1CancelCommandCommand;
const deserializeAws_json1_1CancelCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            response = {
                ...(await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            response = {
                ...(await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelMaintenanceWindowExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand = deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand;
const deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateActivationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateActivationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateActivationCommand = deserializeAws_json1_1CreateActivationCommand;
const deserializeAws_json1_1CreateActivationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAssociationCommand = deserializeAws_json1_1CreateAssociationCommand;
const deserializeAws_json1_1CreateAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationAlreadyExists":
        case "com.amazonaws.ssm#AssociationAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1AssociationAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssociationLimitExceeded":
        case "com.amazonaws.ssm#AssociationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            response = {
                ...(await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            response = {
                ...(await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            response = {
                ...(await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAssociationBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAssociationBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssociationBatchResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAssociationBatchCommand = deserializeAws_json1_1CreateAssociationBatchCommand;
const deserializeAws_json1_1CreateAssociationBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationLimitExceeded":
        case "com.amazonaws.ssm#AssociationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            response = {
                ...(await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            response = {
                ...(await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            response = {
                ...(await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            response = {
                ...(await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDocumentCommand = deserializeAws_json1_1CreateDocumentCommand;
const deserializeAws_json1_1CreateDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentAlreadyExists":
        case "com.amazonaws.ssm#DocumentAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1DocumentAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DocumentLimitExceeded":
        case "com.amazonaws.ssm#DocumentLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentContent":
        case "com.amazonaws.ssm#InvalidDocumentContent":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            response = {
                ...(await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMaintenanceWindowCommand = deserializeAws_json1_1CreateMaintenanceWindowCommand;
const deserializeAws_json1_1CreateMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOpsItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateOpsItemCommand = deserializeAws_json1_1CreateOpsItemCommand;
const deserializeAws_json1_1CreateOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateOpsMetadataCommand = deserializeAws_json1_1CreateOpsMetadataCommand;
const deserializeAws_json1_1CreateOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataAlreadyExistsException":
        case "com.amazonaws.ssm#OpsMetadataAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataLimitExceededException":
        case "com.amazonaws.ssm#OpsMetadataLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataTooManyUpdatesException":
        case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePatchBaselineCommand = deserializeAws_json1_1CreatePatchBaselineCommand;
const deserializeAws_json1_1CreatePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceDataSyncResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResourceDataSyncCommand = deserializeAws_json1_1CreateResourceDataSyncCommand;
const deserializeAws_json1_1CreateResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncAlreadyExistsException":
        case "com.amazonaws.ssm#ResourceDataSyncAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncCountExceededException":
        case "com.amazonaws.ssm#ResourceDataSyncCountExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteActivationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteActivationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteActivationCommand = deserializeAws_json1_1DeleteActivationCommand;
const deserializeAws_json1_1DeleteActivationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidActivation":
        case "com.amazonaws.ssm#InvalidActivation":
            response = {
                ...(await deserializeAws_json1_1InvalidActivationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidActivationId":
        case "com.amazonaws.ssm#InvalidActivationId":
            response = {
                ...(await deserializeAws_json1_1InvalidActivationIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAssociationCommand = deserializeAws_json1_1DeleteAssociationCommand;
const deserializeAws_json1_1DeleteAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDocumentCommand = deserializeAws_json1_1DeleteDocumentCommand;
const deserializeAws_json1_1DeleteDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociatedInstances":
        case "com.amazonaws.ssm#AssociatedInstances":
            response = {
                ...(await deserializeAws_json1_1AssociatedInstancesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInventoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInventoryCommand = deserializeAws_json1_1DeleteInventoryCommand;
const deserializeAws_json1_1DeleteInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeleteInventoryParametersException":
        case "com.amazonaws.ssm#InvalidDeleteInventoryParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInventoryRequestException":
        case "com.amazonaws.ssm#InvalidInventoryRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidInventoryRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOptionException":
        case "com.amazonaws.ssm#InvalidOptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidOptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMaintenanceWindowCommand = deserializeAws_json1_1DeleteMaintenanceWindowCommand;
const deserializeAws_json1_1DeleteMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOpsMetadataCommand = deserializeAws_json1_1DeleteOpsMetadataCommand;
const deserializeAws_json1_1DeleteOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParameterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteParameterCommand = deserializeAws_json1_1DeleteParameterCommand;
const deserializeAws_json1_1DeleteParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteParametersCommand = deserializeAws_json1_1DeleteParametersCommand;
const deserializeAws_json1_1DeleteParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePatchBaselineCommand = deserializeAws_json1_1DeletePatchBaselineCommand;
const deserializeAws_json1_1DeletePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ssm#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourceDataSyncResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourceDataSyncCommand = deserializeAws_json1_1DeleteResourceDataSyncCommand;
const deserializeAws_json1_1DeleteResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterManagedInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterManagedInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterManagedInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterManagedInstanceCommand = deserializeAws_json1_1DeregisterManagedInstanceCommand;
const deserializeAws_json1_1DeregisterManagedInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand;
const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand;
const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetInUseException":
        case "com.amazonaws.ssm#TargetInUseException":
            response = {
                ...(await deserializeAws_json1_1TargetInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand;
const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeActivationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeActivationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeActivationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeActivationsCommand = deserializeAws_json1_1DescribeActivationsCommand;
const deserializeAws_json1_1DescribeActivationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssociationCommand = deserializeAws_json1_1DescribeAssociationCommand;
const deserializeAws_json1_1DescribeAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAssociationVersion":
        case "com.amazonaws.ssm#InvalidAssociationVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAssociationExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssociationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssociationExecutionsCommand = deserializeAws_json1_1DescribeAssociationExecutionsCommand;
const deserializeAws_json1_1DescribeAssociationExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationExecutionTargetsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand = deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand;
const deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssociationExecutionDoesNotExist":
        case "com.amazonaws.ssm#AssociationExecutionDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationExecutionDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAutomationExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAutomationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAutomationExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAutomationExecutionsCommand = deserializeAws_json1_1DescribeAutomationExecutionsCommand;
const deserializeAws_json1_1DescribeAutomationExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAutomationStepExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAutomationStepExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAutomationStepExecutionsCommand = deserializeAws_json1_1DescribeAutomationStepExecutionsCommand;
const deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAvailablePatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAvailablePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAvailablePatchesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAvailablePatchesCommand = deserializeAws_json1_1DescribeAvailablePatchesCommand;
const deserializeAws_json1_1DescribeAvailablePatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDocumentCommand = deserializeAws_json1_1DescribeDocumentCommand;
const deserializeAws_json1_1DescribeDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDocumentPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentPermissionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDocumentPermissionCommand = deserializeAws_json1_1DescribeDocumentPermissionCommand;
const deserializeAws_json1_1DescribeDocumentPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPermissionType":
        case "com.amazonaws.ssm#InvalidPermissionType":
            response = {
                ...(await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand;
const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand;
const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.ssm#UnsupportedOperatingSystem":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstanceAssociationsStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand = deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand;
const deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInstanceInformationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstanceInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstanceInformationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstanceInformationCommand = deserializeAws_json1_1DescribeInstanceInformationCommand;
const deserializeAws_json1_1DescribeInstanceInformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceInformationFilterValue":
        case "com.amazonaws.ssm#InvalidInstanceInformationFilterValue":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInstancePatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstancePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstancePatchesCommand = deserializeAws_json1_1DescribeInstancePatchesCommand;
const deserializeAws_json1_1DescribeInstancePatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInstancePatchStatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstancePatchStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchStatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstancePatchStatesCommand = deserializeAws_json1_1DescribeInstancePatchStatesCommand;
const deserializeAws_json1_1DescribeInstancePatchStatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand;
const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInventoryDeletionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInventoryDeletionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInventoryDeletionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInventoryDeletionsCommand = deserializeAws_json1_1DescribeInventoryDeletionsCommand;
const deserializeAws_json1_1DescribeInventoryDeletionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeletionIdException":
        case "com.amazonaws.ssm#InvalidDeletionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeletionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowsCommand = deserializeAws_json1_1DescribeMaintenanceWindowsCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowTasksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand = deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand;
const deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeOpsItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOpsItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOpsItemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOpsItemsCommand = deserializeAws_json1_1DescribeOpsItemsCommand;
const deserializeAws_json1_1DescribeOpsItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeParametersCommand = deserializeAws_json1_1DescribeParametersCommand;
const deserializeAws_json1_1DescribeParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterOption":
        case "com.amazonaws.ssm#InvalidFilterOption":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePatchBaselinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePatchBaselinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchBaselinesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePatchBaselinesCommand = deserializeAws_json1_1DescribePatchBaselinesCommand;
const deserializeAws_json1_1DescribePatchBaselinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePatchGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePatchGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchGroupsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePatchGroupsCommand = deserializeAws_json1_1DescribePatchGroupsCommand;
const deserializeAws_json1_1DescribePatchGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePatchGroupStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePatchGroupStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchGroupStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePatchGroupStateCommand = deserializeAws_json1_1DescribePatchGroupStateCommand;
const deserializeAws_json1_1DescribePatchGroupStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePatchPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePatchPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchPropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePatchPropertiesCommand = deserializeAws_json1_1DescribePatchPropertiesCommand;
const deserializeAws_json1_1DescribePatchPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSessionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSessionsCommand = deserializeAws_json1_1DescribeSessionsCommand;
const deserializeAws_json1_1DescribeSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateOpsItemRelatedItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateOpsItemRelatedItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand = deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand;
const deserializeAws_json1_1DisassociateOpsItemRelatedItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemRelatedItemAssociationNotFoundException":
        case "com.amazonaws.ssm#OpsItemRelatedItemAssociationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAutomationExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAutomationExecutionCommand = deserializeAws_json1_1GetAutomationExecutionCommand;
const deserializeAws_json1_1GetAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetCalendarStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCalendarStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCalendarStateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCalendarStateCommand = deserializeAws_json1_1GetCalendarStateCommand;
const deserializeAws_json1_1GetCalendarStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentType":
        case "com.amazonaws.ssm#InvalidDocumentType":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCalendarException":
        case "com.amazonaws.ssm#UnsupportedCalendarException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCalendarExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetCommandInvocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommandInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommandInvocationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommandInvocationCommand = deserializeAws_json1_1GetCommandInvocationCommand;
const deserializeAws_json1_1GetCommandInvocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            response = {
                ...(await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPluginName":
        case "com.amazonaws.ssm#InvalidPluginName":
            response = {
                ...(await deserializeAws_json1_1InvalidPluginNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvocationDoesNotExist":
        case "com.amazonaws.ssm#InvocationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1InvocationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetConnectionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConnectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConnectionStatusCommand = deserializeAws_json1_1GetConnectionStatusCommand;
const deserializeAws_json1_1GetConnectionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDefaultPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDefaultPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDefaultPatchBaselineCommand = deserializeAws_json1_1GetDefaultPatchBaselineCommand;
const deserializeAws_json1_1GetDefaultPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand;
const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureRequiredException":
        case "com.amazonaws.ssm#UnsupportedFeatureRequiredException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.ssm#UnsupportedOperatingSystem":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDocumentCommand = deserializeAws_json1_1GetDocumentCommand;
const deserializeAws_json1_1GetDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInventoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInventoryCommand = deserializeAws_json1_1GetInventoryCommand;
const deserializeAws_json1_1GetInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAggregatorException":
        case "com.amazonaws.ssm#InvalidAggregatorException":
            response = {
                ...(await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInventoryGroupException":
        case "com.amazonaws.ssm#InvalidInventoryGroupException":
            response = {
                ...(await deserializeAws_json1_1InvalidInventoryGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResultAttributeException":
        case "com.amazonaws.ssm#InvalidResultAttributeException":
            response = {
                ...(await deserializeAws_json1_1InvalidResultAttributeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetInventorySchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInventorySchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInventorySchemaResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInventorySchemaCommand = deserializeAws_json1_1GetInventorySchemaCommand;
const deserializeAws_json1_1GetInventorySchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMaintenanceWindowCommand = deserializeAws_json1_1GetMaintenanceWindowCommand;
const deserializeAws_json1_1GetMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionCommand;
const deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand;
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand;
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetMaintenanceWindowTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMaintenanceWindowTaskCommand = deserializeAws_json1_1GetMaintenanceWindowTaskCommand;
const deserializeAws_json1_1GetMaintenanceWindowTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpsItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOpsItemCommand = deserializeAws_json1_1GetOpsItemCommand;
const deserializeAws_json1_1GetOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOpsMetadataCommand = deserializeAws_json1_1GetOpsMetadataCommand;
const deserializeAws_json1_1GetOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetOpsSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpsSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpsSummaryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOpsSummaryCommand = deserializeAws_json1_1GetOpsSummaryCommand;
const deserializeAws_json1_1GetOpsSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAggregatorException":
        case "com.amazonaws.ssm#InvalidAggregatorException":
            response = {
                ...(await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParameterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetParameterCommand = deserializeAws_json1_1GetParameterCommand;
const deserializeAws_json1_1GetParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetParameterHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetParameterHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParameterHistoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetParameterHistoryCommand = deserializeAws_json1_1GetParameterHistoryCommand;
const deserializeAws_json1_1GetParameterHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetParametersCommand = deserializeAws_json1_1GetParametersCommand;
const deserializeAws_json1_1GetParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetParametersByPathCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetParametersByPathCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersByPathResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetParametersByPathCommand = deserializeAws_json1_1GetParametersByPathCommand;
const deserializeAws_json1_1GetParametersByPathCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterOption":
        case "com.amazonaws.ssm#InvalidFilterOption":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPatchBaselineCommand = deserializeAws_json1_1GetPatchBaselineCommand;
const deserializeAws_json1_1GetPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPatchBaselineForPatchGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand = deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand;
const deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceSettingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServiceSettingCommand = deserializeAws_json1_1GetServiceSettingCommand;
const deserializeAws_json1_1GetServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1LabelParameterVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LabelParameterVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LabelParameterVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1LabelParameterVersionCommand = deserializeAws_json1_1LabelParameterVersionCommand;
const deserializeAws_json1_1LabelParameterVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterVersionLabelLimitExceeded":
        case "com.amazonaws.ssm#ParameterVersionLabelLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociationsCommand = deserializeAws_json1_1ListAssociationsCommand;
const deserializeAws_json1_1ListAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAssociationVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssociationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociationVersionsCommand = deserializeAws_json1_1ListAssociationVersionsCommand;
const deserializeAws_json1_1ListAssociationVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCommandInvocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCommandInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCommandInvocationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCommandInvocationsCommand = deserializeAws_json1_1ListCommandInvocationsCommand;
const deserializeAws_json1_1ListCommandInvocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            response = {
                ...(await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCommandsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCommandsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCommandsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCommandsCommand = deserializeAws_json1_1ListCommandsCommand;
const deserializeAws_json1_1ListCommandsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            response = {
                ...(await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListComplianceItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceItemsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListComplianceItemsCommand = deserializeAws_json1_1ListComplianceItemsCommand;
const deserializeAws_json1_1ListComplianceItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListComplianceSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceSummariesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListComplianceSummariesCommand = deserializeAws_json1_1ListComplianceSummariesCommand;
const deserializeAws_json1_1ListComplianceSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDocumentMetadataHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDocumentMetadataHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentMetadataHistoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDocumentMetadataHistoryCommand = deserializeAws_json1_1ListDocumentMetadataHistoryCommand;
const deserializeAws_json1_1ListDocumentMetadataHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDocumentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDocumentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDocumentsCommand = deserializeAws_json1_1ListDocumentsCommand;
const deserializeAws_json1_1ListDocumentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDocumentVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDocumentVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDocumentVersionsCommand = deserializeAws_json1_1ListDocumentVersionsCommand;
const deserializeAws_json1_1ListDocumentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListInventoryEntriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInventoryEntriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInventoryEntriesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInventoryEntriesCommand = deserializeAws_json1_1ListInventoryEntriesCommand;
const deserializeAws_json1_1ListInventoryEntriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOpsItemEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOpsItemEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOpsItemEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOpsItemEventsCommand = deserializeAws_json1_1ListOpsItemEventsCommand;
const deserializeAws_json1_1ListOpsItemEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOpsItemRelatedItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOpsItemRelatedItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOpsItemRelatedItemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOpsItemRelatedItemsCommand = deserializeAws_json1_1ListOpsItemRelatedItemsCommand;
const deserializeAws_json1_1ListOpsItemRelatedItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOpsMetadataCommand = deserializeAws_json1_1ListOpsMetadataCommand;
const deserializeAws_json1_1ListOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListResourceComplianceSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceComplianceSummariesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceComplianceSummariesCommand = deserializeAws_json1_1ListResourceComplianceSummariesCommand;
const deserializeAws_json1_1ListResourceComplianceSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            response = {
                ...(await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceDataSyncResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceDataSyncCommand = deserializeAws_json1_1ListResourceDataSyncCommand;
const deserializeAws_json1_1ListResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ModifyDocumentPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyDocumentPermissionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyDocumentPermissionCommand = deserializeAws_json1_1ModifyDocumentPermissionCommand;
const deserializeAws_json1_1ModifyDocumentPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentLimitExceeded":
        case "com.amazonaws.ssm#DocumentLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DocumentPermissionLimit":
        case "com.amazonaws.ssm#DocumentPermissionLimit":
            response = {
                ...(await deserializeAws_json1_1DocumentPermissionLimitResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPermissionType":
        case "com.amazonaws.ssm#InvalidPermissionType":
            response = {
                ...(await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutComplianceItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutComplianceItemsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutComplianceItemsCommand = deserializeAws_json1_1PutComplianceItemsCommand;
const deserializeAws_json1_1PutComplianceItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ComplianceTypeCountLimitExceededException":
        case "com.amazonaws.ssm#ComplianceTypeCountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidItemContentException":
        case "com.amazonaws.ssm#InvalidItemContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.ssm#ItemSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.ssm#TotalSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInventoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutInventoryCommand = deserializeAws_json1_1PutInventoryCommand;
const deserializeAws_json1_1PutInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomSchemaCountLimitExceededException":
        case "com.amazonaws.ssm#CustomSchemaCountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInventoryItemContextException":
        case "com.amazonaws.ssm#InvalidInventoryItemContextException":
            response = {
                ...(await deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidItemContentException":
        case "com.amazonaws.ssm#InvalidItemContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemContentMismatchException":
        case "com.amazonaws.ssm#ItemContentMismatchException":
            response = {
                ...(await deserializeAws_json1_1ItemContentMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.ssm#ItemSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubTypeCountLimitExceededException":
        case "com.amazonaws.ssm#SubTypeCountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.ssm#TotalSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedInventoryItemContextException":
        case "com.amazonaws.ssm#UnsupportedInventoryItemContextException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedInventorySchemaVersionException":
        case "com.amazonaws.ssm#UnsupportedInventorySchemaVersionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutParameterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutParameterCommand = deserializeAws_json1_1PutParameterCommand;
const deserializeAws_json1_1PutParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HierarchyLevelLimitExceededException":
        case "com.amazonaws.ssm#HierarchyLevelLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HierarchyTypeMismatchException":
        case "com.amazonaws.ssm#HierarchyTypeMismatchException":
            response = {
                ...(await deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatiblePolicyException":
        case "com.amazonaws.ssm#IncompatiblePolicyException":
            response = {
                ...(await deserializeAws_json1_1IncompatiblePolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAllowedPatternException":
        case "com.amazonaws.ssm#InvalidAllowedPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidAllowedPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPolicyAttributeException":
        case "com.amazonaws.ssm#InvalidPolicyAttributeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPolicyTypeException":
        case "com.amazonaws.ssm#InvalidPolicyTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPolicyTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterAlreadyExists":
        case "com.amazonaws.ssm#ParameterAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1ParameterAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterLimitExceeded":
        case "com.amazonaws.ssm#ParameterLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ParameterLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterMaxVersionLimitExceeded":
        case "com.amazonaws.ssm#ParameterMaxVersionLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterPatternMismatchException":
        case "com.amazonaws.ssm#ParameterPatternMismatchException":
            response = {
                ...(await deserializeAws_json1_1ParameterPatternMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PoliciesLimitExceededException":
        case "com.amazonaws.ssm#PoliciesLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1PoliciesLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedParameterType":
        case "com.amazonaws.ssm#UnsupportedParameterType":
            response = {
                ...(await deserializeAws_json1_1UnsupportedParameterTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterDefaultPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterDefaultPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterDefaultPatchBaselineCommand = deserializeAws_json1_1RegisterDefaultPatchBaselineCommand;
const deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand;
const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ssm#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand;
const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand;
const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FeatureNotAvailableException":
        case "com.amazonaws.ssm#FeatureNotAvailableException":
            response = {
                ...(await deserializeAws_json1_1FeatureNotAvailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ResetServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetServiceSettingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetServiceSettingCommand = deserializeAws_json1_1ResetServiceSettingCommand;
const deserializeAws_json1_1ResetServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ResumeSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResumeSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResumeSessionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResumeSessionCommand = deserializeAws_json1_1ResumeSessionCommand;
const deserializeAws_json1_1ResumeSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SendAutomationSignalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendAutomationSignalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendAutomationSignalResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendAutomationSignalCommand = deserializeAws_json1_1SendAutomationSignalCommand;
const deserializeAws_json1_1SendAutomationSignalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationStepNotFoundException":
        case "com.amazonaws.ssm#AutomationStepNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationStepNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutomationSignalException":
        case "com.amazonaws.ssm#InvalidAutomationSignalException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutomationSignalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SendCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendCommandResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendCommandCommand = deserializeAws_json1_1SendCommandCommand;
const deserializeAws_json1_1SendCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            response = {
                ...(await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNotificationConfig":
        case "com.amazonaws.ssm#InvalidNotificationConfig":
            response = {
                ...(await deserializeAws_json1_1InvalidNotificationConfigResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOutputFolder":
        case "com.amazonaws.ssm#InvalidOutputFolder":
            response = {
                ...(await deserializeAws_json1_1InvalidOutputFolderResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRole":
        case "com.amazonaws.ssm#InvalidRole":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            response = {
                ...(await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            response = {
                ...(await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartAssociationsOnceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAssociationsOnceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAssociationsOnceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAssociationsOnceCommand = deserializeAws_json1_1StartAssociationsOnceCommand;
const deserializeAws_json1_1StartAssociationsOnceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAssociation":
        case "com.amazonaws.ssm#InvalidAssociation":
            response = {
                ...(await deserializeAws_json1_1InvalidAssociationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAutomationExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAutomationExecutionCommand = deserializeAws_json1_1StartAutomationExecutionCommand;
const deserializeAws_json1_1StartAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationDefinitionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationDefinitionVersionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationExecutionLimitExceededException":
        case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutomationExecutionParametersException":
        case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartChangeRequestExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartChangeRequestExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartChangeRequestExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartChangeRequestExecutionCommand = deserializeAws_json1_1StartChangeRequestExecutionCommand;
const deserializeAws_json1_1StartChangeRequestExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationDefinitionNotApprovedException":
        case "com.amazonaws.ssm#AutomationDefinitionNotApprovedException":
            response = {
                ...(await deserializeAws_json1_1AutomationDefinitionNotApprovedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationDefinitionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationDefinitionVersionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationExecutionLimitExceededException":
        case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutomationExecutionParametersException":
        case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSessionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartSessionCommand = deserializeAws_json1_1StartSessionCommand;
const deserializeAws_json1_1StartSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotConnected":
        case "com.amazonaws.ssm#TargetNotConnected":
            response = {
                ...(await deserializeAws_json1_1TargetNotConnectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAutomationExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopAutomationExecutionCommand = deserializeAws_json1_1StopAutomationExecutionCommand;
const deserializeAws_json1_1StopAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutomationStatusUpdateException":
        case "com.amazonaws.ssm#InvalidAutomationStatusUpdateException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TerminateSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TerminateSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateSessionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TerminateSessionCommand = deserializeAws_json1_1TerminateSessionCommand;
const deserializeAws_json1_1TerminateSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UnlabelParameterVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnlabelParameterVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UnlabelParameterVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnlabelParameterVersionCommand = deserializeAws_json1_1UnlabelParameterVersionCommand;
const deserializeAws_json1_1UnlabelParameterVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            response = {
                ...(await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAssociationCommand = deserializeAws_json1_1UpdateAssociationCommand;
const deserializeAws_json1_1UpdateAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssociationVersionLimitExceeded":
        case "com.amazonaws.ssm#AssociationVersionLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1AssociationVersionLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAssociationVersion":
        case "com.amazonaws.ssm#InvalidAssociationVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            response = {
                ...(await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            response = {
                ...(await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUpdate":
        case "com.amazonaws.ssm#InvalidUpdate":
            response = {
                ...(await deserializeAws_json1_1InvalidUpdateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAssociationStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAssociationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAssociationStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAssociationStatusCommand = deserializeAws_json1_1UpdateAssociationStatusCommand;
const deserializeAws_json1_1UpdateAssociationStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            response = {
                ...(await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatusUnchanged":
        case "com.amazonaws.ssm#StatusUnchanged":
            response = {
                ...(await deserializeAws_json1_1StatusUnchangedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDocumentCommand = deserializeAws_json1_1UpdateDocumentCommand;
const deserializeAws_json1_1UpdateDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentVersionLimitExceeded":
        case "com.amazonaws.ssm#DocumentVersionLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DocumentVersionLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateDocumentContent":
        case "com.amazonaws.ssm#DuplicateDocumentContent":
            response = {
                ...(await deserializeAws_json1_1DuplicateDocumentContentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateDocumentVersionName":
        case "com.amazonaws.ssm#DuplicateDocumentVersionName":
            response = {
                ...(await deserializeAws_json1_1DuplicateDocumentVersionNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentContent":
        case "com.amazonaws.ssm#InvalidDocumentContent":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            response = {
                ...(await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDocumentDefaultVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDocumentDefaultVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDocumentDefaultVersionCommand = deserializeAws_json1_1UpdateDocumentDefaultVersionCommand;
const deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDocumentMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDocumentMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDocumentMetadataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDocumentMetadataCommand = deserializeAws_json1_1UpdateDocumentMetadataCommand;
const deserializeAws_json1_1UpdateDocumentMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            response = {
                ...(await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMaintenanceWindowCommand = deserializeAws_json1_1UpdateMaintenanceWindowCommand;
const deserializeAws_json1_1UpdateMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowTargetResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand = deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand;
const deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand = deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand;
const deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateManagedInstanceRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateManagedInstanceRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateManagedInstanceRoleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateManagedInstanceRoleCommand = deserializeAws_json1_1UpdateManagedInstanceRoleCommand;
const deserializeAws_json1_1UpdateManagedInstanceRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateOpsItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateOpsItemCommand = deserializeAws_json1_1UpdateOpsItemCommand;
const deserializeAws_json1_1UpdateOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateOpsMetadataCommand = deserializeAws_json1_1UpdateOpsMetadataCommand;
const deserializeAws_json1_1UpdateOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataKeyLimitExceededException":
        case "com.amazonaws.ssm#OpsMetadataKeyLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataKeyLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OpsMetadataTooManyUpdatesException":
        case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
            response = {
                ...(await deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdatePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePatchBaselineCommand = deserializeAws_json1_1UpdatePatchBaselineCommand;
const deserializeAws_json1_1UpdatePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceDataSyncResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResourceDataSyncCommand = deserializeAws_json1_1UpdateResourceDataSyncCommand;
const deserializeAws_json1_1UpdateResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncConflictException":
        case "com.amazonaws.ssm#ResourceDataSyncConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceSettingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServiceSettingCommand = deserializeAws_json1_1UpdateServiceSettingCommand;
const deserializeAws_json1_1UpdateServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            response = {
                ...(await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociatedInstancesResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedInstances(body, context);
    const contents = {
        name: "AssociatedInstances",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociationAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationAlreadyExists(body, context);
    const contents = {
        name: "AssociationAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociationDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationDoesNotExist(body, context);
    const contents = {
        name: "AssociationDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociationExecutionDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationExecutionDoesNotExist(body, context);
    const contents = {
        name: "AssociationExecutionDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationLimitExceeded(body, context);
    const contents = {
        name: "AssociationLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociationVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationVersionLimitExceeded(body, context);
    const contents = {
        name: "AssociationVersionLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionNotApprovedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationDefinitionNotApprovedException(body, context);
    const contents = {
        name: "AutomationDefinitionNotApprovedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationDefinitionNotFoundException(body, context);
    const contents = {
        name: "AutomationDefinitionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationDefinitionVersionNotFoundException(body, context);
    const contents = {
        name: "AutomationDefinitionVersionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationExecutionLimitExceededException(body, context);
    const contents = {
        name: "AutomationExecutionLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationExecutionNotFoundException(body, context);
    const contents = {
        name: "AutomationExecutionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AutomationStepNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationStepNotFoundException(body, context);
    const contents = {
        name: "AutomationStepNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ComplianceTypeCountLimitExceededException(body, context);
    const contents = {
        name: "ComplianceTypeCountLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomSchemaCountLimitExceededException(body, context);
    const contents = {
        name: "CustomSchemaCountLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DocumentAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentAlreadyExists(body, context);
    const contents = {
        name: "DocumentAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DocumentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentLimitExceeded(body, context);
    const contents = {
        name: "DocumentLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DocumentPermissionLimitResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentPermissionLimit(body, context);
    const contents = {
        name: "DocumentPermissionLimit",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DocumentVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentVersionLimitExceeded(body, context);
    const contents = {
        name: "DocumentVersionLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DoesNotExistException(body, context);
    const contents = {
        name: "DoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentContentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateDocumentContent(body, context);
    const contents = {
        name: "DuplicateDocumentContent",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentVersionNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateDocumentVersionName(body, context);
    const contents = {
        name: "DuplicateDocumentVersionName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateInstanceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateInstanceId(body, context);
    const contents = {
        name: "DuplicateInstanceId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FeatureNotAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FeatureNotAvailableException(body, context);
    const contents = {
        name: "FeatureNotAvailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HierarchyLevelLimitExceededException(body, context);
    const contents = {
        name: "HierarchyLevelLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HierarchyTypeMismatchException(body, context);
    const contents = {
        name: "HierarchyTypeMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatch(body, context);
    const contents = {
        name: "IdempotentParameterMismatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncompatiblePolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatiblePolicyException(body, context);
    const contents = {
        name: "IncompatiblePolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidActivationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActivation(body, context);
    const contents = {
        name: "InvalidActivation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidActivationIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActivationId(body, context);
    const contents = {
        name: "InvalidActivationId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAggregatorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAggregatorException(body, context);
    const contents = {
        name: "InvalidAggregatorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAllowedPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAllowedPatternException(body, context);
    const contents = {
        name: "InvalidAllowedPatternException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAssociationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAssociation(body, context);
    const contents = {
        name: "InvalidAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAssociationVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAssociationVersion(body, context);
    const contents = {
        name: "InvalidAssociationVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationExecutionParametersException(body, context);
    const contents = {
        name: "InvalidAutomationExecutionParametersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAutomationSignalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationSignalException(body, context);
    const contents = {
        name: "InvalidAutomationSignalException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationStatusUpdateException(body, context);
    const contents = {
        name: "InvalidAutomationStatusUpdateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCommandIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommandId(body, context);
    const contents = {
        name: "InvalidCommandId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeleteInventoryParametersException(body, context);
    const contents = {
        name: "InvalidDeleteInventoryParametersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeletionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeletionIdException(body, context);
    const contents = {
        name: "InvalidDeletionIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocument(body, context);
    const contents = {
        name: "InvalidDocument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentContentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentContent(body, context);
    const contents = {
        name: "InvalidDocumentContent",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentOperation(body, context);
    const contents = {
        name: "InvalidDocumentOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentSchemaVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentSchemaVersion(body, context);
    const contents = {
        name: "InvalidDocumentSchemaVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentType(body, context);
    const contents = {
        name: "InvalidDocumentType",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDocumentVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentVersion(body, context);
    const contents = {
        name: "InvalidDocumentVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilterResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilter(body, context);
    const contents = {
        name: "InvalidFilter",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilterKeyResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterKey(body, context);
    const contents = {
        name: "InvalidFilterKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilterOptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterOption(body, context);
    const contents = {
        name: "InvalidFilterOption",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilterValueResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterValue(body, context);
    const contents = {
        name: "InvalidFilterValue",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInstanceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceId(body, context);
    const contents = {
        name: "InvalidInstanceId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceInformationFilterValue(body, context);
    const contents = {
        name: "InvalidInstanceInformationFilterValue",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInventoryGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryGroupException(body, context);
    const contents = {
        name: "InvalidInventoryGroupException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryItemContextException(body, context);
    const contents = {
        name: "InvalidInventoryItemContextException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInventoryRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryRequestException(body, context);
    const contents = {
        name: "InvalidInventoryRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidItemContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidItemContentException(body, context);
    const contents = {
        name: "InvalidItemContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidKeyIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyId(body, context);
    const contents = {
        name: "InvalidKeyId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextToken(body, context);
    const contents = {
        name: "InvalidNextToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNotificationConfigResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNotificationConfig(body, context);
    const contents = {
        name: "InvalidNotificationConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOptionException(body, context);
    const contents = {
        name: "InvalidOptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOutputFolderResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOutputFolder(body, context);
    const contents = {
        name: "InvalidOutputFolder",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOutputLocationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOutputLocation(body, context);
    const contents = {
        name: "InvalidOutputLocation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParametersResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameters(body, context);
    const contents = {
        name: "InvalidParameters",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPermissionTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPermissionType(body, context);
    const contents = {
        name: "InvalidPermissionType",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPluginNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPluginName(body, context);
    const contents = {
        name: "InvalidPluginName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyAttributeException(body, context);
    const contents = {
        name: "InvalidPolicyAttributeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPolicyTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyTypeException(body, context);
    const contents = {
        name: "InvalidPolicyTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceId(body, context);
    const contents = {
        name: "InvalidResourceId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceType(body, context);
    const contents = {
        name: "InvalidResourceType",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResultAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResultAttributeException(body, context);
    const contents = {
        name: "InvalidResultAttributeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRoleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRole(body, context);
    const contents = {
        name: "InvalidRole",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidScheduleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSchedule(body, context);
    const contents = {
        name: "InvalidSchedule",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTarget(body, context);
    const contents = {
        name: "InvalidTarget",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTypeNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTypeNameException(body, context);
    const contents = {
        name: "InvalidTypeNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidUpdateResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUpdate(body, context);
    const contents = {
        name: "InvalidUpdate",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvocationDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvocationDoesNotExist(body, context);
    const contents = {
        name: "InvocationDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ItemContentMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ItemContentMismatchException(body, context);
    const contents = {
        name: "ItemContentMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ItemSizeLimitExceededException(body, context);
    const contents = {
        name: "ItemSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxDocumentSizeExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxDocumentSizeExceeded(body, context);
    const contents = {
        name: "MaxDocumentSizeExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemAlreadyExistsException(body, context);
    const contents = {
        name: "OpsItemAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemInvalidParameterException(body, context);
    const contents = {
        name: "OpsItemInvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemLimitExceededException(body, context);
    const contents = {
        name: "OpsItemLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemNotFoundException(body, context);
    const contents = {
        name: "OpsItemNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsException(body, context);
    const contents = {
        name: "OpsItemRelatedItemAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundException(body, context);
    const contents = {
        name: "OpsItemRelatedItemAssociationNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataAlreadyExistsException(body, context);
    const contents = {
        name: "OpsMetadataAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataInvalidArgumentException(body, context);
    const contents = {
        name: "OpsMetadataInvalidArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataKeyLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataKeyLimitExceededException(body, context);
    const contents = {
        name: "OpsMetadataKeyLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataLimitExceededException(body, context);
    const contents = {
        name: "OpsMetadataLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataNotFoundException(body, context);
    const contents = {
        name: "OpsMetadataNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsMetadataTooManyUpdatesException(body, context);
    const contents = {
        name: "OpsMetadataTooManyUpdatesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterAlreadyExists(body, context);
    const contents = {
        name: "ParameterAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterLimitExceeded(body, context);
    const contents = {
        name: "ParameterLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterMaxVersionLimitExceeded(body, context);
    const contents = {
        name: "ParameterMaxVersionLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterNotFound(body, context);
    const contents = {
        name: "ParameterNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterPatternMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterPatternMismatchException(body, context);
    const contents = {
        name: "ParameterPatternMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterVersionLabelLimitExceeded(body, context);
    const contents = {
        name: "ParameterVersionLabelLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterVersionNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterVersionNotFound(body, context);
    const contents = {
        name: "ParameterVersionNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PoliciesLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PoliciesLimitExceededException(body, context);
    const contents = {
        name: "PoliciesLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceDataSyncAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncConflictException(body, context);
    const contents = {
        name: "ResourceDataSyncConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncCountExceededException(body, context);
    const contents = {
        name: "ResourceDataSyncCountExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException(body, context);
    const contents = {
        name: "ResourceDataSyncInvalidConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncNotFoundException(body, context);
    const contents = {
        name: "ResourceDataSyncNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = {
        name: "ResourceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceSettingNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceSettingNotFound(body, context);
    const contents = {
        name: "ServiceSettingNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1StatusUnchangedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StatusUnchanged(body, context);
    const contents = {
        name: "StatusUnchanged",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubTypeCountLimitExceededException(body, context);
    const contents = {
        name: "SubTypeCountLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetInUseException(body, context);
    const contents = {
        name: "TargetInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetNotConnectedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotConnected(body, context);
    const contents = {
        name: "TargetNotConnected",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsError(body, context);
    const contents = {
        name: "TooManyTagsError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyUpdatesResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyUpdates(body, context);
    const contents = {
        name: "TooManyUpdates",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TotalSizeLimitExceededException(body, context);
    const contents = {
        name: "TotalSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedCalendarExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedCalendarException(body, context);
    const contents = {
        name: "UnsupportedCalendarException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureRequiredException(body, context);
    const contents = {
        name: "UnsupportedFeatureRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedInventoryItemContextException(body, context);
    const contents = {
        name: "UnsupportedInventoryItemContextException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedInventorySchemaVersionException(body, context);
    const contents = {
        name: "UnsupportedInventorySchemaVersionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperatingSystemResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperatingSystem(body, context);
    const contents = {
        name: "UnsupportedOperatingSystem",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedParameterTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedParameterType(body, context);
    const contents = {
        name: "UnsupportedParameterType",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedPlatformTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedPlatformType(body, context);
    const contents = {
        name: "UnsupportedPlatformType",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AccountIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Accounts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1AssociateOpsItemRelatedItemRequest = (input, context) => {
    return {
        ...(input.AssociationType !== undefined &&
            input.AssociationType !== null && { AssociationType: input.AssociationType }),
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.ResourceUri !== undefined && input.ResourceUri !== null && { ResourceUri: input.ResourceUri }),
    };
};
const serializeAws_json1_1AssociationExecutionFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1AssociationExecutionFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AssociationExecutionFilter(entry, context);
    });
};
const serializeAws_json1_1AssociationExecutionTargetsFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1AssociationExecutionTargetsFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AssociationExecutionTargetsFilter(entry, context);
    });
};
const serializeAws_json1_1AssociationFilter = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1AssociationFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AssociationFilter(entry, context);
    });
};
const serializeAws_json1_1AssociationIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociationStatus = (input, context) => {
    return {
        ...(input.AdditionalInfo !== undefined &&
            input.AdditionalInfo !== null && { AdditionalInfo: input.AdditionalInfo }),
        ...(input.Date !== undefined && input.Date !== null && { Date: Math.round(input.Date.getTime() / 1000) }),
        ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1AttachmentsSource = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1AttachmentsSourceValues(input.Values, context) }),
    };
};
const serializeAws_json1_1AttachmentsSourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttachmentsSource(entry, context);
    });
};
const serializeAws_json1_1AttachmentsSourceValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AutomationExecutionFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && {
            Values: serializeAws_json1_1AutomationExecutionFilterValueList(input.Values, context),
        }),
    };
};
const serializeAws_json1_1AutomationExecutionFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AutomationExecutionFilter(entry, context);
    });
};
const serializeAws_json1_1AutomationExecutionFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AutomationParameterMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1AutomationParameterValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1AutomationParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BaselineOverride = (input, context) => {
    return {
        ...(input.ApprovalRules !== undefined &&
            input.ApprovalRules !== null && {
            ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
        }),
        ...(input.ApprovedPatches !== undefined &&
            input.ApprovedPatches !== null && {
            ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
        }),
        ...(input.ApprovedPatchesComplianceLevel !== undefined &&
            input.ApprovedPatchesComplianceLevel !== null && {
            ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
        }),
        ...(input.ApprovedPatchesEnableNonSecurity !== undefined &&
            input.ApprovedPatchesEnableNonSecurity !== null && {
            ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
        }),
        ...(input.GlobalFilters !== undefined &&
            input.GlobalFilters !== null && {
            GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
        }),
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
        ...(input.RejectedPatches !== undefined &&
            input.RejectedPatches !== null && {
            RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
        }),
        ...(input.RejectedPatchesAction !== undefined &&
            input.RejectedPatchesAction !== null && { RejectedPatchesAction: input.RejectedPatchesAction }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
    };
};
const serializeAws_json1_1CalendarNameOrARNList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CancelCommandRequest = (input, context) => {
    return {
        ...(input.CommandId !== undefined && input.CommandId !== null && { CommandId: input.CommandId }),
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
    };
};
const serializeAws_json1_1CancelMaintenanceWindowExecutionRequest = (input, context) => {
    return {
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1CloudWatchOutputConfig = (input, context) => {
    return {
        ...(input.CloudWatchLogGroupName !== undefined &&
            input.CloudWatchLogGroupName !== null && { CloudWatchLogGroupName: input.CloudWatchLogGroupName }),
        ...(input.CloudWatchOutputEnabled !== undefined &&
            input.CloudWatchOutputEnabled !== null && { CloudWatchOutputEnabled: input.CloudWatchOutputEnabled }),
    };
};
const serializeAws_json1_1CommandFilter = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1CommandFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CommandFilter(entry, context);
    });
};
const serializeAws_json1_1ComplianceExecutionSummary = (input, context) => {
    return {
        ...(input.ExecutionId !== undefined && input.ExecutionId !== null && { ExecutionId: input.ExecutionId }),
        ...(input.ExecutionTime !== undefined &&
            input.ExecutionTime !== null && { ExecutionTime: Math.round(input.ExecutionTime.getTime() / 1000) }),
        ...(input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType }),
    };
};
const serializeAws_json1_1ComplianceItemDetails = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1ComplianceItemEntry = (input, context) => {
    return {
        ...(input.Details !== undefined &&
            input.Details !== null && { Details: serializeAws_json1_1ComplianceItemDetails(input.Details, context) }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Severity !== undefined && input.Severity !== null && { Severity: input.Severity }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_json1_1ComplianceItemEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ComplianceItemEntry(entry, context);
    });
};
const serializeAws_json1_1ComplianceResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ComplianceResourceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ComplianceStringFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1ComplianceStringFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1ComplianceStringFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ComplianceStringFilter(entry, context);
    });
};
const serializeAws_json1_1ComplianceStringFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateActivationRequest = (input, context) => {
    return {
        ...(input.DefaultInstanceName !== undefined &&
            input.DefaultInstanceName !== null && { DefaultInstanceName: input.DefaultInstanceName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ExpirationDate !== undefined &&
            input.ExpirationDate !== null && { ExpirationDate: Math.round(input.ExpirationDate.getTime() / 1000) }),
        ...(input.IamRole !== undefined && input.IamRole !== null && { IamRole: input.IamRole }),
        ...(input.RegistrationLimit !== undefined &&
            input.RegistrationLimit !== null && { RegistrationLimit: input.RegistrationLimit }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateAssociationBatchRequest = (input, context) => {
    return {
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_json1_1CreateAssociationBatchRequestEntries(input.Entries, context),
        }),
    };
};
const serializeAws_json1_1CreateAssociationBatchRequestEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CreateAssociationBatchRequestEntry(entry, context);
    });
};
const serializeAws_json1_1CreateAssociationBatchRequestEntry = (input, context) => {
    return {
        ...(input.ApplyOnlyAtCronInterval !== undefined &&
            input.ApplyOnlyAtCronInterval !== null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
        ...(input.AssociationName !== undefined &&
            input.AssociationName !== null && { AssociationName: input.AssociationName }),
        ...(input.AutomationTargetParameterName !== undefined &&
            input.AutomationTargetParameterName !== null && {
            AutomationTargetParameterName: input.AutomationTargetParameterName,
        }),
        ...(input.CalendarNames !== undefined &&
            input.CalendarNames !== null && {
            CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
        }),
        ...(input.ComplianceSeverity !== undefined &&
            input.ComplianceSeverity !== null && { ComplianceSeverity: input.ComplianceSeverity }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
        }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
        ...(input.SyncCompliance !== undefined &&
            input.SyncCompliance !== null && { SyncCompliance: input.SyncCompliance }),
        ...(input.TargetLocations !== undefined &&
            input.TargetLocations !== null && {
            TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
        }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1CreateAssociationRequest = (input, context) => {
    return {
        ...(input.ApplyOnlyAtCronInterval !== undefined &&
            input.ApplyOnlyAtCronInterval !== null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
        ...(input.AssociationName !== undefined &&
            input.AssociationName !== null && { AssociationName: input.AssociationName }),
        ...(input.AutomationTargetParameterName !== undefined &&
            input.AutomationTargetParameterName !== null && {
            AutomationTargetParameterName: input.AutomationTargetParameterName,
        }),
        ...(input.CalendarNames !== undefined &&
            input.CalendarNames !== null && {
            CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
        }),
        ...(input.ComplianceSeverity !== undefined &&
            input.ComplianceSeverity !== null && { ComplianceSeverity: input.ComplianceSeverity }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
        }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
        ...(input.SyncCompliance !== undefined &&
            input.SyncCompliance !== null && { SyncCompliance: input.SyncCompliance }),
        ...(input.TargetLocations !== undefined &&
            input.TargetLocations !== null && {
            TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
        }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1CreateDocumentRequest = (input, context) => {
    return {
        ...(input.Attachments !== undefined &&
            input.Attachments !== null && {
            Attachments: serializeAws_json1_1AttachmentsSourceList(input.Attachments, context),
        }),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.DocumentFormat !== undefined &&
            input.DocumentFormat !== null && { DocumentFormat: input.DocumentFormat }),
        ...(input.DocumentType !== undefined && input.DocumentType !== null && { DocumentType: input.DocumentType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Requires !== undefined &&
            input.Requires !== null && { Requires: serializeAws_json1_1DocumentRequiresList(input.Requires, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType }),
        ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
    };
};
const serializeAws_json1_1CreateMaintenanceWindowRequest = (input, context) => {
    var _a;
    return {
        ...(input.AllowUnassociatedTargets !== undefined &&
            input.AllowUnassociatedTargets !== null && { AllowUnassociatedTargets: input.AllowUnassociatedTargets }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Cutoff !== undefined && input.Cutoff !== null && { Cutoff: input.Cutoff }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.ScheduleOffset !== undefined &&
            input.ScheduleOffset !== null && { ScheduleOffset: input.ScheduleOffset }),
        ...(input.ScheduleTimezone !== undefined &&
            input.ScheduleTimezone !== null && { ScheduleTimezone: input.ScheduleTimezone }),
        ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateOpsItemRequest = (input, context) => {
    return {
        ...(input.ActualEndTime !== undefined &&
            input.ActualEndTime !== null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
        ...(input.ActualStartTime !== undefined &&
            input.ActualStartTime !== null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
        ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Notifications !== undefined &&
            input.Notifications !== null && {
            Notifications: serializeAws_json1_1OpsItemNotifications(input.Notifications, context),
        }),
        ...(input.OperationalData !== undefined &&
            input.OperationalData !== null && {
            OperationalData: serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context),
        }),
        ...(input.OpsItemType !== undefined && input.OpsItemType !== null && { OpsItemType: input.OpsItemType }),
        ...(input.PlannedEndTime !== undefined &&
            input.PlannedEndTime !== null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
        ...(input.PlannedStartTime !== undefined &&
            input.PlannedStartTime !== null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RelatedOpsItems !== undefined &&
            input.RelatedOpsItems !== null && {
            RelatedOpsItems: serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context),
        }),
        ...(input.Severity !== undefined && input.Severity !== null && { Severity: input.Severity }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_json1_1CreateOpsMetadataRequest = (input, context) => {
    return {
        ...(input.Metadata !== undefined &&
            input.Metadata !== null && { Metadata: serializeAws_json1_1MetadataMap(input.Metadata, context) }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePatchBaselineRequest = (input, context) => {
    var _a;
    return {
        ...(input.ApprovalRules !== undefined &&
            input.ApprovalRules !== null && {
            ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
        }),
        ...(input.ApprovedPatches !== undefined &&
            input.ApprovedPatches !== null && {
            ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
        }),
        ...(input.ApprovedPatchesComplianceLevel !== undefined &&
            input.ApprovedPatchesComplianceLevel !== null && {
            ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
        }),
        ...(input.ApprovedPatchesEnableNonSecurity !== undefined &&
            input.ApprovedPatchesEnableNonSecurity !== null && {
            ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
        }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GlobalFilters !== undefined &&
            input.GlobalFilters !== null && {
            GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
        ...(input.RejectedPatches !== undefined &&
            input.RejectedPatches !== null && {
            RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
        }),
        ...(input.RejectedPatchesAction !== undefined &&
            input.RejectedPatchesAction !== null && { RejectedPatchesAction: input.RejectedPatchesAction }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateResourceDataSyncRequest = (input, context) => {
    return {
        ...(input.S3Destination !== undefined &&
            input.S3Destination !== null && {
            S3Destination: serializeAws_json1_1ResourceDataSyncS3Destination(input.S3Destination, context),
        }),
        ...(input.SyncName !== undefined && input.SyncName !== null && { SyncName: input.SyncName }),
        ...(input.SyncSource !== undefined &&
            input.SyncSource !== null && {
            SyncSource: serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context),
        }),
        ...(input.SyncType !== undefined && input.SyncType !== null && { SyncType: input.SyncType }),
    };
};
const serializeAws_json1_1DeleteActivationRequest = (input, context) => {
    return {
        ...(input.ActivationId !== undefined && input.ActivationId !== null && { ActivationId: input.ActivationId }),
    };
};
const serializeAws_json1_1DeleteAssociationRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteDocumentRequest = (input, context) => {
    return {
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
    };
};
const serializeAws_json1_1DeleteInventoryRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.SchemaDeleteOption !== undefined &&
            input.SchemaDeleteOption !== null && { SchemaDeleteOption: input.SchemaDeleteOption }),
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1DeleteMaintenanceWindowRequest = (input, context) => {
    return {
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1DeleteOpsMetadataRequest = (input, context) => {
    return {
        ...(input.OpsMetadataArn !== undefined &&
            input.OpsMetadataArn !== null && { OpsMetadataArn: input.OpsMetadataArn }),
    };
};
const serializeAws_json1_1DeleteParameterRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteParametersRequest = (input, context) => {
    return {
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1ParameterNameList(input.Names, context) }),
    };
};
const serializeAws_json1_1DeletePatchBaselineRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
    };
};
const serializeAws_json1_1DeleteResourceDataSyncRequest = (input, context) => {
    return {
        ...(input.SyncName !== undefined && input.SyncName !== null && { SyncName: input.SyncName }),
        ...(input.SyncType !== undefined && input.SyncType !== null && { SyncType: input.SyncType }),
    };
};
const serializeAws_json1_1DeregisterManagedInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
        ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    };
};
const serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest = (input, context) => {
    return {
        ...(input.Safe !== undefined && input.Safe !== null && { Safe: input.Safe }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
        ...(input.WindowTargetId !== undefined &&
            input.WindowTargetId !== null && { WindowTargetId: input.WindowTargetId }),
    };
};
const serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest = (input, context) => {
    return {
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
        ...(input.WindowTaskId !== undefined && input.WindowTaskId !== null && { WindowTaskId: input.WindowTaskId }),
    };
};
const serializeAws_json1_1DescribeActivationsFilter = (input, context) => {
    return {
        ...(input.FilterKey !== undefined && input.FilterKey !== null && { FilterKey: input.FilterKey }),
        ...(input.FilterValues !== undefined &&
            input.FilterValues !== null && { FilterValues: serializeAws_json1_1StringList(input.FilterValues, context) }),
    };
};
const serializeAws_json1_1DescribeActivationsFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DescribeActivationsFilter(entry, context);
    });
};
const serializeAws_json1_1DescribeActivationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1DescribeActivationsFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAssociationExecutionsRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1AssociationExecutionFilterList(input.Filters, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAssociationExecutionTargetsRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.ExecutionId !== undefined && input.ExecutionId !== null && { ExecutionId: input.ExecutionId }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1AssociationExecutionTargetsFilterList(input.Filters, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAssociationRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.AssociationVersion !== undefined &&
            input.AssociationVersion !== null && { AssociationVersion: input.AssociationVersion }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeAutomationExecutionsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1AutomationExecutionFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAutomationStepExecutionsRequest = (input, context) => {
    return {
        ...(input.AutomationExecutionId !== undefined &&
            input.AutomationExecutionId !== null && { AutomationExecutionId: input.AutomationExecutionId }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1StepExecutionFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ReverseOrder !== undefined && input.ReverseOrder !== null && { ReverseOrder: input.ReverseOrder }),
    };
};
const serializeAws_json1_1DescribeAvailablePatchesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeDocumentPermissionRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PermissionType !== undefined &&
            input.PermissionType !== null && { PermissionType: input.PermissionType }),
    };
};
const serializeAws_json1_1DescribeDocumentRequest = (input, context) => {
    return {
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
    };
};
const serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeInstanceAssociationsStatusRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeInstanceInformationRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1InstanceInformationStringFilterList(input.Filters, context),
        }),
        ...(input.InstanceInformationFilterList !== undefined &&
            input.InstanceInformationFilterList !== null && {
            InstanceInformationFilterList: serializeAws_json1_1InstanceInformationFilterList(input.InstanceInformationFilterList, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeInstancePatchesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1InstancePatchStateFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    };
};
const serializeAws_json1_1DescribeInstancePatchStatesRequest = (input, context) => {
    return {
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeInventoryDeletionsRequest = (input, context) => {
    return {
        ...(input.DeletionId !== undefined && input.DeletionId !== null && { DeletionId: input.DeletionId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }),
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1DescribeMaintenanceWindowTasksRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1DescribeOpsItemsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OpsItemFilters !== undefined &&
            input.OpsItemFilters !== null && {
            OpsItemFilters: serializeAws_json1_1OpsItemFilters(input.OpsItemFilters, context),
        }),
    };
};
const serializeAws_json1_1DescribeParametersRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ParametersFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParameterFilters !== undefined &&
            input.ParameterFilters !== null && {
            ParameterFilters: serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context),
        }),
    };
};
const serializeAws_json1_1DescribePatchBaselinesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribePatchGroupsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribePatchGroupStateRequest = (input, context) => {
    return {
        ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    };
};
const serializeAws_json1_1DescribePatchPropertiesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
        ...(input.PatchSet !== undefined && input.PatchSet !== null && { PatchSet: input.PatchSet }),
        ...(input.Property !== undefined && input.Property !== null && { Property: input.Property }),
    };
};
const serializeAws_json1_1DescribeSessionsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1SessionFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_json1_1DisassociateOpsItemRelatedItemRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
    };
};
const serializeAws_json1_1DocumentFilter = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1DocumentFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentFilter(entry, context);
    });
};
const serializeAws_json1_1DocumentKeyValuesFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1DocumentKeyValuesFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1DocumentKeyValuesFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentKeyValuesFilter(entry, context);
    });
};
const serializeAws_json1_1DocumentKeyValuesFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DocumentRequires = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1DocumentRequiresList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentRequires(entry, context);
    });
};
const serializeAws_json1_1DocumentReviewCommentList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentReviewCommentSource(entry, context);
    });
};
const serializeAws_json1_1DocumentReviewCommentSource = (input, context) => {
    return {
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DocumentReviews = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Comment !== undefined &&
            input.Comment !== null && { Comment: serializeAws_json1_1DocumentReviewCommentList(input.Comment, context) }),
    };
};
const serializeAws_json1_1GetAutomationExecutionRequest = (input, context) => {
    return {
        ...(input.AutomationExecutionId !== undefined &&
            input.AutomationExecutionId !== null && { AutomationExecutionId: input.AutomationExecutionId }),
    };
};
const serializeAws_json1_1GetCalendarStateRequest = (input, context) => {
    return {
        ...(input.AtTime !== undefined && input.AtTime !== null && { AtTime: input.AtTime }),
        ...(input.CalendarNames !== undefined &&
            input.CalendarNames !== null && {
            CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
        }),
    };
};
const serializeAws_json1_1GetCommandInvocationRequest = (input, context) => {
    return {
        ...(input.CommandId !== undefined && input.CommandId !== null && { CommandId: input.CommandId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.PluginName !== undefined && input.PluginName !== null && { PluginName: input.PluginName }),
    };
};
const serializeAws_json1_1GetConnectionStatusRequest = (input, context) => {
    return {
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_json1_1GetDefaultPatchBaselineRequest = (input, context) => {
    return {
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
    };
};
const serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest = (input, context) => {
    return {
        ...(input.BaselineOverride !== undefined &&
            input.BaselineOverride !== null && {
            BaselineOverride: serializeAws_json1_1BaselineOverride(input.BaselineOverride, context),
        }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    };
};
const serializeAws_json1_1GetDocumentRequest = (input, context) => {
    return {
        ...(input.DocumentFormat !== undefined &&
            input.DocumentFormat !== null && { DocumentFormat: input.DocumentFormat }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
    };
};
const serializeAws_json1_1GetInventoryRequest = (input, context) => {
    return {
        ...(input.Aggregators !== undefined &&
            input.Aggregators !== null && {
            Aggregators: serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context),
        }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResultAttributes !== undefined &&
            input.ResultAttributes !== null && {
            ResultAttributes: serializeAws_json1_1ResultAttributeList(input.ResultAttributes, context),
        }),
    };
};
const serializeAws_json1_1GetInventorySchemaRequest = (input, context) => {
    return {
        ...(input.Aggregator !== undefined && input.Aggregator !== null && { Aggregator: input.Aggregator }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SubType !== undefined && input.SubType !== null && { SubType: input.SubType }),
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1GetMaintenanceWindowExecutionRequest = (input, context) => {
    return {
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest = (input, context) => {
    return {
        ...(input.InvocationId !== undefined && input.InvocationId !== null && { InvocationId: input.InvocationId }),
        ...(input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }),
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest = (input, context) => {
    return {
        ...(input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }),
        ...(input.WindowExecutionId !== undefined &&
            input.WindowExecutionId !== null && { WindowExecutionId: input.WindowExecutionId }),
    };
};
const serializeAws_json1_1GetMaintenanceWindowRequest = (input, context) => {
    return {
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1GetMaintenanceWindowTaskRequest = (input, context) => {
    return {
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
        ...(input.WindowTaskId !== undefined && input.WindowTaskId !== null && { WindowTaskId: input.WindowTaskId }),
    };
};
const serializeAws_json1_1GetOpsItemRequest = (input, context) => {
    return {
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
    };
};
const serializeAws_json1_1GetOpsMetadataRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OpsMetadataArn !== undefined &&
            input.OpsMetadataArn !== null && { OpsMetadataArn: input.OpsMetadataArn }),
    };
};
const serializeAws_json1_1GetOpsSummaryRequest = (input, context) => {
    return {
        ...(input.Aggregators !== undefined &&
            input.Aggregators !== null && { Aggregators: serializeAws_json1_1OpsAggregatorList(input.Aggregators, context) }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OpsFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResultAttributes !== undefined &&
            input.ResultAttributes !== null && {
            ResultAttributes: serializeAws_json1_1OpsResultAttributeList(input.ResultAttributes, context),
        }),
        ...(input.SyncName !== undefined && input.SyncName !== null && { SyncName: input.SyncName }),
    };
};
const serializeAws_json1_1GetParameterHistoryRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WithDecryption !== undefined &&
            input.WithDecryption !== null && { WithDecryption: input.WithDecryption }),
    };
};
const serializeAws_json1_1GetParameterRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.WithDecryption !== undefined &&
            input.WithDecryption !== null && { WithDecryption: input.WithDecryption }),
    };
};
const serializeAws_json1_1GetParametersByPathRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParameterFilters !== undefined &&
            input.ParameterFilters !== null && {
            ParameterFilters: serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context),
        }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.Recursive !== undefined && input.Recursive !== null && { Recursive: input.Recursive }),
        ...(input.WithDecryption !== undefined &&
            input.WithDecryption !== null && { WithDecryption: input.WithDecryption }),
    };
};
const serializeAws_json1_1GetParametersRequest = (input, context) => {
    return {
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1ParameterNameList(input.Names, context) }),
        ...(input.WithDecryption !== undefined &&
            input.WithDecryption !== null && { WithDecryption: input.WithDecryption }),
    };
};
const serializeAws_json1_1GetPatchBaselineForPatchGroupRequest = (input, context) => {
    return {
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
        ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    };
};
const serializeAws_json1_1GetPatchBaselineRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
    };
};
const serializeAws_json1_1GetServiceSettingRequest = (input, context) => {
    return {
        ...(input.SettingId !== undefined && input.SettingId !== null && { SettingId: input.SettingId }),
    };
};
const serializeAws_json1_1InstanceAssociationOutputLocation = (input, context) => {
    return {
        ...(input.S3Location !== undefined &&
            input.S3Location !== null && { S3Location: serializeAws_json1_1S3OutputLocation(input.S3Location, context) }),
    };
};
const serializeAws_json1_1InstanceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceInformationFilter = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.valueSet !== undefined &&
            input.valueSet !== null && {
            valueSet: serializeAws_json1_1InstanceInformationFilterValueSet(input.valueSet, context),
        }),
    };
};
const serializeAws_json1_1InstanceInformationFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceInformationFilter(entry, context);
    });
};
const serializeAws_json1_1InstanceInformationFilterValueSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceInformationStringFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && {
            Values: serializeAws_json1_1InstanceInformationFilterValueSet(input.Values, context),
        }),
    };
};
const serializeAws_json1_1InstanceInformationStringFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceInformationStringFilter(entry, context);
    });
};
const serializeAws_json1_1InstancePatchStateFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1InstancePatchStateFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1InstancePatchStateFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstancePatchStateFilter(entry, context);
    });
};
const serializeAws_json1_1InstancePatchStateFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InventoryAggregator = (input, context) => {
    return {
        ...(input.Aggregators !== undefined &&
            input.Aggregators !== null && {
            Aggregators: serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context),
        }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.Groups !== undefined &&
            input.Groups !== null && { Groups: serializeAws_json1_1InventoryGroupList(input.Groups, context) }),
    };
};
const serializeAws_json1_1InventoryAggregatorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryAggregator(entry, context);
    });
};
const serializeAws_json1_1InventoryFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1InventoryFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1InventoryFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryFilter(entry, context);
    });
};
const serializeAws_json1_1InventoryFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InventoryGroup = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1InventoryGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryGroup(entry, context);
    });
};
const serializeAws_json1_1InventoryItem = (input, context) => {
    return {
        ...(input.CaptureTime !== undefined && input.CaptureTime !== null && { CaptureTime: input.CaptureTime }),
        ...(input.Content !== undefined &&
            input.Content !== null && { Content: serializeAws_json1_1InventoryItemEntryList(input.Content, context) }),
        ...(input.ContentHash !== undefined && input.ContentHash !== null && { ContentHash: input.ContentHash }),
        ...(input.Context !== undefined &&
            input.Context !== null && { Context: serializeAws_json1_1InventoryItemContentContext(input.Context, context) }),
        ...(input.SchemaVersion !== undefined && input.SchemaVersion !== null && { SchemaVersion: input.SchemaVersion }),
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1InventoryItemContentContext = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1InventoryItemEntry = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1InventoryItemEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryItemEntry(entry, context);
    });
};
const serializeAws_json1_1InventoryItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryItem(entry, context);
    });
};
const serializeAws_json1_1KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1LabelParameterVersionRequest = (input, context) => {
    return {
        ...(input.Labels !== undefined &&
            input.Labels !== null && { Labels: serializeAws_json1_1ParameterLabelList(input.Labels, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParameterVersion !== undefined &&
            input.ParameterVersion !== null && { ParameterVersion: input.ParameterVersion }),
    };
};
const serializeAws_json1_1ListAssociationsRequest = (input, context) => {
    return {
        ...(input.AssociationFilterList !== undefined &&
            input.AssociationFilterList !== null && {
            AssociationFilterList: serializeAws_json1_1AssociationFilterList(input.AssociationFilterList, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListAssociationVersionsRequest = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCommandInvocationsRequest = (input, context) => {
    return {
        ...(input.CommandId !== undefined && input.CommandId !== null && { CommandId: input.CommandId }),
        ...(input.Details !== undefined && input.Details !== null && { Details: input.Details }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1CommandFilterList(input.Filters, context) }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCommandsRequest = (input, context) => {
    return {
        ...(input.CommandId !== undefined && input.CommandId !== null && { CommandId: input.CommandId }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1CommandFilterList(input.Filters, context) }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListComplianceItemsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceIds !== undefined &&
            input.ResourceIds !== null && {
            ResourceIds: serializeAws_json1_1ComplianceResourceIdList(input.ResourceIds, context),
        }),
        ...(input.ResourceTypes !== undefined &&
            input.ResourceTypes !== null && {
            ResourceTypes: serializeAws_json1_1ComplianceResourceTypeList(input.ResourceTypes, context),
        }),
    };
};
const serializeAws_json1_1ListComplianceSummariesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDocumentMetadataHistoryRequest = (input, context) => {
    return {
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDocumentsRequest = (input, context) => {
    return {
        ...(input.DocumentFilterList !== undefined &&
            input.DocumentFilterList !== null && {
            DocumentFilterList: serializeAws_json1_1DocumentFilterList(input.DocumentFilterList, context),
        }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1DocumentKeyValuesFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDocumentVersionsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListInventoryEntriesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1ListOpsItemEventsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OpsItemEventFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListOpsItemRelatedItemsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OpsItemRelatedItemsFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
    };
};
const serializeAws_json1_1ListOpsMetadataRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OpsMetadataFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResourceComplianceSummariesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResourceDataSyncRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SyncType !== undefined && input.SyncType !== null && { SyncType: input.SyncType }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1LoggingInfo = (input, context) => {
    return {
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
        ...(input.S3Region !== undefined && input.S3Region !== null && { S3Region: input.S3Region }),
    };
};
const serializeAws_json1_1MaintenanceWindowAutomationParameters = (input, context) => {
    return {
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
        }),
    };
};
const serializeAws_json1_1MaintenanceWindowFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1MaintenanceWindowFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1MaintenanceWindowFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MaintenanceWindowFilter(entry, context);
    });
};
const serializeAws_json1_1MaintenanceWindowFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MaintenanceWindowLambdaParameters = (input, context) => {
    return {
        ...(input.ClientContext !== undefined && input.ClientContext !== null && { ClientContext: input.ClientContext }),
        ...(input.Payload !== undefined && input.Payload !== null && { Payload: context.base64Encoder(input.Payload) }),
        ...(input.Qualifier !== undefined && input.Qualifier !== null && { Qualifier: input.Qualifier }),
    };
};
const serializeAws_json1_1MaintenanceWindowRunCommandParameters = (input, context) => {
    return {
        ...(input.CloudWatchOutputConfig !== undefined &&
            input.CloudWatchOutputConfig !== null && {
            CloudWatchOutputConfig: serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
        }),
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.DocumentHash !== undefined && input.DocumentHash !== null && { DocumentHash: input.DocumentHash }),
        ...(input.DocumentHashType !== undefined &&
            input.DocumentHashType !== null && { DocumentHashType: input.DocumentHashType }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.NotificationConfig !== undefined &&
            input.NotificationConfig !== null && {
            NotificationConfig: serializeAws_json1_1NotificationConfig(input.NotificationConfig, context),
        }),
        ...(input.OutputS3BucketName !== undefined &&
            input.OutputS3BucketName !== null && { OutputS3BucketName: input.OutputS3BucketName }),
        ...(input.OutputS3KeyPrefix !== undefined &&
            input.OutputS3KeyPrefix !== null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.TimeoutSeconds !== undefined &&
            input.TimeoutSeconds !== null && { TimeoutSeconds: input.TimeoutSeconds }),
    };
};
const serializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (input, context) => {
    return {
        ...(input.Input !== undefined && input.Input !== null && { Input: input.Input }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (input, context) => {
    return {
        ...(input.Automation !== undefined &&
            input.Automation !== null && {
            Automation: serializeAws_json1_1MaintenanceWindowAutomationParameters(input.Automation, context),
        }),
        ...(input.Lambda !== undefined &&
            input.Lambda !== null && {
            Lambda: serializeAws_json1_1MaintenanceWindowLambdaParameters(input.Lambda, context),
        }),
        ...(input.RunCommand !== undefined &&
            input.RunCommand !== null && {
            RunCommand: serializeAws_json1_1MaintenanceWindowRunCommandParameters(input.RunCommand, context),
        }),
        ...(input.StepFunctions !== undefined &&
            input.StepFunctions !== null && {
            StepFunctions: serializeAws_json1_1MaintenanceWindowStepFunctionsParameters(input.StepFunctions, context),
        }),
    };
};
const serializeAws_json1_1MaintenanceWindowTaskParameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(value, context),
        };
    }, {});
};
const serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (input, context) => {
    return {
        ...(input.Values !== undefined &&
            input.Values !== null && {
            Values: serializeAws_json1_1MaintenanceWindowTaskParameterValueList(input.Values, context),
        }),
    };
};
const serializeAws_json1_1MaintenanceWindowTaskParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MetadataKeysToDeleteList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MetadataMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1MetadataValue(value, context),
        };
    }, {});
};
const serializeAws_json1_1MetadataValue = (input, context) => {
    return {
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ModifyDocumentPermissionRequest = (input, context) => {
    return {
        ...(input.AccountIdsToAdd !== undefined &&
            input.AccountIdsToAdd !== null && {
            AccountIdsToAdd: serializeAws_json1_1AccountIdList(input.AccountIdsToAdd, context),
        }),
        ...(input.AccountIdsToRemove !== undefined &&
            input.AccountIdsToRemove !== null && {
            AccountIdsToRemove: serializeAws_json1_1AccountIdList(input.AccountIdsToRemove, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PermissionType !== undefined &&
            input.PermissionType !== null && { PermissionType: input.PermissionType }),
        ...(input.SharedDocumentVersion !== undefined &&
            input.SharedDocumentVersion !== null && { SharedDocumentVersion: input.SharedDocumentVersion }),
    };
};
const serializeAws_json1_1NotificationConfig = (input, context) => {
    return {
        ...(input.NotificationArn !== undefined &&
            input.NotificationArn !== null && { NotificationArn: input.NotificationArn }),
        ...(input.NotificationEvents !== undefined &&
            input.NotificationEvents !== null && {
            NotificationEvents: serializeAws_json1_1NotificationEventList(input.NotificationEvents, context),
        }),
        ...(input.NotificationType !== undefined &&
            input.NotificationType !== null && { NotificationType: input.NotificationType }),
    };
};
const serializeAws_json1_1NotificationEventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsAggregator = (input, context) => {
    return {
        ...(input.AggregatorType !== undefined &&
            input.AggregatorType !== null && { AggregatorType: input.AggregatorType }),
        ...(input.Aggregators !== undefined &&
            input.Aggregators !== null && { Aggregators: serializeAws_json1_1OpsAggregatorList(input.Aggregators, context) }),
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OpsFilterList(input.Filters, context) }),
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsAggregatorValueMap(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsAggregatorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsAggregator(entry, context);
    });
};
const serializeAws_json1_1OpsAggregatorValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1OpsFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsFilter(entry, context);
    });
};
const serializeAws_json1_1OpsFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsItemDataValue = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1OpsItemEventFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsItemEventFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsItemEventFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsItemEventFilter(entry, context);
    });
};
const serializeAws_json1_1OpsItemEventFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsItemFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsItemFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsItemFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsItemFilter(entry, context);
    });
};
const serializeAws_json1_1OpsItemFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsItemNotification = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_json1_1OpsItemNotifications = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsItemNotification(entry, context);
    });
};
const serializeAws_json1_1OpsItemOperationalData = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1OpsItemDataValue(value, context),
        };
    }, {});
};
const serializeAws_json1_1OpsItemOpsDataKeysList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsItemRelatedItemsFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsItemRelatedItemsFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsItemRelatedItemsFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsItemRelatedItemsFilter(entry, context);
    });
};
const serializeAws_json1_1OpsItemRelatedItemsFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsMetadataFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1OpsMetadataFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1OpsMetadataFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsMetadataFilter(entry, context);
    });
};
const serializeAws_json1_1OpsMetadataFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpsResultAttribute = (input, context) => {
    return {
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1OpsResultAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OpsResultAttribute(entry, context);
    });
};
const serializeAws_json1_1ParameterLabelList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ParameterNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Parameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ParameterValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1ParametersFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1ParametersFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1ParametersFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParametersFilter(entry, context);
    });
};
const serializeAws_json1_1ParametersFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ParameterStringFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Option !== undefined && input.Option !== null && { Option: input.Option }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1ParameterStringFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1ParameterStringFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterStringFilter(entry, context);
    });
};
const serializeAws_json1_1ParameterStringFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PatchFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1PatchFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1PatchFilterGroup = (input, context) => {
    return {
        ...(input.PatchFilters !== undefined &&
            input.PatchFilters !== null && {
            PatchFilters: serializeAws_json1_1PatchFilterList(input.PatchFilters, context),
        }),
    };
};
const serializeAws_json1_1PatchFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PatchFilter(entry, context);
    });
};
const serializeAws_json1_1PatchFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PatchIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PatchOrchestratorFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1PatchOrchestratorFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1PatchOrchestratorFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PatchOrchestratorFilter(entry, context);
    });
};
const serializeAws_json1_1PatchOrchestratorFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PatchRule = (input, context) => {
    return {
        ...(input.ApproveAfterDays !== undefined &&
            input.ApproveAfterDays !== null && { ApproveAfterDays: input.ApproveAfterDays }),
        ...(input.ApproveUntilDate !== undefined &&
            input.ApproveUntilDate !== null && { ApproveUntilDate: input.ApproveUntilDate }),
        ...(input.ComplianceLevel !== undefined &&
            input.ComplianceLevel !== null && { ComplianceLevel: input.ComplianceLevel }),
        ...(input.EnableNonSecurity !== undefined &&
            input.EnableNonSecurity !== null && { EnableNonSecurity: input.EnableNonSecurity }),
        ...(input.PatchFilterGroup !== undefined &&
            input.PatchFilterGroup !== null && {
            PatchFilterGroup: serializeAws_json1_1PatchFilterGroup(input.PatchFilterGroup, context),
        }),
    };
};
const serializeAws_json1_1PatchRuleGroup = (input, context) => {
    return {
        ...(input.PatchRules !== undefined &&
            input.PatchRules !== null && { PatchRules: serializeAws_json1_1PatchRuleList(input.PatchRules, context) }),
    };
};
const serializeAws_json1_1PatchRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PatchRule(entry, context);
    });
};
const serializeAws_json1_1PatchSource = (input, context) => {
    return {
        ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Products !== undefined &&
            input.Products !== null && { Products: serializeAws_json1_1PatchSourceProductList(input.Products, context) }),
    };
};
const serializeAws_json1_1PatchSourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PatchSource(entry, context);
    });
};
const serializeAws_json1_1PatchSourceProductList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutComplianceItemsRequest = (input, context) => {
    return {
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ExecutionSummary !== undefined &&
            input.ExecutionSummary !== null && {
            ExecutionSummary: serializeAws_json1_1ComplianceExecutionSummary(input.ExecutionSummary, context),
        }),
        ...(input.ItemContentHash !== undefined &&
            input.ItemContentHash !== null && { ItemContentHash: input.ItemContentHash }),
        ...(input.Items !== undefined &&
            input.Items !== null && { Items: serializeAws_json1_1ComplianceItemEntryList(input.Items, context) }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.UploadType !== undefined && input.UploadType !== null && { UploadType: input.UploadType }),
    };
};
const serializeAws_json1_1PutInventoryRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Items !== undefined &&
            input.Items !== null && { Items: serializeAws_json1_1InventoryItemList(input.Items, context) }),
    };
};
const serializeAws_json1_1PutParameterRequest = (input, context) => {
    return {
        ...(input.AllowedPattern !== undefined &&
            input.AllowedPattern !== null && { AllowedPattern: input.AllowedPattern }),
        ...(input.DataType !== undefined && input.DataType !== null && { DataType: input.DataType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Overwrite !== undefined && input.Overwrite !== null && { Overwrite: input.Overwrite }),
        ...(input.Policies !== undefined && input.Policies !== null && { Policies: input.Policies }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1Regions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RegisterDefaultPatchBaselineRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
    };
};
const serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest = (input, context) => {
    return {
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
        ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    };
};
const serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OwnerInformation !== undefined &&
            input.OwnerInformation !== null && { OwnerInformation: input.OwnerInformation }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.CutoffBehavior !== undefined &&
            input.CutoffBehavior !== null && { CutoffBehavior: input.CutoffBehavior }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LoggingInfo !== undefined &&
            input.LoggingInfo !== null && { LoggingInfo: serializeAws_json1_1LoggingInfo(input.LoggingInfo, context) }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
        ...(input.TaskInvocationParameters !== undefined &&
            input.TaskInvocationParameters !== null && {
            TaskInvocationParameters: serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context),
        }),
        ...(input.TaskParameters !== undefined &&
            input.TaskParameters !== null && {
            TaskParameters: serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context),
        }),
        ...(input.TaskType !== undefined && input.TaskType !== null && { TaskType: input.TaskType }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1RelatedOpsItem = (input, context) => {
    return {
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
    };
};
const serializeAws_json1_1RelatedOpsItems = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RelatedOpsItem(entry, context);
    });
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1ResetServiceSettingRequest = (input, context) => {
    return {
        ...(input.SettingId !== undefined && input.SettingId !== null && { SettingId: input.SettingId }),
    };
};
const serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (input, context) => {
    return {
        ...(input.OrganizationSourceType !== undefined &&
            input.OrganizationSourceType !== null && { OrganizationSourceType: input.OrganizationSourceType }),
        ...(input.OrganizationalUnits !== undefined &&
            input.OrganizationalUnits !== null && {
            OrganizationalUnits: serializeAws_json1_1ResourceDataSyncOrganizationalUnitList(input.OrganizationalUnits, context),
        }),
    };
};
const serializeAws_json1_1ResourceDataSyncDestinationDataSharing = (input, context) => {
    return {
        ...(input.DestinationDataSharingType !== undefined &&
            input.DestinationDataSharingType !== null && { DestinationDataSharingType: input.DestinationDataSharingType }),
    };
};
const serializeAws_json1_1ResourceDataSyncOrganizationalUnit = (input, context) => {
    return {
        ...(input.OrganizationalUnitId !== undefined &&
            input.OrganizationalUnitId !== null && { OrganizationalUnitId: input.OrganizationalUnitId }),
    };
};
const serializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context);
    });
};
const serializeAws_json1_1ResourceDataSyncS3Destination = (input, context) => {
    return {
        ...(input.AWSKMSKeyARN !== undefined && input.AWSKMSKeyARN !== null && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.DestinationDataSharing !== undefined &&
            input.DestinationDataSharing !== null && {
            DestinationDataSharing: serializeAws_json1_1ResourceDataSyncDestinationDataSharing(input.DestinationDataSharing, context),
        }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
        ...(input.SyncFormat !== undefined && input.SyncFormat !== null && { SyncFormat: input.SyncFormat }),
    };
};
const serializeAws_json1_1ResourceDataSyncSource = (input, context) => {
    return {
        ...(input.AwsOrganizationsSource !== undefined &&
            input.AwsOrganizationsSource !== null && {
            AwsOrganizationsSource: serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(input.AwsOrganizationsSource, context),
        }),
        ...(input.EnableAllOpsDataSources !== undefined &&
            input.EnableAllOpsDataSources !== null && { EnableAllOpsDataSources: input.EnableAllOpsDataSources }),
        ...(input.IncludeFutureRegions !== undefined &&
            input.IncludeFutureRegions !== null && { IncludeFutureRegions: input.IncludeFutureRegions }),
        ...(input.SourceRegions !== undefined &&
            input.SourceRegions !== null && {
            SourceRegions: serializeAws_json1_1ResourceDataSyncSourceRegionList(input.SourceRegions, context),
        }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    };
};
const serializeAws_json1_1ResourceDataSyncSourceRegionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResultAttribute = (input, context) => {
    return {
        ...(input.TypeName !== undefined && input.TypeName !== null && { TypeName: input.TypeName }),
    };
};
const serializeAws_json1_1ResultAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResultAttribute(entry, context);
    });
};
const serializeAws_json1_1ResumeSessionRequest = (input, context) => {
    return {
        ...(input.SessionId !== undefined && input.SessionId !== null && { SessionId: input.SessionId }),
    };
};
const serializeAws_json1_1Runbook = (input, context) => {
    return {
        ...(input.DocumentName !== undefined && input.DocumentName !== null && { DocumentName: input.DocumentName }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
        }),
        ...(input.TargetLocations !== undefined &&
            input.TargetLocations !== null && {
            TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
        }),
        ...(input.TargetParameterName !== undefined &&
            input.TargetParameterName !== null && { TargetParameterName: input.TargetParameterName }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1Runbooks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Runbook(entry, context);
    });
};
const serializeAws_json1_1S3OutputLocation = (input, context) => {
    return {
        ...(input.OutputS3BucketName !== undefined &&
            input.OutputS3BucketName !== null && { OutputS3BucketName: input.OutputS3BucketName }),
        ...(input.OutputS3KeyPrefix !== undefined &&
            input.OutputS3KeyPrefix !== null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
        ...(input.OutputS3Region !== undefined &&
            input.OutputS3Region !== null && { OutputS3Region: input.OutputS3Region }),
    };
};
const serializeAws_json1_1SendAutomationSignalRequest = (input, context) => {
    return {
        ...(input.AutomationExecutionId !== undefined &&
            input.AutomationExecutionId !== null && { AutomationExecutionId: input.AutomationExecutionId }),
        ...(input.Payload !== undefined &&
            input.Payload !== null && { Payload: serializeAws_json1_1AutomationParameterMap(input.Payload, context) }),
        ...(input.SignalType !== undefined && input.SignalType !== null && { SignalType: input.SignalType }),
    };
};
const serializeAws_json1_1SendCommandRequest = (input, context) => {
    return {
        ...(input.CloudWatchOutputConfig !== undefined &&
            input.CloudWatchOutputConfig !== null && {
            CloudWatchOutputConfig: serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
        }),
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.DocumentHash !== undefined && input.DocumentHash !== null && { DocumentHash: input.DocumentHash }),
        ...(input.DocumentHashType !== undefined &&
            input.DocumentHashType !== null && { DocumentHashType: input.DocumentHashType }),
        ...(input.DocumentName !== undefined && input.DocumentName !== null && { DocumentName: input.DocumentName }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.NotificationConfig !== undefined &&
            input.NotificationConfig !== null && {
            NotificationConfig: serializeAws_json1_1NotificationConfig(input.NotificationConfig, context),
        }),
        ...(input.OutputS3BucketName !== undefined &&
            input.OutputS3BucketName !== null && { OutputS3BucketName: input.OutputS3BucketName }),
        ...(input.OutputS3KeyPrefix !== undefined &&
            input.OutputS3KeyPrefix !== null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
        ...(input.OutputS3Region !== undefined &&
            input.OutputS3Region !== null && { OutputS3Region: input.OutputS3Region }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.TimeoutSeconds !== undefined &&
            input.TimeoutSeconds !== null && { TimeoutSeconds: input.TimeoutSeconds }),
    };
};
const serializeAws_json1_1SessionFilter = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1SessionFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SessionFilter(entry, context);
    });
};
const serializeAws_json1_1SessionManagerParameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1SessionManagerParameterValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1SessionManagerParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartAssociationsOnceRequest = (input, context) => {
    return {
        ...(input.AssociationIds !== undefined &&
            input.AssociationIds !== null && {
            AssociationIds: serializeAws_json1_1AssociationIdList(input.AssociationIds, context),
        }),
    };
};
const serializeAws_json1_1StartAutomationExecutionRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DocumentName !== undefined && input.DocumentName !== null && { DocumentName: input.DocumentName }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.TargetLocations !== undefined &&
            input.TargetLocations !== null && {
            TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
        }),
        ...(input.TargetMaps !== undefined &&
            input.TargetMaps !== null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
        ...(input.TargetParameterName !== undefined &&
            input.TargetParameterName !== null && { TargetParameterName: input.TargetParameterName }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1StartChangeRequestExecutionRequest = (input, context) => {
    return {
        ...(input.AutoApprove !== undefined && input.AutoApprove !== null && { AutoApprove: input.AutoApprove }),
        ...(input.ChangeDetails !== undefined && input.ChangeDetails !== null && { ChangeDetails: input.ChangeDetails }),
        ...(input.ChangeRequestName !== undefined &&
            input.ChangeRequestName !== null && { ChangeRequestName: input.ChangeRequestName }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DocumentName !== undefined && input.DocumentName !== null && { DocumentName: input.DocumentName }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
        }),
        ...(input.Runbooks !== undefined &&
            input.Runbooks !== null && { Runbooks: serializeAws_json1_1Runbooks(input.Runbooks, context) }),
        ...(input.ScheduledEndTime !== undefined &&
            input.ScheduledEndTime !== null && { ScheduledEndTime: Math.round(input.ScheduledEndTime.getTime() / 1000) }),
        ...(input.ScheduledTime !== undefined &&
            input.ScheduledTime !== null && { ScheduledTime: Math.round(input.ScheduledTime.getTime() / 1000) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1StartSessionRequest = (input, context) => {
    return {
        ...(input.DocumentName !== undefined && input.DocumentName !== null && { DocumentName: input.DocumentName }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1SessionManagerParameters(input.Parameters, context),
        }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_json1_1StepExecutionFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1StepExecutionFilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1StepExecutionFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StepExecutionFilter(entry, context);
    });
};
const serializeAws_json1_1StepExecutionFilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StopAutomationExecutionRequest = (input, context) => {
    return {
        ...(input.AutomationExecutionId !== undefined &&
            input.AutomationExecutionId !== null && { AutomationExecutionId: input.AutomationExecutionId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1Target = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1TargetValues(input.Values, context) }),
    };
};
const serializeAws_json1_1TargetLocation = (input, context) => {
    return {
        ...(input.Accounts !== undefined &&
            input.Accounts !== null && { Accounts: serializeAws_json1_1Accounts(input.Accounts, context) }),
        ...(input.ExecutionRoleName !== undefined &&
            input.ExecutionRoleName !== null && { ExecutionRoleName: input.ExecutionRoleName }),
        ...(input.Regions !== undefined &&
            input.Regions !== null && { Regions: serializeAws_json1_1Regions(input.Regions, context) }),
        ...(input.TargetLocationMaxConcurrency !== undefined &&
            input.TargetLocationMaxConcurrency !== null && {
            TargetLocationMaxConcurrency: input.TargetLocationMaxConcurrency,
        }),
        ...(input.TargetLocationMaxErrors !== undefined &&
            input.TargetLocationMaxErrors !== null && { TargetLocationMaxErrors: input.TargetLocationMaxErrors }),
    };
};
const serializeAws_json1_1TargetLocations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetLocation(entry, context);
    });
};
const serializeAws_json1_1TargetMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1TargetMapValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1TargetMaps = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetMap(entry, context);
    });
};
const serializeAws_json1_1TargetMapValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Targets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Target(entry, context);
    });
};
const serializeAws_json1_1TargetValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TerminateSessionRequest = (input, context) => {
    return {
        ...(input.SessionId !== undefined && input.SessionId !== null && { SessionId: input.SessionId }),
    };
};
const serializeAws_json1_1UnlabelParameterVersionRequest = (input, context) => {
    return {
        ...(input.Labels !== undefined &&
            input.Labels !== null && { Labels: serializeAws_json1_1ParameterLabelList(input.Labels, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParameterVersion !== undefined &&
            input.ParameterVersion !== null && { ParameterVersion: input.ParameterVersion }),
    };
};
const serializeAws_json1_1UpdateAssociationRequest = (input, context) => {
    return {
        ...(input.ApplyOnlyAtCronInterval !== undefined &&
            input.ApplyOnlyAtCronInterval !== null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.AssociationName !== undefined &&
            input.AssociationName !== null && { AssociationName: input.AssociationName }),
        ...(input.AssociationVersion !== undefined &&
            input.AssociationVersion !== null && { AssociationVersion: input.AssociationVersion }),
        ...(input.AutomationTargetParameterName !== undefined &&
            input.AutomationTargetParameterName !== null && {
            AutomationTargetParameterName: input.AutomationTargetParameterName,
        }),
        ...(input.CalendarNames !== undefined &&
            input.CalendarNames !== null && {
            CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
        }),
        ...(input.ComplianceSeverity !== undefined &&
            input.ComplianceSeverity !== null && { ComplianceSeverity: input.ComplianceSeverity }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
        }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
        ...(input.SyncCompliance !== undefined &&
            input.SyncCompliance !== null && { SyncCompliance: input.SyncCompliance }),
        ...(input.TargetLocations !== undefined &&
            input.TargetLocations !== null && {
            TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
        }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    };
};
const serializeAws_json1_1UpdateAssociationStatusRequest = (input, context) => {
    return {
        ...(input.AssociationStatus !== undefined &&
            input.AssociationStatus !== null && {
            AssociationStatus: serializeAws_json1_1AssociationStatus(input.AssociationStatus, context),
        }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateDocumentDefaultVersionRequest = (input, context) => {
    return {
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateDocumentMetadataRequest = (input, context) => {
    return {
        ...(input.DocumentReviews !== undefined &&
            input.DocumentReviews !== null && {
            DocumentReviews: serializeAws_json1_1DocumentReviews(input.DocumentReviews, context),
        }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateDocumentRequest = (input, context) => {
    return {
        ...(input.Attachments !== undefined &&
            input.Attachments !== null && {
            Attachments: serializeAws_json1_1AttachmentsSourceList(input.Attachments, context),
        }),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.DocumentFormat !== undefined &&
            input.DocumentFormat !== null && { DocumentFormat: input.DocumentFormat }),
        ...(input.DocumentVersion !== undefined &&
            input.DocumentVersion !== null && { DocumentVersion: input.DocumentVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType }),
        ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
    };
};
const serializeAws_json1_1UpdateMaintenanceWindowRequest = (input, context) => {
    return {
        ...(input.AllowUnassociatedTargets !== undefined &&
            input.AllowUnassociatedTargets !== null && { AllowUnassociatedTargets: input.AllowUnassociatedTargets }),
        ...(input.Cutoff !== undefined && input.Cutoff !== null && { Cutoff: input.Cutoff }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Replace !== undefined && input.Replace !== null && { Replace: input.Replace }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.ScheduleOffset !== undefined &&
            input.ScheduleOffset !== null && { ScheduleOffset: input.ScheduleOffset }),
        ...(input.ScheduleTimezone !== undefined &&
            input.ScheduleTimezone !== null && { ScheduleTimezone: input.ScheduleTimezone }),
        ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
    };
};
const serializeAws_json1_1UpdateMaintenanceWindowTargetRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OwnerInformation !== undefined &&
            input.OwnerInformation !== null && { OwnerInformation: input.OwnerInformation }),
        ...(input.Replace !== undefined && input.Replace !== null && { Replace: input.Replace }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
        ...(input.WindowTargetId !== undefined &&
            input.WindowTargetId !== null && { WindowTargetId: input.WindowTargetId }),
    };
};
const serializeAws_json1_1UpdateMaintenanceWindowTaskRequest = (input, context) => {
    return {
        ...(input.CutoffBehavior !== undefined &&
            input.CutoffBehavior !== null && { CutoffBehavior: input.CutoffBehavior }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LoggingInfo !== undefined &&
            input.LoggingInfo !== null && { LoggingInfo: serializeAws_json1_1LoggingInfo(input.LoggingInfo, context) }),
        ...(input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
        ...(input.MaxErrors !== undefined && input.MaxErrors !== null && { MaxErrors: input.MaxErrors }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.Replace !== undefined && input.Replace !== null && { Replace: input.Replace }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
        ...(input.TaskInvocationParameters !== undefined &&
            input.TaskInvocationParameters !== null && {
            TaskInvocationParameters: serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context),
        }),
        ...(input.TaskParameters !== undefined &&
            input.TaskParameters !== null && {
            TaskParameters: serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context),
        }),
        ...(input.WindowId !== undefined && input.WindowId !== null && { WindowId: input.WindowId }),
        ...(input.WindowTaskId !== undefined && input.WindowTaskId !== null && { WindowTaskId: input.WindowTaskId }),
    };
};
const serializeAws_json1_1UpdateManagedInstanceRoleRequest = (input, context) => {
    return {
        ...(input.IamRole !== undefined && input.IamRole !== null && { IamRole: input.IamRole }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1UpdateOpsItemRequest = (input, context) => {
    return {
        ...(input.ActualEndTime !== undefined &&
            input.ActualEndTime !== null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
        ...(input.ActualStartTime !== undefined &&
            input.ActualStartTime !== null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
        ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Notifications !== undefined &&
            input.Notifications !== null && {
            Notifications: serializeAws_json1_1OpsItemNotifications(input.Notifications, context),
        }),
        ...(input.OperationalData !== undefined &&
            input.OperationalData !== null && {
            OperationalData: serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context),
        }),
        ...(input.OperationalDataToDelete !== undefined &&
            input.OperationalDataToDelete !== null && {
            OperationalDataToDelete: serializeAws_json1_1OpsItemOpsDataKeysList(input.OperationalDataToDelete, context),
        }),
        ...(input.OpsItemId !== undefined && input.OpsItemId !== null && { OpsItemId: input.OpsItemId }),
        ...(input.PlannedEndTime !== undefined &&
            input.PlannedEndTime !== null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
        ...(input.PlannedStartTime !== undefined &&
            input.PlannedStartTime !== null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RelatedOpsItems !== undefined &&
            input.RelatedOpsItems !== null && {
            RelatedOpsItems: serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context),
        }),
        ...(input.Severity !== undefined && input.Severity !== null && { Severity: input.Severity }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_json1_1UpdateOpsMetadataRequest = (input, context) => {
    return {
        ...(input.KeysToDelete !== undefined &&
            input.KeysToDelete !== null && {
            KeysToDelete: serializeAws_json1_1MetadataKeysToDeleteList(input.KeysToDelete, context),
        }),
        ...(input.MetadataToUpdate !== undefined &&
            input.MetadataToUpdate !== null && {
            MetadataToUpdate: serializeAws_json1_1MetadataMap(input.MetadataToUpdate, context),
        }),
        ...(input.OpsMetadataArn !== undefined &&
            input.OpsMetadataArn !== null && { OpsMetadataArn: input.OpsMetadataArn }),
    };
};
const serializeAws_json1_1UpdatePatchBaselineRequest = (input, context) => {
    return {
        ...(input.ApprovalRules !== undefined &&
            input.ApprovalRules !== null && {
            ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
        }),
        ...(input.ApprovedPatches !== undefined &&
            input.ApprovedPatches !== null && {
            ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
        }),
        ...(input.ApprovedPatchesComplianceLevel !== undefined &&
            input.ApprovedPatchesComplianceLevel !== null && {
            ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
        }),
        ...(input.ApprovedPatchesEnableNonSecurity !== undefined &&
            input.ApprovedPatchesEnableNonSecurity !== null && {
            ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
        }),
        ...(input.BaselineId !== undefined && input.BaselineId !== null && { BaselineId: input.BaselineId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GlobalFilters !== undefined &&
            input.GlobalFilters !== null && {
            GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RejectedPatches !== undefined &&
            input.RejectedPatches !== null && {
            RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
        }),
        ...(input.RejectedPatchesAction !== undefined &&
            input.RejectedPatchesAction !== null && { RejectedPatchesAction: input.RejectedPatchesAction }),
        ...(input.Replace !== undefined && input.Replace !== null && { Replace: input.Replace }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
    };
};
const serializeAws_json1_1UpdateResourceDataSyncRequest = (input, context) => {
    return {
        ...(input.SyncName !== undefined && input.SyncName !== null && { SyncName: input.SyncName }),
        ...(input.SyncSource !== undefined &&
            input.SyncSource !== null && {
            SyncSource: serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context),
        }),
        ...(input.SyncType !== undefined && input.SyncType !== null && { SyncType: input.SyncType }),
    };
};
const serializeAws_json1_1UpdateServiceSettingRequest = (input, context) => {
    return {
        ...(input.SettingId !== undefined && input.SettingId !== null && { SettingId: input.SettingId }),
        ...(input.SettingValue !== undefined && input.SettingValue !== null && { SettingValue: input.SettingValue }),
    };
};
const deserializeAws_json1_1AccountIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1Accounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1AccountSharingInfo = (output, context) => {
    return {
        AccountId: smithy_client_1.expectString(output.AccountId),
        SharedDocumentVersion: smithy_client_1.expectString(output.SharedDocumentVersion),
    };
};
const deserializeAws_json1_1AccountSharingInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountSharingInfo(entry, context);
    });
};
const deserializeAws_json1_1Activation = (output, context) => {
    return {
        ActivationId: smithy_client_1.expectString(output.ActivationId),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DefaultInstanceName: smithy_client_1.expectString(output.DefaultInstanceName),
        Description: smithy_client_1.expectString(output.Description),
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExpirationDate)))
            : undefined,
        Expired: smithy_client_1.expectBoolean(output.Expired),
        IamRole: smithy_client_1.expectString(output.IamRole),
        RegistrationLimit: smithy_client_1.expectInt32(output.RegistrationLimit),
        RegistrationsCount: smithy_client_1.expectInt32(output.RegistrationsCount),
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActivationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Activation(entry, context);
    });
};
const deserializeAws_json1_1AddTagsToResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AssociatedInstances = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateOpsItemRelatedItemResponse = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
    };
};
const deserializeAws_json1_1Association = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationName: smithy_client_1.expectString(output.AssociationName),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        LastExecutionDate: output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastExecutionDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        Overview: output.Overview !== undefined && output.Overview !== null
            ? deserializeAws_json1_1AssociationOverview(output.Overview, context)
            : undefined,
        ScheduleExpression: smithy_client_1.expectString(output.ScheduleExpression),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociationAlreadyExists = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociationDescription = (output, context) => {
    return {
        ApplyOnlyAtCronInterval: smithy_client_1.expectBoolean(output.ApplyOnlyAtCronInterval),
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationName: smithy_client_1.expectString(output.AssociationName),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        AutomationTargetParameterName: smithy_client_1.expectString(output.AutomationTargetParameterName),
        CalendarNames: output.CalendarNames !== undefined && output.CalendarNames !== null
            ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
            : undefined,
        ComplianceSeverity: smithy_client_1.expectString(output.ComplianceSeverity),
        Date: output.Date !== undefined && output.Date !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.Date)))
            : undefined,
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        LastExecutionDate: output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastExecutionDate)))
            : undefined,
        LastSuccessfulExecutionDate: output.LastSuccessfulExecutionDate !== undefined && output.LastSuccessfulExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastSuccessfulExecutionDate)))
            : undefined,
        LastUpdateAssociationDate: output.LastUpdateAssociationDate !== undefined && output.LastUpdateAssociationDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastUpdateAssociationDate)))
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        OutputLocation: output.OutputLocation !== undefined && output.OutputLocation !== null
            ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
            : undefined,
        Overview: output.Overview !== undefined && output.Overview !== null
            ? deserializeAws_json1_1AssociationOverview(output.Overview, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
        ScheduleExpression: smithy_client_1.expectString(output.ScheduleExpression),
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1AssociationStatus(output.Status, context)
            : undefined,
        SyncCompliance: smithy_client_1.expectString(output.SyncCompliance),
        TargetLocations: output.TargetLocations !== undefined && output.TargetLocations !== null
            ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociationDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssociationDescription(entry, context);
    });
};
const deserializeAws_json1_1AssociationDoesNotExist = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AssociationExecution = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedTime)))
            : undefined,
        DetailedStatus: smithy_client_1.expectString(output.DetailedStatus),
        ExecutionId: smithy_client_1.expectString(output.ExecutionId),
        LastExecutionDate: output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastExecutionDate)))
            : undefined,
        ResourceCountByStatus: smithy_client_1.expectString(output.ResourceCountByStatus),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1AssociationExecutionDoesNotExist = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AssociationExecutionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssociationExecution(entry, context);
    });
};
const deserializeAws_json1_1AssociationExecutionTarget = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        DetailedStatus: smithy_client_1.expectString(output.DetailedStatus),
        ExecutionId: smithy_client_1.expectString(output.ExecutionId),
        LastExecutionDate: output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastExecutionDate)))
            : undefined,
        OutputSource: output.OutputSource !== undefined && output.OutputSource !== null
            ? deserializeAws_json1_1OutputSource(output.OutputSource, context)
            : undefined,
        ResourceId: smithy_client_1.expectString(output.ResourceId),
        ResourceType: smithy_client_1.expectString(output.ResourceType),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1AssociationExecutionTargetsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssociationExecutionTarget(entry, context);
    });
};
const deserializeAws_json1_1AssociationLimitExceeded = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Association(entry, context);
    });
};
const deserializeAws_json1_1AssociationOverview = (output, context) => {
    return {
        AssociationStatusAggregatedCount: output.AssociationStatusAggregatedCount !== undefined && output.AssociationStatusAggregatedCount !== null
            ? deserializeAws_json1_1AssociationStatusAggregatedCount(output.AssociationStatusAggregatedCount, context)
            : undefined,
        DetailedStatus: smithy_client_1.expectString(output.DetailedStatus),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1AssociationStatus = (output, context) => {
    return {
        AdditionalInfo: smithy_client_1.expectString(output.AdditionalInfo),
        Date: output.Date !== undefined && output.Date !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.Date)))
            : undefined,
        Message: smithy_client_1.expectString(output.Message),
        Name: smithy_client_1.expectString(output.Name),
    };
};
const deserializeAws_json1_1AssociationStatusAggregatedCount = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectInt32(value),
        };
    }, {});
};
const deserializeAws_json1_1AssociationVersionInfo = (output, context) => {
    return {
        ApplyOnlyAtCronInterval: smithy_client_1.expectBoolean(output.ApplyOnlyAtCronInterval),
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationName: smithy_client_1.expectString(output.AssociationName),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        CalendarNames: output.CalendarNames !== undefined && output.CalendarNames !== null
            ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
            : undefined,
        ComplianceSeverity: smithy_client_1.expectString(output.ComplianceSeverity),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        OutputLocation: output.OutputLocation !== undefined && output.OutputLocation !== null
            ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
        ScheduleExpression: smithy_client_1.expectString(output.ScheduleExpression),
        SyncCompliance: smithy_client_1.expectString(output.SyncCompliance),
        TargetLocations: output.TargetLocations !== undefined && output.TargetLocations !== null
            ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociationVersionLimitExceeded = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AssociationVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssociationVersionInfo(entry, context);
    });
};
const deserializeAws_json1_1AttachmentContent = (output, context) => {
    return {
        Hash: smithy_client_1.expectString(output.Hash),
        HashType: smithy_client_1.expectString(output.HashType),
        Name: smithy_client_1.expectString(output.Name),
        Size: smithy_client_1.expectLong(output.Size),
        Url: smithy_client_1.expectString(output.Url),
    };
};
const deserializeAws_json1_1AttachmentContentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttachmentContent(entry, context);
    });
};
const deserializeAws_json1_1AttachmentInformation = (output, context) => {
    return {
        Name: smithy_client_1.expectString(output.Name),
    };
};
const deserializeAws_json1_1AttachmentInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttachmentInformation(entry, context);
    });
};
const deserializeAws_json1_1AutomationDefinitionNotApprovedException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AutomationDefinitionNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AutomationDefinitionVersionNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AutomationExecution = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AutomationExecutionId: smithy_client_1.expectString(output.AutomationExecutionId),
        AutomationExecutionStatus: smithy_client_1.expectString(output.AutomationExecutionStatus),
        AutomationSubtype: smithy_client_1.expectString(output.AutomationSubtype),
        ChangeRequestName: smithy_client_1.expectString(output.ChangeRequestName),
        CurrentAction: smithy_client_1.expectString(output.CurrentAction),
        CurrentStepName: smithy_client_1.expectString(output.CurrentStepName),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        ExecutedBy: smithy_client_1.expectString(output.ExecutedBy),
        ExecutionEndTime: output.ExecutionEndTime !== undefined && output.ExecutionEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionEndTime)))
            : undefined,
        ExecutionStartTime: output.ExecutionStartTime !== undefined && output.ExecutionStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionStartTime)))
            : undefined,
        FailureMessage: smithy_client_1.expectString(output.FailureMessage),
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Mode: smithy_client_1.expectString(output.Mode),
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context)
            : undefined,
        ParentAutomationExecutionId: smithy_client_1.expectString(output.ParentAutomationExecutionId),
        ProgressCounters: output.ProgressCounters !== undefined && output.ProgressCounters !== null
            ? deserializeAws_json1_1ProgressCounters(output.ProgressCounters, context)
            : undefined,
        ResolvedTargets: output.ResolvedTargets !== undefined && output.ResolvedTargets !== null
            ? deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context)
            : undefined,
        Runbooks: output.Runbooks !== undefined && output.Runbooks !== null
            ? deserializeAws_json1_1Runbooks(output.Runbooks, context)
            : undefined,
        ScheduledTime: output.ScheduledTime !== undefined && output.ScheduledTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ScheduledTime)))
            : undefined,
        StepExecutions: output.StepExecutions !== undefined && output.StepExecutions !== null
            ? deserializeAws_json1_1StepExecutionList(output.StepExecutions, context)
            : undefined,
        StepExecutionsTruncated: smithy_client_1.expectBoolean(output.StepExecutionsTruncated),
        Target: smithy_client_1.expectString(output.Target),
        TargetLocations: output.TargetLocations !== undefined && output.TargetLocations !== null
            ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
            : undefined,
        TargetMaps: output.TargetMaps !== undefined && output.TargetMaps !== null
            ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context)
            : undefined,
        TargetParameterName: smithy_client_1.expectString(output.TargetParameterName),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1AutomationExecutionLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AutomationExecutionMetadata = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AutomationExecutionId: smithy_client_1.expectString(output.AutomationExecutionId),
        AutomationExecutionStatus: smithy_client_1.expectString(output.AutomationExecutionStatus),
        AutomationSubtype: smithy_client_1.expectString(output.AutomationSubtype),
        AutomationType: smithy_client_1.expectString(output.AutomationType),
        ChangeRequestName: smithy_client_1.expectString(output.ChangeRequestName),
        CurrentAction: smithy_client_1.expectString(output.CurrentAction),
        CurrentStepName: smithy_client_1.expectString(output.CurrentStepName),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        ExecutedBy: smithy_client_1.expectString(output.ExecutedBy),
        ExecutionEndTime: output.ExecutionEndTime !== undefined && output.ExecutionEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionEndTime)))
            : undefined,
        ExecutionStartTime: output.ExecutionStartTime !== undefined && output.ExecutionStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionStartTime)))
            : undefined,
        FailureMessage: smithy_client_1.expectString(output.FailureMessage),
        LogFile: smithy_client_1.expectString(output.LogFile),
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Mode: smithy_client_1.expectString(output.Mode),
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context)
            : undefined,
        ParentAutomationExecutionId: smithy_client_1.expectString(output.ParentAutomationExecutionId),
        ResolvedTargets: output.ResolvedTargets !== undefined && output.ResolvedTargets !== null
            ? deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context)
            : undefined,
        Runbooks: output.Runbooks !== undefined && output.Runbooks !== null
            ? deserializeAws_json1_1Runbooks(output.Runbooks, context)
            : undefined,
        ScheduledTime: output.ScheduledTime !== undefined && output.ScheduledTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ScheduledTime)))
            : undefined,
        Target: smithy_client_1.expectString(output.Target),
        TargetMaps: output.TargetMaps !== undefined && output.TargetMaps !== null
            ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context)
            : undefined,
        TargetParameterName: smithy_client_1.expectString(output.TargetParameterName),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1AutomationExecutionMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutomationExecutionMetadata(entry, context);
    });
};
const deserializeAws_json1_1AutomationExecutionNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1AutomationParameterMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1AutomationParameterValueList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1AutomationParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1AutomationStepNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1CalendarNameOrARNList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1CancelCommandResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CancelMaintenanceWindowExecutionResult = (output, context) => {
    return {
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
    };
};
const deserializeAws_json1_1CloudWatchOutputConfig = (output, context) => {
    return {
        CloudWatchLogGroupName: smithy_client_1.expectString(output.CloudWatchLogGroupName),
        CloudWatchOutputEnabled: smithy_client_1.expectBoolean(output.CloudWatchOutputEnabled),
    };
};
const deserializeAws_json1_1Command = (output, context) => {
    return {
        CloudWatchOutputConfig: output.CloudWatchOutputConfig !== undefined && output.CloudWatchOutputConfig !== null
            ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
            : undefined,
        CommandId: smithy_client_1.expectString(output.CommandId),
        Comment: smithy_client_1.expectString(output.Comment),
        CompletedCount: smithy_client_1.expectInt32(output.CompletedCount),
        DeliveryTimedOutCount: smithy_client_1.expectInt32(output.DeliveryTimedOutCount),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        ErrorCount: smithy_client_1.expectInt32(output.ErrorCount),
        ExpiresAfter: output.ExpiresAfter !== undefined && output.ExpiresAfter !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExpiresAfter)))
            : undefined,
        InstanceIds: output.InstanceIds !== undefined && output.InstanceIds !== null
            ? deserializeAws_json1_1InstanceIdList(output.InstanceIds, context)
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        NotificationConfig: output.NotificationConfig !== undefined && output.NotificationConfig !== null
            ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
            : undefined,
        OutputS3BucketName: smithy_client_1.expectString(output.OutputS3BucketName),
        OutputS3KeyPrefix: smithy_client_1.expectString(output.OutputS3KeyPrefix),
        OutputS3Region: smithy_client_1.expectString(output.OutputS3Region),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
        RequestedDateTime: output.RequestedDateTime !== undefined && output.RequestedDateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.RequestedDateTime)))
            : undefined,
        ServiceRole: smithy_client_1.expectString(output.ServiceRole),
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TargetCount: smithy_client_1.expectInt32(output.TargetCount),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        TimeoutSeconds: smithy_client_1.expectInt32(output.TimeoutSeconds),
    };
};
const deserializeAws_json1_1CommandInvocation = (output, context) => {
    return {
        CloudWatchOutputConfig: output.CloudWatchOutputConfig !== undefined && output.CloudWatchOutputConfig !== null
            ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
            : undefined,
        CommandId: smithy_client_1.expectString(output.CommandId),
        CommandPlugins: output.CommandPlugins !== undefined && output.CommandPlugins !== null
            ? deserializeAws_json1_1CommandPluginList(output.CommandPlugins, context)
            : undefined,
        Comment: smithy_client_1.expectString(output.Comment),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        InstanceName: smithy_client_1.expectString(output.InstanceName),
        NotificationConfig: output.NotificationConfig !== undefined && output.NotificationConfig !== null
            ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
            : undefined,
        RequestedDateTime: output.RequestedDateTime !== undefined && output.RequestedDateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.RequestedDateTime)))
            : undefined,
        ServiceRole: smithy_client_1.expectString(output.ServiceRole),
        StandardErrorUrl: smithy_client_1.expectString(output.StandardErrorUrl),
        StandardOutputUrl: smithy_client_1.expectString(output.StandardOutputUrl),
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TraceOutput: smithy_client_1.expectString(output.TraceOutput),
    };
};
const deserializeAws_json1_1CommandInvocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CommandInvocation(entry, context);
    });
};
const deserializeAws_json1_1CommandList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Command(entry, context);
    });
};
const deserializeAws_json1_1CommandPlugin = (output, context) => {
    return {
        Name: smithy_client_1.expectString(output.Name),
        Output: smithy_client_1.expectString(output.Output),
        OutputS3BucketName: smithy_client_1.expectString(output.OutputS3BucketName),
        OutputS3KeyPrefix: smithy_client_1.expectString(output.OutputS3KeyPrefix),
        OutputS3Region: smithy_client_1.expectString(output.OutputS3Region),
        ResponseCode: smithy_client_1.expectInt32(output.ResponseCode),
        ResponseFinishDateTime: output.ResponseFinishDateTime !== undefined && output.ResponseFinishDateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ResponseFinishDateTime)))
            : undefined,
        ResponseStartDateTime: output.ResponseStartDateTime !== undefined && output.ResponseStartDateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ResponseStartDateTime)))
            : undefined,
        StandardErrorUrl: smithy_client_1.expectString(output.StandardErrorUrl),
        StandardOutputUrl: smithy_client_1.expectString(output.StandardOutputUrl),
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
    };
};
const deserializeAws_json1_1CommandPluginList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CommandPlugin(entry, context);
    });
};
const deserializeAws_json1_1ComplianceExecutionSummary = (output, context) => {
    return {
        ExecutionId: smithy_client_1.expectString(output.ExecutionId),
        ExecutionTime: output.ExecutionTime !== undefined && output.ExecutionTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionTime)))
            : undefined,
        ExecutionType: smithy_client_1.expectString(output.ExecutionType),
    };
};
const deserializeAws_json1_1ComplianceItem = (output, context) => {
    return {
        ComplianceType: smithy_client_1.expectString(output.ComplianceType),
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_json1_1ComplianceItemDetails(output.Details, context)
            : undefined,
        ExecutionSummary: output.ExecutionSummary !== undefined && output.ExecutionSummary !== null
            ? deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context)
            : undefined,
        Id: smithy_client_1.expectString(output.Id),
        ResourceId: smithy_client_1.expectString(output.ResourceId),
        ResourceType: smithy_client_1.expectString(output.ResourceType),
        Severity: smithy_client_1.expectString(output.Severity),
        Status: smithy_client_1.expectString(output.Status),
        Title: smithy_client_1.expectString(output.Title),
    };
};
const deserializeAws_json1_1ComplianceItemDetails = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectString(value),
        };
    }, {});
};
const deserializeAws_json1_1ComplianceItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceItem(entry, context);
    });
};
const deserializeAws_json1_1ComplianceSummaryItem = (output, context) => {
    return {
        ComplianceType: smithy_client_1.expectString(output.ComplianceType),
        CompliantSummary: output.CompliantSummary !== undefined && output.CompliantSummary !== null
            ? deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context)
            : undefined,
        NonCompliantSummary: output.NonCompliantSummary !== undefined && output.NonCompliantSummary !== null
            ? deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1ComplianceSummaryItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceSummaryItem(entry, context);
    });
};
const deserializeAws_json1_1ComplianceTypeCountLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1CompliantSummary = (output, context) => {
    return {
        CompliantCount: smithy_client_1.expectInt32(output.CompliantCount),
        SeveritySummary: output.SeveritySummary !== undefined && output.SeveritySummary !== null
            ? deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateActivationResult = (output, context) => {
    return {
        ActivationCode: smithy_client_1.expectString(output.ActivationCode),
        ActivationId: smithy_client_1.expectString(output.ActivationId),
    };
};
const deserializeAws_json1_1CreateAssociationBatchRequestEntry = (output, context) => {
    return {
        ApplyOnlyAtCronInterval: smithy_client_1.expectBoolean(output.ApplyOnlyAtCronInterval),
        AssociationName: smithy_client_1.expectString(output.AssociationName),
        AutomationTargetParameterName: smithy_client_1.expectString(output.AutomationTargetParameterName),
        CalendarNames: output.CalendarNames !== undefined && output.CalendarNames !== null
            ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
            : undefined,
        ComplianceSeverity: smithy_client_1.expectString(output.ComplianceSeverity),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        OutputLocation: output.OutputLocation !== undefined && output.OutputLocation !== null
            ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
        ScheduleExpression: smithy_client_1.expectString(output.ScheduleExpression),
        SyncCompliance: smithy_client_1.expectString(output.SyncCompliance),
        TargetLocations: output.TargetLocations !== undefined && output.TargetLocations !== null
            ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateAssociationBatchResult = (output, context) => {
    return {
        Failed: output.Failed !== undefined && output.Failed !== null
            ? deserializeAws_json1_1FailedCreateAssociationList(output.Failed, context)
            : undefined,
        Successful: output.Successful !== undefined && output.Successful !== null
            ? deserializeAws_json1_1AssociationDescriptionList(output.Successful, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateAssociationResult = (output, context) => {
    return {
        AssociationDescription: output.AssociationDescription !== undefined && output.AssociationDescription !== null
            ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDocumentResult = (output, context) => {
    return {
        DocumentDescription: output.DocumentDescription !== undefined && output.DocumentDescription !== null
            ? deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateMaintenanceWindowResult = (output, context) => {
    return {
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1CreateOpsItemResponse = (output, context) => {
    return {
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
    };
};
const deserializeAws_json1_1CreateOpsMetadataResult = (output, context) => {
    return {
        OpsMetadataArn: smithy_client_1.expectString(output.OpsMetadataArn),
    };
};
const deserializeAws_json1_1CreatePatchBaselineResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
    };
};
const deserializeAws_json1_1CreateResourceDataSyncResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CustomSchemaCountLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DeleteActivationResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAssociationResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDocumentResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteInventoryResult = (output, context) => {
    return {
        DeletionId: smithy_client_1.expectString(output.DeletionId),
        DeletionSummary: output.DeletionSummary !== undefined && output.DeletionSummary !== null
            ? deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context)
            : undefined,
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1DeleteMaintenanceWindowResult = (output, context) => {
    return {
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1DeleteOpsMetadataResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteParameterResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteParametersResult = (output, context) => {
    return {
        DeletedParameters: output.DeletedParameters !== undefined && output.DeletedParameters !== null
            ? deserializeAws_json1_1ParameterNameList(output.DeletedParameters, context)
            : undefined,
        InvalidParameters: output.InvalidParameters !== undefined && output.InvalidParameters !== null
            ? deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeletePatchBaselineResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
    };
};
const deserializeAws_json1_1DeleteResourceDataSyncResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterManagedInstanceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        PatchGroup: smithy_client_1.expectString(output.PatchGroup),
    };
};
const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult = (output, context) => {
    return {
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult = (output, context) => {
    return {
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTaskId: smithy_client_1.expectString(output.WindowTaskId),
    };
};
const deserializeAws_json1_1DescribeActivationsResult = (output, context) => {
    return {
        ActivationList: output.ActivationList !== undefined && output.ActivationList !== null
            ? deserializeAws_json1_1ActivationList(output.ActivationList, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeAssociationExecutionsResult = (output, context) => {
    return {
        AssociationExecutions: output.AssociationExecutions !== undefined && output.AssociationExecutions !== null
            ? deserializeAws_json1_1AssociationExecutionsList(output.AssociationExecutions, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeAssociationExecutionTargetsResult = (output, context) => {
    return {
        AssociationExecutionTargets: output.AssociationExecutionTargets !== undefined && output.AssociationExecutionTargets !== null
            ? deserializeAws_json1_1AssociationExecutionTargetsList(output.AssociationExecutionTargets, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeAssociationResult = (output, context) => {
    return {
        AssociationDescription: output.AssociationDescription !== undefined && output.AssociationDescription !== null
            ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAutomationExecutionsResult = (output, context) => {
    return {
        AutomationExecutionMetadataList: output.AutomationExecutionMetadataList !== undefined && output.AutomationExecutionMetadataList !== null
            ? deserializeAws_json1_1AutomationExecutionMetadataList(output.AutomationExecutionMetadataList, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeAutomationStepExecutionsResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        StepExecutions: output.StepExecutions !== undefined && output.StepExecutions !== null
            ? deserializeAws_json1_1StepExecutionList(output.StepExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAvailablePatchesResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Patches: output.Patches !== undefined && output.Patches !== null
            ? deserializeAws_json1_1PatchList(output.Patches, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDocumentPermissionResponse = (output, context) => {
    return {
        AccountIds: output.AccountIds !== undefined && output.AccountIds !== null
            ? deserializeAws_json1_1AccountIdList(output.AccountIds, context)
            : undefined,
        AccountSharingInfoList: output.AccountSharingInfoList !== undefined && output.AccountSharingInfoList !== null
            ? deserializeAws_json1_1AccountSharingInfoList(output.AccountSharingInfoList, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeDocumentResult = (output, context) => {
    return {
        Document: output.Document !== undefined && output.Document !== null
            ? deserializeAws_json1_1DocumentDescription(output.Document, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult = (output, context) => {
    return {
        Associations: output.Associations !== undefined && output.Associations !== null
            ? deserializeAws_json1_1InstanceAssociationList(output.Associations, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult = (output, context) => {
    return {
        EffectivePatches: output.EffectivePatches !== undefined && output.EffectivePatches !== null
            ? deserializeAws_json1_1EffectivePatchList(output.EffectivePatches, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeInstanceAssociationsStatusResult = (output, context) => {
    return {
        InstanceAssociationStatusInfos: output.InstanceAssociationStatusInfos !== undefined && output.InstanceAssociationStatusInfos !== null
            ? deserializeAws_json1_1InstanceAssociationStatusInfos(output.InstanceAssociationStatusInfos, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeInstanceInformationResult = (output, context) => {
    return {
        InstanceInformationList: output.InstanceInformationList !== undefined && output.InstanceInformationList !== null
            ? deserializeAws_json1_1InstanceInformationList(output.InstanceInformationList, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeInstancePatchesResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Patches: output.Patches !== undefined && output.Patches !== null
            ? deserializeAws_json1_1PatchComplianceDataList(output.Patches, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult = (output, context) => {
    return {
        InstancePatchStates: output.InstancePatchStates !== undefined && output.InstancePatchStates !== null
            ? deserializeAws_json1_1InstancePatchStatesList(output.InstancePatchStates, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeInstancePatchStatesResult = (output, context) => {
    return {
        InstancePatchStates: output.InstancePatchStates !== undefined && output.InstancePatchStates !== null
            ? deserializeAws_json1_1InstancePatchStateList(output.InstancePatchStates, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeInventoryDeletionsResult = (output, context) => {
    return {
        InventoryDeletions: output.InventoryDeletions !== undefined && output.InventoryDeletions !== null
            ? deserializeAws_json1_1InventoryDeletionsList(output.InventoryDeletions, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        WindowExecutions: output.WindowExecutions !== undefined && output.WindowExecutions !== null
            ? deserializeAws_json1_1MaintenanceWindowExecutionList(output.WindowExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        WindowExecutionTaskInvocationIdentities: output.WindowExecutionTaskInvocationIdentities !== undefined &&
            output.WindowExecutionTaskInvocationIdentities !== null
            ? deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList(output.WindowExecutionTaskInvocationIdentities, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        WindowExecutionTaskIdentities: output.WindowExecutionTaskIdentities !== undefined && output.WindowExecutionTaskIdentities !== null
            ? deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList(output.WindowExecutionTaskIdentities, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        ScheduledWindowExecutions: output.ScheduledWindowExecutions !== undefined && output.ScheduledWindowExecutions !== null
            ? deserializeAws_json1_1ScheduledWindowExecutionList(output.ScheduledWindowExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        WindowIdentities: output.WindowIdentities !== undefined && output.WindowIdentities !== null
            ? deserializeAws_json1_1MaintenanceWindowsForTargetList(output.WindowIdentities, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowsResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        WindowIdentities: output.WindowIdentities !== undefined && output.WindowIdentities !== null
            ? deserializeAws_json1_1MaintenanceWindowIdentityList(output.WindowIdentities, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1MaintenanceWindowTargetList(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceWindowTasksResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Tasks: output.Tasks !== undefined && output.Tasks !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskList(output.Tasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOpsItemsResponse = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        OpsItemSummaries: output.OpsItemSummaries !== undefined && output.OpsItemSummaries !== null
            ? deserializeAws_json1_1OpsItemSummaries(output.OpsItemSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeParametersResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterMetadataList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePatchBaselinesResult = (output, context) => {
    return {
        BaselineIdentities: output.BaselineIdentities !== undefined && output.BaselineIdentities !== null
            ? deserializeAws_json1_1PatchBaselineIdentityList(output.BaselineIdentities, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribePatchGroupsResult = (output, context) => {
    return {
        Mappings: output.Mappings !== undefined && output.Mappings !== null
            ? deserializeAws_json1_1PatchGroupPatchBaselineMappingList(output.Mappings, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1DescribePatchGroupStateResult = (output, context) => {
    return {
        Instances: smithy_client_1.expectInt32(output.Instances),
        InstancesWithCriticalNonCompliantPatches: smithy_client_1.expectInt32(output.InstancesWithCriticalNonCompliantPatches),
        InstancesWithFailedPatches: smithy_client_1.expectInt32(output.InstancesWithFailedPatches),
        InstancesWithInstalledOtherPatches: smithy_client_1.expectInt32(output.InstancesWithInstalledOtherPatches),
        InstancesWithInstalledPatches: smithy_client_1.expectInt32(output.InstancesWithInstalledPatches),
        InstancesWithInstalledPendingRebootPatches: smithy_client_1.expectInt32(output.InstancesWithInstalledPendingRebootPatches),
        InstancesWithInstalledRejectedPatches: smithy_client_1.expectInt32(output.InstancesWithInstalledRejectedPatches),
        InstancesWithMissingPatches: smithy_client_1.expectInt32(output.InstancesWithMissingPatches),
        InstancesWithNotApplicablePatches: smithy_client_1.expectInt32(output.InstancesWithNotApplicablePatches),
        InstancesWithOtherNonCompliantPatches: smithy_client_1.expectInt32(output.InstancesWithOtherNonCompliantPatches),
        InstancesWithSecurityNonCompliantPatches: smithy_client_1.expectInt32(output.InstancesWithSecurityNonCompliantPatches),
        InstancesWithUnreportedNotApplicablePatches: smithy_client_1.expectInt32(output.InstancesWithUnreportedNotApplicablePatches),
    };
};
const deserializeAws_json1_1DescribePatchPropertiesResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1PatchPropertiesList(output.Properties, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSessionsResponse = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Sessions: output.Sessions !== undefined && output.Sessions !== null
            ? deserializeAws_json1_1SessionList(output.Sessions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateOpsItemRelatedItemResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DocumentAlreadyExists = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DocumentDefaultVersionDescription = (output, context) => {
    return {
        DefaultVersion: smithy_client_1.expectString(output.DefaultVersion),
        DefaultVersionName: smithy_client_1.expectString(output.DefaultVersionName),
        Name: smithy_client_1.expectString(output.Name),
    };
};
const deserializeAws_json1_1DocumentDescription = (output, context) => {
    return {
        ApprovedVersion: smithy_client_1.expectString(output.ApprovedVersion),
        AttachmentsInformation: output.AttachmentsInformation !== undefined && output.AttachmentsInformation !== null
            ? deserializeAws_json1_1AttachmentInformationList(output.AttachmentsInformation, context)
            : undefined,
        Author: smithy_client_1.expectString(output.Author),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DefaultVersion: smithy_client_1.expectString(output.DefaultVersion),
        Description: smithy_client_1.expectString(output.Description),
        DisplayName: smithy_client_1.expectString(output.DisplayName),
        DocumentFormat: smithy_client_1.expectString(output.DocumentFormat),
        DocumentType: smithy_client_1.expectString(output.DocumentType),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        Hash: smithy_client_1.expectString(output.Hash),
        HashType: smithy_client_1.expectString(output.HashType),
        LatestVersion: smithy_client_1.expectString(output.LatestVersion),
        Name: smithy_client_1.expectString(output.Name),
        Owner: smithy_client_1.expectString(output.Owner),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1DocumentParameterList(output.Parameters, context)
            : undefined,
        PendingReviewVersion: smithy_client_1.expectString(output.PendingReviewVersion),
        PlatformTypes: output.PlatformTypes !== undefined && output.PlatformTypes !== null
            ? deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context)
            : undefined,
        Requires: output.Requires !== undefined && output.Requires !== null
            ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context)
            : undefined,
        ReviewInformation: output.ReviewInformation !== undefined && output.ReviewInformation !== null
            ? deserializeAws_json1_1ReviewInformationList(output.ReviewInformation, context)
            : undefined,
        ReviewStatus: smithy_client_1.expectString(output.ReviewStatus),
        SchemaVersion: smithy_client_1.expectString(output.SchemaVersion),
        Sha1: smithy_client_1.expectString(output.Sha1),
        Status: smithy_client_1.expectString(output.Status),
        StatusInformation: smithy_client_1.expectString(output.StatusInformation),
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        TargetType: smithy_client_1.expectString(output.TargetType),
        VersionName: smithy_client_1.expectString(output.VersionName),
    };
};
const deserializeAws_json1_1DocumentIdentifier = (output, context) => {
    return {
        Author: smithy_client_1.expectString(output.Author),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DisplayName: smithy_client_1.expectString(output.DisplayName),
        DocumentFormat: smithy_client_1.expectString(output.DocumentFormat),
        DocumentType: smithy_client_1.expectString(output.DocumentType),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        Name: smithy_client_1.expectString(output.Name),
        Owner: smithy_client_1.expectString(output.Owner),
        PlatformTypes: output.PlatformTypes !== undefined && output.PlatformTypes !== null
            ? deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context)
            : undefined,
        Requires: output.Requires !== undefined && output.Requires !== null
            ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context)
            : undefined,
        ReviewStatus: smithy_client_1.expectString(output.ReviewStatus),
        SchemaVersion: smithy_client_1.expectString(output.SchemaVersion),
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        TargetType: smithy_client_1.expectString(output.TargetType),
        VersionName: smithy_client_1.expectString(output.VersionName),
    };
};
const deserializeAws_json1_1DocumentIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentIdentifier(entry, context);
    });
};
const deserializeAws_json1_1DocumentLimitExceeded = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DocumentMetadataResponseInfo = (output, context) => {
    return {
        ReviewerResponse: output.ReviewerResponse !== undefined && output.ReviewerResponse !== null
            ? deserializeAws_json1_1DocumentReviewerResponseList(output.ReviewerResponse, context)
            : undefined,
    };
};
const deserializeAws_json1_1DocumentParameter = (output, context) => {
    return {
        DefaultValue: smithy_client_1.expectString(output.DefaultValue),
        Description: smithy_client_1.expectString(output.Description),
        Name: smithy_client_1.expectString(output.Name),
        Type: smithy_client_1.expectString(output.Type),
    };
};
const deserializeAws_json1_1DocumentParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentParameter(entry, context);
    });
};
const deserializeAws_json1_1DocumentPermissionLimit = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DocumentRequires = (output, context) => {
    return {
        Name: smithy_client_1.expectString(output.Name),
        Version: smithy_client_1.expectString(output.Version),
    };
};
const deserializeAws_json1_1DocumentRequiresList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentRequires(entry, context);
    });
};
const deserializeAws_json1_1DocumentReviewCommentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentReviewCommentSource(entry, context);
    });
};
const deserializeAws_json1_1DocumentReviewCommentSource = (output, context) => {
    return {
        Content: smithy_client_1.expectString(output.Content),
        Type: smithy_client_1.expectString(output.Type),
    };
};
const deserializeAws_json1_1DocumentReviewerResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentReviewerResponseSource(entry, context);
    });
};
const deserializeAws_json1_1DocumentReviewerResponseSource = (output, context) => {
    return {
        Comment: output.Comment !== undefined && output.Comment !== null
            ? deserializeAws_json1_1DocumentReviewCommentList(output.Comment, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreateTime)))
            : undefined,
        ReviewStatus: smithy_client_1.expectString(output.ReviewStatus),
        Reviewer: smithy_client_1.expectString(output.Reviewer),
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.UpdatedTime)))
            : undefined,
    };
};
const deserializeAws_json1_1DocumentVersionInfo = (output, context) => {
    return {
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DisplayName: smithy_client_1.expectString(output.DisplayName),
        DocumentFormat: smithy_client_1.expectString(output.DocumentFormat),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        IsDefaultVersion: smithy_client_1.expectBoolean(output.IsDefaultVersion),
        Name: smithy_client_1.expectString(output.Name),
        ReviewStatus: smithy_client_1.expectString(output.ReviewStatus),
        Status: smithy_client_1.expectString(output.Status),
        StatusInformation: smithy_client_1.expectString(output.StatusInformation),
        VersionName: smithy_client_1.expectString(output.VersionName),
    };
};
const deserializeAws_json1_1DocumentVersionLimitExceeded = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DocumentVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentVersionInfo(entry, context);
    });
};
const deserializeAws_json1_1DoesNotExistException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DuplicateDocumentContent = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DuplicateDocumentVersionName = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1DuplicateInstanceId = (output, context) => {
    return {};
};
const deserializeAws_json1_1EffectivePatch = (output, context) => {
    return {
        Patch: output.Patch !== undefined && output.Patch !== null
            ? deserializeAws_json1_1Patch(output.Patch, context)
            : undefined,
        PatchStatus: output.PatchStatus !== undefined && output.PatchStatus !== null
            ? deserializeAws_json1_1PatchStatus(output.PatchStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1EffectivePatchList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EffectivePatch(entry, context);
    });
};
const deserializeAws_json1_1FailedCreateAssociation = (output, context) => {
    return {
        Entry: output.Entry !== undefined && output.Entry !== null
            ? deserializeAws_json1_1CreateAssociationBatchRequestEntry(output.Entry, context)
            : undefined,
        Fault: smithy_client_1.expectString(output.Fault),
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1FailedCreateAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedCreateAssociation(entry, context);
    });
};
const deserializeAws_json1_1FailureDetails = (output, context) => {
    return {
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Details, context)
            : undefined,
        FailureStage: smithy_client_1.expectString(output.FailureStage),
        FailureType: smithy_client_1.expectString(output.FailureType),
    };
};
const deserializeAws_json1_1FeatureNotAvailableException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1GetAutomationExecutionResult = (output, context) => {
    return {
        AutomationExecution: output.AutomationExecution !== undefined && output.AutomationExecution !== null
            ? deserializeAws_json1_1AutomationExecution(output.AutomationExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCalendarStateResponse = (output, context) => {
    return {
        AtTime: smithy_client_1.expectString(output.AtTime),
        NextTransitionTime: smithy_client_1.expectString(output.NextTransitionTime),
        State: smithy_client_1.expectString(output.State),
    };
};
const deserializeAws_json1_1GetCommandInvocationResult = (output, context) => {
    return {
        CloudWatchOutputConfig: output.CloudWatchOutputConfig !== undefined && output.CloudWatchOutputConfig !== null
            ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
            : undefined,
        CommandId: smithy_client_1.expectString(output.CommandId),
        Comment: smithy_client_1.expectString(output.Comment),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        ExecutionElapsedTime: smithy_client_1.expectString(output.ExecutionElapsedTime),
        ExecutionEndDateTime: smithy_client_1.expectString(output.ExecutionEndDateTime),
        ExecutionStartDateTime: smithy_client_1.expectString(output.ExecutionStartDateTime),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        PluginName: smithy_client_1.expectString(output.PluginName),
        ResponseCode: smithy_client_1.expectInt32(output.ResponseCode),
        StandardErrorContent: smithy_client_1.expectString(output.StandardErrorContent),
        StandardErrorUrl: smithy_client_1.expectString(output.StandardErrorUrl),
        StandardOutputContent: smithy_client_1.expectString(output.StandardOutputContent),
        StandardOutputUrl: smithy_client_1.expectString(output.StandardOutputUrl),
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
    };
};
const deserializeAws_json1_1GetConnectionStatusResponse = (output, context) => {
    return {
        Status: smithy_client_1.expectString(output.Status),
        Target: smithy_client_1.expectString(output.Target),
    };
};
const deserializeAws_json1_1GetDefaultPatchBaselineResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        OperatingSystem: smithy_client_1.expectString(output.OperatingSystem),
    };
};
const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult = (output, context) => {
    return {
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        Product: smithy_client_1.expectString(output.Product),
        SnapshotDownloadUrl: smithy_client_1.expectString(output.SnapshotDownloadUrl),
        SnapshotId: smithy_client_1.expectString(output.SnapshotId),
    };
};
const deserializeAws_json1_1GetDocumentResult = (output, context) => {
    return {
        AttachmentsContent: output.AttachmentsContent !== undefined && output.AttachmentsContent !== null
            ? deserializeAws_json1_1AttachmentContentList(output.AttachmentsContent, context)
            : undefined,
        Content: smithy_client_1.expectString(output.Content),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        DisplayName: smithy_client_1.expectString(output.DisplayName),
        DocumentFormat: smithy_client_1.expectString(output.DocumentFormat),
        DocumentType: smithy_client_1.expectString(output.DocumentType),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        Name: smithy_client_1.expectString(output.Name),
        Requires: output.Requires !== undefined && output.Requires !== null
            ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context)
            : undefined,
        ReviewStatus: smithy_client_1.expectString(output.ReviewStatus),
        Status: smithy_client_1.expectString(output.Status),
        StatusInformation: smithy_client_1.expectString(output.StatusInformation),
        VersionName: smithy_client_1.expectString(output.VersionName),
    };
};
const deserializeAws_json1_1GetInventoryResult = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1InventoryResultEntityList(output.Entities, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1GetInventorySchemaResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1InventoryItemSchemaResultList(output.Schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionResult = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TaskIds: output.TaskIds !== undefined && output.TaskIds !== null
            ? deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList(output.TaskIds, context)
            : undefined,
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
    };
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        ExecutionId: smithy_client_1.expectString(output.ExecutionId),
        InvocationId: smithy_client_1.expectString(output.InvocationId),
        OwnerInformation: smithy_client_1.expectString(output.OwnerInformation),
        Parameters: smithy_client_1.expectString(output.Parameters),
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TaskExecutionId: smithy_client_1.expectString(output.TaskExecutionId),
        TaskType: smithy_client_1.expectString(output.TaskType),
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Priority: smithy_client_1.expectInt32(output.Priority),
        ServiceRole: smithy_client_1.expectString(output.ServiceRole),
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TaskArn: smithy_client_1.expectString(output.TaskArn),
        TaskExecutionId: smithy_client_1.expectString(output.TaskExecutionId),
        TaskParameters: output.TaskParameters !== undefined && output.TaskParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskParametersList(output.TaskParameters, context)
            : undefined,
        Type: smithy_client_1.expectString(output.Type),
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
    };
};
const deserializeAws_json1_1GetMaintenanceWindowResult = (output, context) => {
    return {
        AllowUnassociatedTargets: smithy_client_1.expectBoolean(output.AllowUnassociatedTargets),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        Cutoff: smithy_client_1.expectInt32(output.Cutoff),
        Description: smithy_client_1.expectString(output.Description),
        Duration: smithy_client_1.expectInt32(output.Duration),
        Enabled: smithy_client_1.expectBoolean(output.Enabled),
        EndDate: smithy_client_1.expectString(output.EndDate),
        ModifiedDate: output.ModifiedDate !== undefined && output.ModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ModifiedDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        NextExecutionTime: smithy_client_1.expectString(output.NextExecutionTime),
        Schedule: smithy_client_1.expectString(output.Schedule),
        ScheduleOffset: smithy_client_1.expectInt32(output.ScheduleOffset),
        ScheduleTimezone: smithy_client_1.expectString(output.ScheduleTimezone),
        StartDate: smithy_client_1.expectString(output.StartDate),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1GetMaintenanceWindowTaskResult = (output, context) => {
    return {
        CutoffBehavior: smithy_client_1.expectString(output.CutoffBehavior),
        Description: smithy_client_1.expectString(output.Description),
        LoggingInfo: output.LoggingInfo !== undefined && output.LoggingInfo !== null
            ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context)
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        Priority: smithy_client_1.expectInt32(output.Priority),
        ServiceRoleArn: smithy_client_1.expectString(output.ServiceRoleArn),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        TaskArn: smithy_client_1.expectString(output.TaskArn),
        TaskInvocationParameters: output.TaskInvocationParameters !== undefined && output.TaskInvocationParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
            : undefined,
        TaskParameters: output.TaskParameters !== undefined && output.TaskParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
            : undefined,
        TaskType: smithy_client_1.expectString(output.TaskType),
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTaskId: smithy_client_1.expectString(output.WindowTaskId),
    };
};
const deserializeAws_json1_1GetOpsItemResponse = (output, context) => {
    return {
        OpsItem: output.OpsItem !== undefined && output.OpsItem !== null
            ? deserializeAws_json1_1OpsItem(output.OpsItem, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOpsMetadataResult = (output, context) => {
    return {
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1MetadataMap(output.Metadata, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
        ResourceId: smithy_client_1.expectString(output.ResourceId),
    };
};
const deserializeAws_json1_1GetOpsSummaryResult = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1OpsEntityList(output.Entities, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1GetParameterHistoryResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterHistoryList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetParameterResult = (output, context) => {
    return {
        Parameter: output.Parameter !== undefined && output.Parameter !== null
            ? deserializeAws_json1_1Parameter(output.Parameter, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetParametersByPathResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetParametersResult = (output, context) => {
    return {
        InvalidParameters: output.InvalidParameters !== undefined && output.InvalidParameters !== null
            ? deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPatchBaselineForPatchGroupResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        OperatingSystem: smithy_client_1.expectString(output.OperatingSystem),
        PatchGroup: smithy_client_1.expectString(output.PatchGroup),
    };
};
const deserializeAws_json1_1GetPatchBaselineResult = (output, context) => {
    return {
        ApprovalRules: output.ApprovalRules !== undefined && output.ApprovalRules !== null
            ? deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context)
            : undefined,
        ApprovedPatches: output.ApprovedPatches !== undefined && output.ApprovedPatches !== null
            ? deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context)
            : undefined,
        ApprovedPatchesComplianceLevel: smithy_client_1.expectString(output.ApprovedPatchesComplianceLevel),
        ApprovedPatchesEnableNonSecurity: smithy_client_1.expectBoolean(output.ApprovedPatchesEnableNonSecurity),
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        Description: smithy_client_1.expectString(output.Description),
        GlobalFilters: output.GlobalFilters !== undefined && output.GlobalFilters !== null
            ? deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context)
            : undefined,
        ModifiedDate: output.ModifiedDate !== undefined && output.ModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ModifiedDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        OperatingSystem: smithy_client_1.expectString(output.OperatingSystem),
        PatchGroups: output.PatchGroups !== undefined && output.PatchGroups !== null
            ? deserializeAws_json1_1PatchGroupList(output.PatchGroups, context)
            : undefined,
        RejectedPatches: output.RejectedPatches !== undefined && output.RejectedPatches !== null
            ? deserializeAws_json1_1PatchIdList(output.RejectedPatches, context)
            : undefined,
        RejectedPatchesAction: smithy_client_1.expectString(output.RejectedPatchesAction),
        Sources: output.Sources !== undefined && output.Sources !== null
            ? deserializeAws_json1_1PatchSourceList(output.Sources, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServiceSettingResult = (output, context) => {
    return {
        ServiceSetting: output.ServiceSetting !== undefined && output.ServiceSetting !== null
            ? deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context)
            : undefined,
    };
};
const deserializeAws_json1_1HierarchyLevelLimitExceededException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1HierarchyTypeMismatchException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1IdempotentParameterMismatch = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1IncompatiblePolicyException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InstanceAggregatedAssociationOverview = (output, context) => {
    return {
        DetailedStatus: smithy_client_1.expectString(output.DetailedStatus),
        InstanceAssociationStatusAggregatedCount: output.InstanceAssociationStatusAggregatedCount !== undefined &&
            output.InstanceAssociationStatusAggregatedCount !== null
            ? deserializeAws_json1_1InstanceAssociationStatusAggregatedCount(output.InstanceAssociationStatusAggregatedCount, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceAssociation = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        Content: smithy_client_1.expectString(output.Content),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
    };
};
const deserializeAws_json1_1InstanceAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceAssociation(entry, context);
    });
};
const deserializeAws_json1_1InstanceAssociationOutputLocation = (output, context) => {
    return {
        S3Location: output.S3Location !== undefined && output.S3Location !== null
            ? deserializeAws_json1_1S3OutputLocation(output.S3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceAssociationOutputUrl = (output, context) => {
    return {
        S3OutputUrl: output.S3OutputUrl !== undefined && output.S3OutputUrl !== null
            ? deserializeAws_json1_1S3OutputUrl(output.S3OutputUrl, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceAssociationStatusAggregatedCount = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectInt32(value),
        };
    }, {});
};
const deserializeAws_json1_1InstanceAssociationStatusInfo = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationName: smithy_client_1.expectString(output.AssociationName),
        AssociationVersion: smithy_client_1.expectString(output.AssociationVersion),
        DetailedStatus: smithy_client_1.expectString(output.DetailedStatus),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        ErrorCode: smithy_client_1.expectString(output.ErrorCode),
        ExecutionDate: output.ExecutionDate !== undefined && output.ExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionDate)))
            : undefined,
        ExecutionSummary: smithy_client_1.expectString(output.ExecutionSummary),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        Name: smithy_client_1.expectString(output.Name),
        OutputUrl: output.OutputUrl !== undefined && output.OutputUrl !== null
            ? deserializeAws_json1_1InstanceAssociationOutputUrl(output.OutputUrl, context)
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1InstanceAssociationStatusInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceAssociationStatusInfo(entry, context);
    });
};
const deserializeAws_json1_1InstanceIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1InstanceInformation = (output, context) => {
    return {
        ActivationId: smithy_client_1.expectString(output.ActivationId),
        AgentVersion: smithy_client_1.expectString(output.AgentVersion),
        AssociationOverview: output.AssociationOverview !== undefined && output.AssociationOverview !== null
            ? deserializeAws_json1_1InstanceAggregatedAssociationOverview(output.AssociationOverview, context)
            : undefined,
        AssociationStatus: smithy_client_1.expectString(output.AssociationStatus),
        ComputerName: smithy_client_1.expectString(output.ComputerName),
        IPAddress: smithy_client_1.expectString(output.IPAddress),
        IamRole: smithy_client_1.expectString(output.IamRole),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        IsLatestVersion: smithy_client_1.expectBoolean(output.IsLatestVersion),
        LastAssociationExecutionDate: output.LastAssociationExecutionDate !== undefined && output.LastAssociationExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastAssociationExecutionDate)))
            : undefined,
        LastPingDateTime: output.LastPingDateTime !== undefined && output.LastPingDateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastPingDateTime)))
            : undefined,
        LastSuccessfulAssociationExecutionDate: output.LastSuccessfulAssociationExecutionDate !== undefined &&
            output.LastSuccessfulAssociationExecutionDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastSuccessfulAssociationExecutionDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        PingStatus: smithy_client_1.expectString(output.PingStatus),
        PlatformName: smithy_client_1.expectString(output.PlatformName),
        PlatformType: smithy_client_1.expectString(output.PlatformType),
        PlatformVersion: smithy_client_1.expectString(output.PlatformVersion),
        RegistrationDate: output.RegistrationDate !== undefined && output.RegistrationDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.RegistrationDate)))
            : undefined,
        ResourceType: smithy_client_1.expectString(output.ResourceType),
    };
};
const deserializeAws_json1_1InstanceInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceInformation(entry, context);
    });
};
const deserializeAws_json1_1InstancePatchState = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        CriticalNonCompliantCount: smithy_client_1.expectInt32(output.CriticalNonCompliantCount),
        FailedCount: smithy_client_1.expectInt32(output.FailedCount),
        InstallOverrideList: smithy_client_1.expectString(output.InstallOverrideList),
        InstalledCount: smithy_client_1.expectInt32(output.InstalledCount),
        InstalledOtherCount: smithy_client_1.expectInt32(output.InstalledOtherCount),
        InstalledPendingRebootCount: smithy_client_1.expectInt32(output.InstalledPendingRebootCount),
        InstalledRejectedCount: smithy_client_1.expectInt32(output.InstalledRejectedCount),
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        LastNoRebootInstallOperationTime: output.LastNoRebootInstallOperationTime !== undefined && output.LastNoRebootInstallOperationTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastNoRebootInstallOperationTime)))
            : undefined,
        MissingCount: smithy_client_1.expectInt32(output.MissingCount),
        NotApplicableCount: smithy_client_1.expectInt32(output.NotApplicableCount),
        Operation: smithy_client_1.expectString(output.Operation),
        OperationEndTime: output.OperationEndTime !== undefined && output.OperationEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.OperationEndTime)))
            : undefined,
        OperationStartTime: output.OperationStartTime !== undefined && output.OperationStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.OperationStartTime)))
            : undefined,
        OtherNonCompliantCount: smithy_client_1.expectInt32(output.OtherNonCompliantCount),
        OwnerInformation: smithy_client_1.expectString(output.OwnerInformation),
        PatchGroup: smithy_client_1.expectString(output.PatchGroup),
        RebootOption: smithy_client_1.expectString(output.RebootOption),
        SecurityNonCompliantCount: smithy_client_1.expectInt32(output.SecurityNonCompliantCount),
        SnapshotId: smithy_client_1.expectString(output.SnapshotId),
        UnreportedNotApplicableCount: smithy_client_1.expectInt32(output.UnreportedNotApplicableCount),
    };
};
const deserializeAws_json1_1InstancePatchStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstancePatchState(entry, context);
    });
};
const deserializeAws_json1_1InstancePatchStatesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstancePatchState(entry, context);
    });
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidActivation = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidActivationId = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAggregatorException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAllowedPatternException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidAssociation = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAssociationVersion = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAutomationExecutionParametersException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAutomationSignalException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidAutomationStatusUpdateException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidCommandId = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidDeleteInventoryParametersException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDeletionIdException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocument = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocumentContent = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocumentOperation = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocumentSchemaVersion = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocumentType = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidDocumentVersion = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidFilter = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidFilterKey = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidFilterOption = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidFilterValue = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidInstanceId = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidInstanceInformationFilterValue = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidInventoryGroupException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidInventoryItemContextException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidInventoryRequestException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidItemContentException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1InvalidKeyId = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidNextToken = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidNotificationConfig = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidOptionException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidOutputFolder = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidOutputLocation = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidParameters = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidPermissionType = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidPluginName = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidPolicyAttributeException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidPolicyTypeException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidResourceId = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidResourceType = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidResultAttributeException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidRole = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidSchedule = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidTarget = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidTypeNameException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InvalidUpdate = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1InventoryDeletionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryDeletionStatusItem(entry, context);
    });
};
const deserializeAws_json1_1InventoryDeletionStatusItem = (output, context) => {
    return {
        DeletionId: smithy_client_1.expectString(output.DeletionId),
        DeletionStartTime: output.DeletionStartTime !== undefined && output.DeletionStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.DeletionStartTime)))
            : undefined,
        DeletionSummary: output.DeletionSummary !== undefined && output.DeletionSummary !== null
            ? deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context)
            : undefined,
        LastStatus: smithy_client_1.expectString(output.LastStatus),
        LastStatusMessage: smithy_client_1.expectString(output.LastStatusMessage),
        LastStatusUpdateTime: output.LastStatusUpdateTime !== undefined && output.LastStatusUpdateTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastStatusUpdateTime)))
            : undefined,
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1InventoryDeletionSummary = (output, context) => {
    return {
        RemainingCount: smithy_client_1.expectInt32(output.RemainingCount),
        SummaryItems: output.SummaryItems !== undefined && output.SummaryItems !== null
            ? deserializeAws_json1_1InventoryDeletionSummaryItems(output.SummaryItems, context)
            : undefined,
        TotalCount: smithy_client_1.expectInt32(output.TotalCount),
    };
};
const deserializeAws_json1_1InventoryDeletionSummaryItem = (output, context) => {
    return {
        Count: smithy_client_1.expectInt32(output.Count),
        RemainingCount: smithy_client_1.expectInt32(output.RemainingCount),
        Version: smithy_client_1.expectString(output.Version),
    };
};
const deserializeAws_json1_1InventoryDeletionSummaryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryDeletionSummaryItem(entry, context);
    });
};
const deserializeAws_json1_1InventoryItemAttribute = (output, context) => {
    return {
        DataType: smithy_client_1.expectString(output.DataType),
        Name: smithy_client_1.expectString(output.Name),
    };
};
const deserializeAws_json1_1InventoryItemAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryItemAttribute(entry, context);
    });
};
const deserializeAws_json1_1InventoryItemEntry = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectString(value),
        };
    }, {});
};
const deserializeAws_json1_1InventoryItemEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryItemEntry(entry, context);
    });
};
const deserializeAws_json1_1InventoryItemSchema = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1InventoryItemAttributeList(output.Attributes, context)
            : undefined,
        DisplayName: smithy_client_1.expectString(output.DisplayName),
        TypeName: smithy_client_1.expectString(output.TypeName),
        Version: smithy_client_1.expectString(output.Version),
    };
};
const deserializeAws_json1_1InventoryItemSchemaResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryItemSchema(entry, context);
    });
};
const deserializeAws_json1_1InventoryResultEntity = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null
            ? deserializeAws_json1_1InventoryResultItemMap(output.Data, context)
            : undefined,
        Id: smithy_client_1.expectString(output.Id),
    };
};
const deserializeAws_json1_1InventoryResultEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InventoryResultEntity(entry, context);
    });
};
const deserializeAws_json1_1InventoryResultItem = (output, context) => {
    return {
        CaptureTime: smithy_client_1.expectString(output.CaptureTime),
        Content: output.Content !== undefined && output.Content !== null
            ? deserializeAws_json1_1InventoryItemEntryList(output.Content, context)
            : undefined,
        ContentHash: smithy_client_1.expectString(output.ContentHash),
        SchemaVersion: smithy_client_1.expectString(output.SchemaVersion),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1InventoryResultItemMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1InventoryResultItem(value, context),
        };
    }, {});
};
const deserializeAws_json1_1InvocationDoesNotExist = (output, context) => {
    return {};
};
const deserializeAws_json1_1ItemContentMismatchException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1ItemSizeLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1LabelParameterVersionResult = (output, context) => {
    return {
        InvalidLabels: output.InvalidLabels !== undefined && output.InvalidLabels !== null
            ? deserializeAws_json1_1ParameterLabelList(output.InvalidLabels, context)
            : undefined,
        ParameterVersion: smithy_client_1.expectLong(output.ParameterVersion),
    };
};
const deserializeAws_json1_1ListAssociationsResult = (output, context) => {
    return {
        Associations: output.Associations !== undefined && output.Associations !== null
            ? deserializeAws_json1_1AssociationList(output.Associations, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListAssociationVersionsResult = (output, context) => {
    return {
        AssociationVersions: output.AssociationVersions !== undefined && output.AssociationVersions !== null
            ? deserializeAws_json1_1AssociationVersionList(output.AssociationVersions, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListCommandInvocationsResult = (output, context) => {
    return {
        CommandInvocations: output.CommandInvocations !== undefined && output.CommandInvocations !== null
            ? deserializeAws_json1_1CommandInvocationList(output.CommandInvocations, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListCommandsResult = (output, context) => {
    return {
        Commands: output.Commands !== undefined && output.Commands !== null
            ? deserializeAws_json1_1CommandList(output.Commands, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListComplianceItemsResult = (output, context) => {
    return {
        ComplianceItems: output.ComplianceItems !== undefined && output.ComplianceItems !== null
            ? deserializeAws_json1_1ComplianceItemList(output.ComplianceItems, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListComplianceSummariesResult = (output, context) => {
    return {
        ComplianceSummaryItems: output.ComplianceSummaryItems !== undefined && output.ComplianceSummaryItems !== null
            ? deserializeAws_json1_1ComplianceSummaryItemList(output.ComplianceSummaryItems, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListDocumentMetadataHistoryResponse = (output, context) => {
    return {
        Author: smithy_client_1.expectString(output.Author),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1DocumentMetadataResponseInfo(output.Metadata, context)
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListDocumentsResult = (output, context) => {
    return {
        DocumentIdentifiers: output.DocumentIdentifiers !== undefined && output.DocumentIdentifiers !== null
            ? deserializeAws_json1_1DocumentIdentifierList(output.DocumentIdentifiers, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListDocumentVersionsResult = (output, context) => {
    return {
        DocumentVersions: output.DocumentVersions !== undefined && output.DocumentVersions !== null
            ? deserializeAws_json1_1DocumentVersionList(output.DocumentVersions, context)
            : undefined,
        NextToken: smithy_client_1.expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListInventoryEntriesResult = (output, context) => {
    return {
        CaptureTime: smithy_client_1.expectString(output.CaptureTime),
        Entries: output.Entries !== undefined && output.Entries !== null
            ? deserializeAws_json1_1InventoryItemEntryList(output.Entries, context)
            : undefined,
        InstanceId: smithy_client_1.expectString(output.InstanceId),
        NextToken: smithy_client_1.expectString(output.NextToken),
        SchemaVersion: smithy_client_1.expectString(output.SchemaVersion),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1ListOpsItemEventsResponse = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Summaries: output.Summaries !== undefined && output.Summaries !== null
            ? deserializeAws_json1_1OpsItemEventSummaries(output.Summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOpsItemRelatedItemsResponse = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        Summaries: output.Summaries !== undefined && output.Summaries !== null
            ? deserializeAws_json1_1OpsItemRelatedItemSummaries(output.Summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOpsMetadataResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        OpsMetadataList: output.OpsMetadataList !== undefined && output.OpsMetadataList !== null
            ? deserializeAws_json1_1OpsMetadataList(output.OpsMetadataList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourceComplianceSummariesResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        ResourceComplianceSummaryItems: output.ResourceComplianceSummaryItems !== undefined && output.ResourceComplianceSummaryItems !== null
            ? deserializeAws_json1_1ResourceComplianceSummaryItemList(output.ResourceComplianceSummaryItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourceDataSyncResult = (output, context) => {
    return {
        NextToken: smithy_client_1.expectString(output.NextToken),
        ResourceDataSyncItems: output.ResourceDataSyncItems !== undefined && output.ResourceDataSyncItems !== null
            ? deserializeAws_json1_1ResourceDataSyncItemList(output.ResourceDataSyncItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoggingInfo = (output, context) => {
    return {
        S3BucketName: smithy_client_1.expectString(output.S3BucketName),
        S3KeyPrefix: smithy_client_1.expectString(output.S3KeyPrefix),
        S3Region: smithy_client_1.expectString(output.S3Region),
    };
};
const deserializeAws_json1_1MaintenanceWindowAutomationParameters = (output, context) => {
    return {
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1MaintenanceWindowExecution = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1MaintenanceWindowExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowExecution(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TaskArn: smithy_client_1.expectString(output.TaskArn),
        TaskExecutionId: smithy_client_1.expectString(output.TaskExecutionId),
        TaskType: smithy_client_1.expectString(output.TaskType),
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
    };
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndTime)))
            : undefined,
        ExecutionId: smithy_client_1.expectString(output.ExecutionId),
        InvocationId: smithy_client_1.expectString(output.InvocationId),
        OwnerInformation: smithy_client_1.expectString(output.OwnerInformation),
        Parameters: smithy_client_1.expectString(output.Parameters),
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartTime)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        StatusDetails: smithy_client_1.expectString(output.StatusDetails),
        TaskExecutionId: smithy_client_1.expectString(output.TaskExecutionId),
        TaskType: smithy_client_1.expectString(output.TaskType),
        WindowExecutionId: smithy_client_1.expectString(output.WindowExecutionId),
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowIdentity = (output, context) => {
    return {
        Cutoff: smithy_client_1.expectInt32(output.Cutoff),
        Description: smithy_client_1.expectString(output.Description),
        Duration: smithy_client_1.expectInt32(output.Duration),
        Enabled: smithy_client_1.expectBoolean(output.Enabled),
        EndDate: smithy_client_1.expectString(output.EndDate),
        Name: smithy_client_1.expectString(output.Name),
        NextExecutionTime: smithy_client_1.expectString(output.NextExecutionTime),
        Schedule: smithy_client_1.expectString(output.Schedule),
        ScheduleOffset: smithy_client_1.expectInt32(output.ScheduleOffset),
        ScheduleTimezone: smithy_client_1.expectString(output.ScheduleTimezone),
        StartDate: smithy_client_1.expectString(output.StartDate),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1MaintenanceWindowIdentityForTarget = (output, context) => {
    return {
        Name: smithy_client_1.expectString(output.Name),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1MaintenanceWindowIdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowIdentity(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowLambdaParameters = (output, context) => {
    return {
        ClientContext: smithy_client_1.expectString(output.ClientContext),
        Payload: output.Payload !== undefined && output.Payload !== null ? context.base64Decoder(output.Payload) : undefined,
        Qualifier: smithy_client_1.expectString(output.Qualifier),
    };
};
const deserializeAws_json1_1MaintenanceWindowRunCommandParameters = (output, context) => {
    return {
        CloudWatchOutputConfig: output.CloudWatchOutputConfig !== undefined && output.CloudWatchOutputConfig !== null
            ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
            : undefined,
        Comment: smithy_client_1.expectString(output.Comment),
        DocumentHash: smithy_client_1.expectString(output.DocumentHash),
        DocumentHashType: smithy_client_1.expectString(output.DocumentHashType),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        NotificationConfig: output.NotificationConfig !== undefined && output.NotificationConfig !== null
            ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
            : undefined,
        OutputS3BucketName: smithy_client_1.expectString(output.OutputS3BucketName),
        OutputS3KeyPrefix: smithy_client_1.expectString(output.OutputS3KeyPrefix),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
        ServiceRoleArn: smithy_client_1.expectString(output.ServiceRoleArn),
        TimeoutSeconds: smithy_client_1.expectInt32(output.TimeoutSeconds),
    };
};
const deserializeAws_json1_1MaintenanceWindowsForTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowIdentityForTarget(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (output, context) => {
    return {
        Input: smithy_client_1.expectString(output.Input),
        Name: smithy_client_1.expectString(output.Name),
    };
};
const deserializeAws_json1_1MaintenanceWindowTarget = (output, context) => {
    return {
        Description: smithy_client_1.expectString(output.Description),
        Name: smithy_client_1.expectString(output.Name),
        OwnerInformation: smithy_client_1.expectString(output.OwnerInformation),
        ResourceType: smithy_client_1.expectString(output.ResourceType),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1MaintenanceWindowTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowTarget(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowTask = (output, context) => {
    return {
        CutoffBehavior: smithy_client_1.expectString(output.CutoffBehavior),
        Description: smithy_client_1.expectString(output.Description),
        LoggingInfo: output.LoggingInfo !== undefined && output.LoggingInfo !== null
            ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context)
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        Priority: smithy_client_1.expectInt32(output.Priority),
        ServiceRoleArn: smithy_client_1.expectString(output.ServiceRoleArn),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        TaskArn: smithy_client_1.expectString(output.TaskArn),
        TaskParameters: output.TaskParameters !== undefined && output.TaskParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
            : undefined,
        Type: smithy_client_1.expectString(output.Type),
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTaskId: smithy_client_1.expectString(output.WindowTaskId),
    };
};
const deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (output, context) => {
    return {
        Automation: output.Automation !== undefined && output.Automation !== null
            ? deserializeAws_json1_1MaintenanceWindowAutomationParameters(output.Automation, context)
            : undefined,
        Lambda: output.Lambda !== undefined && output.Lambda !== null
            ? deserializeAws_json1_1MaintenanceWindowLambdaParameters(output.Lambda, context)
            : undefined,
        RunCommand: output.RunCommand !== undefined && output.RunCommand !== null
            ? deserializeAws_json1_1MaintenanceWindowRunCommandParameters(output.RunCommand, context)
            : undefined,
        StepFunctions: output.StepFunctions !== undefined && output.StepFunctions !== null
            ? deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters(output.StepFunctions, context)
            : undefined,
    };
};
const deserializeAws_json1_1MaintenanceWindowTaskList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowTask(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowTaskParameters = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(value, context),
        };
    }, {});
};
const deserializeAws_json1_1MaintenanceWindowTaskParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MaintenanceWindowTaskParameters(entry, context);
    });
};
const deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (output, context) => {
    return {
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskParameterValueList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1MaintenanceWindowTaskParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1MaxDocumentSizeExceeded = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1MetadataMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1MetadataValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_1MetadataValue = (output, context) => {
    return {
        Value: smithy_client_1.expectString(output.Value),
    };
};
const deserializeAws_json1_1ModifyDocumentPermissionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1NonCompliantSummary = (output, context) => {
    return {
        NonCompliantCount: smithy_client_1.expectInt32(output.NonCompliantCount),
        SeveritySummary: output.SeveritySummary !== undefined && output.SeveritySummary !== null
            ? deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1NormalStringMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectString(value),
        };
    }, {});
};
const deserializeAws_json1_1NotificationConfig = (output, context) => {
    return {
        NotificationArn: smithy_client_1.expectString(output.NotificationArn),
        NotificationEvents: output.NotificationEvents !== undefined && output.NotificationEvents !== null
            ? deserializeAws_json1_1NotificationEventList(output.NotificationEvents, context)
            : undefined,
        NotificationType: smithy_client_1.expectString(output.NotificationType),
    };
};
const deserializeAws_json1_1NotificationEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1OpsEntity = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null
            ? deserializeAws_json1_1OpsEntityItemMap(output.Data, context)
            : undefined,
        Id: smithy_client_1.expectString(output.Id),
    };
};
const deserializeAws_json1_1OpsEntityItem = (output, context) => {
    return {
        CaptureTime: smithy_client_1.expectString(output.CaptureTime),
        Content: output.Content !== undefined && output.Content !== null
            ? deserializeAws_json1_1OpsEntityItemEntryList(output.Content, context)
            : undefined,
    };
};
const deserializeAws_json1_1OpsEntityItemEntry = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectString(value),
        };
    }, {});
};
const deserializeAws_json1_1OpsEntityItemEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsEntityItemEntry(entry, context);
    });
};
const deserializeAws_json1_1OpsEntityItemMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1OpsEntityItem(value, context),
        };
    }, {});
};
const deserializeAws_json1_1OpsEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsEntity(entry, context);
    });
};
const deserializeAws_json1_1OpsItem = (output, context) => {
    return {
        ActualEndTime: output.ActualEndTime !== undefined && output.ActualEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ActualEndTime)))
            : undefined,
        ActualStartTime: output.ActualStartTime !== undefined && output.ActualStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ActualStartTime)))
            : undefined,
        Category: smithy_client_1.expectString(output.Category),
        CreatedBy: smithy_client_1.expectString(output.CreatedBy),
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedTime)))
            : undefined,
        Description: smithy_client_1.expectString(output.Description),
        LastModifiedBy: smithy_client_1.expectString(output.LastModifiedBy),
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedTime)))
            : undefined,
        Notifications: output.Notifications !== undefined && output.Notifications !== null
            ? deserializeAws_json1_1OpsItemNotifications(output.Notifications, context)
            : undefined,
        OperationalData: output.OperationalData !== undefined && output.OperationalData !== null
            ? deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context)
            : undefined,
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        OpsItemType: smithy_client_1.expectString(output.OpsItemType),
        PlannedEndTime: output.PlannedEndTime !== undefined && output.PlannedEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.PlannedEndTime)))
            : undefined,
        PlannedStartTime: output.PlannedStartTime !== undefined && output.PlannedStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.PlannedStartTime)))
            : undefined,
        Priority: smithy_client_1.expectInt32(output.Priority),
        RelatedOpsItems: output.RelatedOpsItems !== undefined && output.RelatedOpsItems !== null
            ? deserializeAws_json1_1RelatedOpsItems(output.RelatedOpsItems, context)
            : undefined,
        Severity: smithy_client_1.expectString(output.Severity),
        Source: smithy_client_1.expectString(output.Source),
        Status: smithy_client_1.expectString(output.Status),
        Title: smithy_client_1.expectString(output.Title),
        Version: smithy_client_1.expectString(output.Version),
    };
};
const deserializeAws_json1_1OpsItemAlreadyExistsException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
    };
};
const deserializeAws_json1_1OpsItemDataValue = (output, context) => {
    return {
        Type: smithy_client_1.expectString(output.Type),
        Value: smithy_client_1.expectString(output.Value),
    };
};
const deserializeAws_json1_1OpsItemEventSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsItemEventSummary(entry, context);
    });
};
const deserializeAws_json1_1OpsItemEventSummary = (output, context) => {
    return {
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null
            ? deserializeAws_json1_1OpsItemIdentity(output.CreatedBy, context)
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedTime)))
            : undefined,
        Detail: smithy_client_1.expectString(output.Detail),
        DetailType: smithy_client_1.expectString(output.DetailType),
        EventId: smithy_client_1.expectString(output.EventId),
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        Source: smithy_client_1.expectString(output.Source),
    };
};
const deserializeAws_json1_1OpsItemIdentity = (output, context) => {
    return {
        Arn: smithy_client_1.expectString(output.Arn),
    };
};
const deserializeAws_json1_1OpsItemInvalidParameterException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        ParameterNames: output.ParameterNames !== undefined && output.ParameterNames !== null
            ? deserializeAws_json1_1OpsItemParameterNamesList(output.ParameterNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1OpsItemLimitExceededException = (output, context) => {
    return {
        Limit: smithy_client_1.expectInt32(output.Limit),
        LimitType: smithy_client_1.expectString(output.LimitType),
        Message: smithy_client_1.expectString(output.Message),
        ResourceTypes: output.ResourceTypes !== undefined && output.ResourceTypes !== null
            ? deserializeAws_json1_1OpsItemParameterNamesList(output.ResourceTypes, context)
            : undefined,
    };
};
const deserializeAws_json1_1OpsItemNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1OpsItemNotification = (output, context) => {
    return {
        Arn: smithy_client_1.expectString(output.Arn),
    };
};
const deserializeAws_json1_1OpsItemNotifications = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsItemNotification(entry, context);
    });
};
const deserializeAws_json1_1OpsItemOperationalData = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1OpsItemDataValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_1OpsItemParameterNamesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        ResourceUri: smithy_client_1.expectString(output.ResourceUri),
    };
};
const deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1OpsItemRelatedItemSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsItemRelatedItemSummary(entry, context);
    });
};
const deserializeAws_json1_1OpsItemRelatedItemSummary = (output, context) => {
    return {
        AssociationId: smithy_client_1.expectString(output.AssociationId),
        AssociationType: smithy_client_1.expectString(output.AssociationType),
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null
            ? deserializeAws_json1_1OpsItemIdentity(output.CreatedBy, context)
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedTime)))
            : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null
            ? deserializeAws_json1_1OpsItemIdentity(output.LastModifiedBy, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedTime)))
            : undefined,
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        ResourceType: smithy_client_1.expectString(output.ResourceType),
        ResourceUri: smithy_client_1.expectString(output.ResourceUri),
    };
};
const deserializeAws_json1_1OpsItemSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsItemSummary(entry, context);
    });
};
const deserializeAws_json1_1OpsItemSummary = (output, context) => {
    return {
        ActualEndTime: output.ActualEndTime !== undefined && output.ActualEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ActualEndTime)))
            : undefined,
        ActualStartTime: output.ActualStartTime !== undefined && output.ActualStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ActualStartTime)))
            : undefined,
        Category: smithy_client_1.expectString(output.Category),
        CreatedBy: smithy_client_1.expectString(output.CreatedBy),
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedTime)))
            : undefined,
        LastModifiedBy: smithy_client_1.expectString(output.LastModifiedBy),
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedTime)))
            : undefined,
        OperationalData: output.OperationalData !== undefined && output.OperationalData !== null
            ? deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context)
            : undefined,
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
        OpsItemType: smithy_client_1.expectString(output.OpsItemType),
        PlannedEndTime: output.PlannedEndTime !== undefined && output.PlannedEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.PlannedEndTime)))
            : undefined,
        PlannedStartTime: output.PlannedStartTime !== undefined && output.PlannedStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.PlannedStartTime)))
            : undefined,
        Priority: smithy_client_1.expectInt32(output.Priority),
        Severity: smithy_client_1.expectString(output.Severity),
        Source: smithy_client_1.expectString(output.Source),
        Status: smithy_client_1.expectString(output.Status),
        Title: smithy_client_1.expectString(output.Title),
    };
};
const deserializeAws_json1_1OpsMetadata = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreationDate)))
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedDate)))
            : undefined,
        LastModifiedUser: smithy_client_1.expectString(output.LastModifiedUser),
        OpsMetadataArn: smithy_client_1.expectString(output.OpsMetadataArn),
        ResourceId: smithy_client_1.expectString(output.ResourceId),
    };
};
const deserializeAws_json1_1OpsMetadataAlreadyExistsException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OpsMetadataInvalidArgumentException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OpsMetadataKeyLimitExceededException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OpsMetadataLimitExceededException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OpsMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OpsMetadata(entry, context);
    });
};
const deserializeAws_json1_1OpsMetadataNotFoundException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OpsMetadataTooManyUpdatesException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1OutputSource = (output, context) => {
    return {
        OutputSourceId: smithy_client_1.expectString(output.OutputSourceId),
        OutputSourceType: smithy_client_1.expectString(output.OutputSourceType),
    };
};
const deserializeAws_json1_1Parameter = (output, context) => {
    return {
        ARN: smithy_client_1.expectString(output.ARN),
        DataType: smithy_client_1.expectString(output.DataType),
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        Selector: smithy_client_1.expectString(output.Selector),
        SourceResult: smithy_client_1.expectString(output.SourceResult),
        Type: smithy_client_1.expectString(output.Type),
        Value: smithy_client_1.expectString(output.Value),
        Version: smithy_client_1.expectLong(output.Version),
    };
};
const deserializeAws_json1_1ParameterAlreadyExists = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterHistory = (output, context) => {
    return {
        AllowedPattern: smithy_client_1.expectString(output.AllowedPattern),
        DataType: smithy_client_1.expectString(output.DataType),
        Description: smithy_client_1.expectString(output.Description),
        KeyId: smithy_client_1.expectString(output.KeyId),
        Labels: output.Labels !== undefined && output.Labels !== null
            ? deserializeAws_json1_1ParameterLabelList(output.Labels, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedDate)))
            : undefined,
        LastModifiedUser: smithy_client_1.expectString(output.LastModifiedUser),
        Name: smithy_client_1.expectString(output.Name),
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_json1_1ParameterPolicyList(output.Policies, context)
            : undefined,
        Tier: smithy_client_1.expectString(output.Tier),
        Type: smithy_client_1.expectString(output.Type),
        Value: smithy_client_1.expectString(output.Value),
        Version: smithy_client_1.expectLong(output.Version),
    };
};
const deserializeAws_json1_1ParameterHistoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterHistory(entry, context);
    });
};
const deserializeAws_json1_1ParameterInlinePolicy = (output, context) => {
    return {
        PolicyStatus: smithy_client_1.expectString(output.PolicyStatus),
        PolicyText: smithy_client_1.expectString(output.PolicyText),
        PolicyType: smithy_client_1.expectString(output.PolicyType),
    };
};
const deserializeAws_json1_1ParameterLabelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1ParameterLimitExceeded = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Parameter(entry, context);
    });
};
const deserializeAws_json1_1ParameterMaxVersionLimitExceeded = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterMetadata = (output, context) => {
    return {
        AllowedPattern: smithy_client_1.expectString(output.AllowedPattern),
        DataType: smithy_client_1.expectString(output.DataType),
        Description: smithy_client_1.expectString(output.Description),
        KeyId: smithy_client_1.expectString(output.KeyId),
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedDate)))
            : undefined,
        LastModifiedUser: smithy_client_1.expectString(output.LastModifiedUser),
        Name: smithy_client_1.expectString(output.Name),
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_json1_1ParameterPolicyList(output.Policies, context)
            : undefined,
        Tier: smithy_client_1.expectString(output.Tier),
        Type: smithy_client_1.expectString(output.Type),
        Version: smithy_client_1.expectLong(output.Version),
    };
};
const deserializeAws_json1_1ParameterMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterMetadata(entry, context);
    });
};
const deserializeAws_json1_1ParameterNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1ParameterNotFound = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterPatternMismatchException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterPolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterInlinePolicy(entry, context);
    });
};
const deserializeAws_json1_1Parameters = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ParameterValueList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1ParameterVersionLabelLimitExceeded = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ParameterVersionNotFound = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1Patch = (output, context) => {
    return {
        AdvisoryIds: output.AdvisoryIds !== undefined && output.AdvisoryIds !== null
            ? deserializeAws_json1_1PatchAdvisoryIdList(output.AdvisoryIds, context)
            : undefined,
        Arch: smithy_client_1.expectString(output.Arch),
        BugzillaIds: output.BugzillaIds !== undefined && output.BugzillaIds !== null
            ? deserializeAws_json1_1PatchBugzillaIdList(output.BugzillaIds, context)
            : undefined,
        CVEIds: output.CVEIds !== undefined && output.CVEIds !== null
            ? deserializeAws_json1_1PatchCVEIdList(output.CVEIds, context)
            : undefined,
        Classification: smithy_client_1.expectString(output.Classification),
        ContentUrl: smithy_client_1.expectString(output.ContentUrl),
        Description: smithy_client_1.expectString(output.Description),
        Epoch: smithy_client_1.expectInt32(output.Epoch),
        Id: smithy_client_1.expectString(output.Id),
        KbNumber: smithy_client_1.expectString(output.KbNumber),
        Language: smithy_client_1.expectString(output.Language),
        MsrcNumber: smithy_client_1.expectString(output.MsrcNumber),
        MsrcSeverity: smithy_client_1.expectString(output.MsrcSeverity),
        Name: smithy_client_1.expectString(output.Name),
        Product: smithy_client_1.expectString(output.Product),
        ProductFamily: smithy_client_1.expectString(output.ProductFamily),
        Release: smithy_client_1.expectString(output.Release),
        ReleaseDate: output.ReleaseDate !== undefined && output.ReleaseDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ReleaseDate)))
            : undefined,
        Repository: smithy_client_1.expectString(output.Repository),
        Severity: smithy_client_1.expectString(output.Severity),
        Title: smithy_client_1.expectString(output.Title),
        Vendor: smithy_client_1.expectString(output.Vendor),
        Version: smithy_client_1.expectString(output.Version),
    };
};
const deserializeAws_json1_1PatchAdvisoryIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchBaselineIdentity = (output, context) => {
    return {
        BaselineDescription: smithy_client_1.expectString(output.BaselineDescription),
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        BaselineName: smithy_client_1.expectString(output.BaselineName),
        DefaultBaseline: smithy_client_1.expectBoolean(output.DefaultBaseline),
        OperatingSystem: smithy_client_1.expectString(output.OperatingSystem),
    };
};
const deserializeAws_json1_1PatchBaselineIdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchBaselineIdentity(entry, context);
    });
};
const deserializeAws_json1_1PatchBugzillaIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchComplianceData = (output, context) => {
    return {
        CVEIds: smithy_client_1.expectString(output.CVEIds),
        Classification: smithy_client_1.expectString(output.Classification),
        InstalledTime: output.InstalledTime !== undefined && output.InstalledTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.InstalledTime)))
            : undefined,
        KBId: smithy_client_1.expectString(output.KBId),
        Severity: smithy_client_1.expectString(output.Severity),
        State: smithy_client_1.expectString(output.State),
        Title: smithy_client_1.expectString(output.Title),
    };
};
const deserializeAws_json1_1PatchComplianceDataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchComplianceData(entry, context);
    });
};
const deserializeAws_json1_1PatchCVEIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchFilter = (output, context) => {
    return {
        Key: smithy_client_1.expectString(output.Key),
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1PatchFilterValueList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1PatchFilterGroup = (output, context) => {
    return {
        PatchFilters: output.PatchFilters !== undefined && output.PatchFilters !== null
            ? deserializeAws_json1_1PatchFilterList(output.PatchFilters, context)
            : undefined,
    };
};
const deserializeAws_json1_1PatchFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchFilter(entry, context);
    });
};
const deserializeAws_json1_1PatchFilterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchGroupPatchBaselineMapping = (output, context) => {
    return {
        BaselineIdentity: output.BaselineIdentity !== undefined && output.BaselineIdentity !== null
            ? deserializeAws_json1_1PatchBaselineIdentity(output.BaselineIdentity, context)
            : undefined,
        PatchGroup: smithy_client_1.expectString(output.PatchGroup),
    };
};
const deserializeAws_json1_1PatchGroupPatchBaselineMappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchGroupPatchBaselineMapping(entry, context);
    });
};
const deserializeAws_json1_1PatchIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Patch(entry, context);
    });
};
const deserializeAws_json1_1PatchPropertiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchPropertyEntry(entry, context);
    });
};
const deserializeAws_json1_1PatchPropertyEntry = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: smithy_client_1.expectString(value),
        };
    }, {});
};
const deserializeAws_json1_1PatchRule = (output, context) => {
    return {
        ApproveAfterDays: smithy_client_1.expectInt32(output.ApproveAfterDays),
        ApproveUntilDate: smithy_client_1.expectString(output.ApproveUntilDate),
        ComplianceLevel: smithy_client_1.expectString(output.ComplianceLevel),
        EnableNonSecurity: smithy_client_1.expectBoolean(output.EnableNonSecurity),
        PatchFilterGroup: output.PatchFilterGroup !== undefined && output.PatchFilterGroup !== null
            ? deserializeAws_json1_1PatchFilterGroup(output.PatchFilterGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1PatchRuleGroup = (output, context) => {
    return {
        PatchRules: output.PatchRules !== undefined && output.PatchRules !== null
            ? deserializeAws_json1_1PatchRuleList(output.PatchRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1PatchRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchRule(entry, context);
    });
};
const deserializeAws_json1_1PatchSource = (output, context) => {
    return {
        Configuration: smithy_client_1.expectString(output.Configuration),
        Name: smithy_client_1.expectString(output.Name),
        Products: output.Products !== undefined && output.Products !== null
            ? deserializeAws_json1_1PatchSourceProductList(output.Products, context)
            : undefined,
    };
};
const deserializeAws_json1_1PatchSourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PatchSource(entry, context);
    });
};
const deserializeAws_json1_1PatchSourceProductList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PatchStatus = (output, context) => {
    return {
        ApprovalDate: output.ApprovalDate !== undefined && output.ApprovalDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ApprovalDate)))
            : undefined,
        ComplianceLevel: smithy_client_1.expectString(output.ComplianceLevel),
        DeploymentStatus: smithy_client_1.expectString(output.DeploymentStatus),
    };
};
const deserializeAws_json1_1PlatformTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1PoliciesLimitExceededException = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1ProgressCounters = (output, context) => {
    return {
        CancelledSteps: smithy_client_1.expectInt32(output.CancelledSteps),
        FailedSteps: smithy_client_1.expectInt32(output.FailedSteps),
        SuccessSteps: smithy_client_1.expectInt32(output.SuccessSteps),
        TimedOutSteps: smithy_client_1.expectInt32(output.TimedOutSteps),
        TotalSteps: smithy_client_1.expectInt32(output.TotalSteps),
    };
};
const deserializeAws_json1_1PutComplianceItemsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutInventoryResult = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1PutParameterResult = (output, context) => {
    return {
        Tier: smithy_client_1.expectString(output.Tier),
        Version: smithy_client_1.expectLong(output.Version),
    };
};
const deserializeAws_json1_1Regions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1RegisterDefaultPatchBaselineResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
    };
};
const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult = (output, context) => {
    return {
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        PatchGroup: smithy_client_1.expectString(output.PatchGroup),
    };
};
const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult = (output, context) => {
    return {
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult = (output, context) => {
    return {
        WindowTaskId: smithy_client_1.expectString(output.WindowTaskId),
    };
};
const deserializeAws_json1_1RelatedOpsItem = (output, context) => {
    return {
        OpsItemId: smithy_client_1.expectString(output.OpsItemId),
    };
};
const deserializeAws_json1_1RelatedOpsItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelatedOpsItem(entry, context);
    });
};
const deserializeAws_json1_1RemoveTagsFromResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResetServiceSettingResult = (output, context) => {
    return {
        ServiceSetting: output.ServiceSetting !== undefined && output.ServiceSetting !== null
            ? deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResolvedTargets = (output, context) => {
    return {
        ParameterValues: output.ParameterValues !== undefined && output.ParameterValues !== null
            ? deserializeAws_json1_1TargetParameterList(output.ParameterValues, context)
            : undefined,
        Truncated: smithy_client_1.expectBoolean(output.Truncated),
    };
};
const deserializeAws_json1_1ResourceComplianceSummaryItem = (output, context) => {
    return {
        ComplianceType: smithy_client_1.expectString(output.ComplianceType),
        CompliantSummary: output.CompliantSummary !== undefined && output.CompliantSummary !== null
            ? deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context)
            : undefined,
        ExecutionSummary: output.ExecutionSummary !== undefined && output.ExecutionSummary !== null
            ? deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context)
            : undefined,
        NonCompliantSummary: output.NonCompliantSummary !== undefined && output.NonCompliantSummary !== null
            ? deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context)
            : undefined,
        OverallSeverity: smithy_client_1.expectString(output.OverallSeverity),
        ResourceId: smithy_client_1.expectString(output.ResourceId),
        ResourceType: smithy_client_1.expectString(output.ResourceType),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1ResourceComplianceSummaryItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceComplianceSummaryItem(entry, context);
    });
};
const deserializeAws_json1_1ResourceDataSyncAlreadyExistsException = (output, context) => {
    return {
        SyncName: smithy_client_1.expectString(output.SyncName),
    };
};
const deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (output, context) => {
    return {
        OrganizationSourceType: smithy_client_1.expectString(output.OrganizationSourceType),
        OrganizationalUnits: output.OrganizationalUnits !== undefined && output.OrganizationalUnits !== null
            ? deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList(output.OrganizationalUnits, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceDataSyncConflictException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1ResourceDataSyncCountExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1ResourceDataSyncDestinationDataSharing = (output, context) => {
    return {
        DestinationDataSharingType: smithy_client_1.expectString(output.DestinationDataSharingType),
    };
};
const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1ResourceDataSyncItem = (output, context) => {
    return {
        LastStatus: smithy_client_1.expectString(output.LastStatus),
        LastSuccessfulSyncTime: output.LastSuccessfulSyncTime !== undefined && output.LastSuccessfulSyncTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastSuccessfulSyncTime)))
            : undefined,
        LastSyncStatusMessage: smithy_client_1.expectString(output.LastSyncStatusMessage),
        LastSyncTime: output.LastSyncTime !== undefined && output.LastSyncTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastSyncTime)))
            : undefined,
        S3Destination: output.S3Destination !== undefined && output.S3Destination !== null
            ? deserializeAws_json1_1ResourceDataSyncS3Destination(output.S3Destination, context)
            : undefined,
        SyncCreatedTime: output.SyncCreatedTime !== undefined && output.SyncCreatedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.SyncCreatedTime)))
            : undefined,
        SyncLastModifiedTime: output.SyncLastModifiedTime !== undefined && output.SyncLastModifiedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.SyncLastModifiedTime)))
            : undefined,
        SyncName: smithy_client_1.expectString(output.SyncName),
        SyncSource: output.SyncSource !== undefined && output.SyncSource !== null
            ? deserializeAws_json1_1ResourceDataSyncSourceWithState(output.SyncSource, context)
            : undefined,
        SyncType: smithy_client_1.expectString(output.SyncType),
    };
};
const deserializeAws_json1_1ResourceDataSyncItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceDataSyncItem(entry, context);
    });
};
const deserializeAws_json1_1ResourceDataSyncNotFoundException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        SyncName: smithy_client_1.expectString(output.SyncName),
        SyncType: smithy_client_1.expectString(output.SyncType),
    };
};
const deserializeAws_json1_1ResourceDataSyncOrganizationalUnit = (output, context) => {
    return {
        OrganizationalUnitId: smithy_client_1.expectString(output.OrganizationalUnitId),
    };
};
const deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context);
    });
};
const deserializeAws_json1_1ResourceDataSyncS3Destination = (output, context) => {
    return {
        AWSKMSKeyARN: smithy_client_1.expectString(output.AWSKMSKeyARN),
        BucketName: smithy_client_1.expectString(output.BucketName),
        DestinationDataSharing: output.DestinationDataSharing !== undefined && output.DestinationDataSharing !== null
            ? deserializeAws_json1_1ResourceDataSyncDestinationDataSharing(output.DestinationDataSharing, context)
            : undefined,
        Prefix: smithy_client_1.expectString(output.Prefix),
        Region: smithy_client_1.expectString(output.Region),
        SyncFormat: smithy_client_1.expectString(output.SyncFormat),
    };
};
const deserializeAws_json1_1ResourceDataSyncSourceRegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1ResourceDataSyncSourceWithState = (output, context) => {
    return {
        AwsOrganizationsSource: output.AwsOrganizationsSource !== undefined && output.AwsOrganizationsSource !== null
            ? deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(output.AwsOrganizationsSource, context)
            : undefined,
        EnableAllOpsDataSources: smithy_client_1.expectBoolean(output.EnableAllOpsDataSources),
        IncludeFutureRegions: smithy_client_1.expectBoolean(output.IncludeFutureRegions),
        SourceRegions: output.SourceRegions !== undefined && output.SourceRegions !== null
            ? deserializeAws_json1_1ResourceDataSyncSourceRegionList(output.SourceRegions, context)
            : undefined,
        SourceType: smithy_client_1.expectString(output.SourceType),
        State: smithy_client_1.expectString(output.State),
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1ResumeSessionResponse = (output, context) => {
    return {
        SessionId: smithy_client_1.expectString(output.SessionId),
        StreamUrl: smithy_client_1.expectString(output.StreamUrl),
        TokenValue: smithy_client_1.expectString(output.TokenValue),
    };
};
const deserializeAws_json1_1ReviewInformation = (output, context) => {
    return {
        ReviewedTime: output.ReviewedTime !== undefined && output.ReviewedTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ReviewedTime)))
            : undefined,
        Reviewer: smithy_client_1.expectString(output.Reviewer),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1ReviewInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReviewInformation(entry, context);
    });
};
const deserializeAws_json1_1Runbook = (output, context) => {
    return {
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        DocumentVersion: smithy_client_1.expectString(output.DocumentVersion),
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context)
            : undefined,
        TargetLocations: output.TargetLocations !== undefined && output.TargetLocations !== null
            ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
            : undefined,
        TargetParameterName: smithy_client_1.expectString(output.TargetParameterName),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1Runbooks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Runbook(entry, context);
    });
};
const deserializeAws_json1_1S3OutputLocation = (output, context) => {
    return {
        OutputS3BucketName: smithy_client_1.expectString(output.OutputS3BucketName),
        OutputS3KeyPrefix: smithy_client_1.expectString(output.OutputS3KeyPrefix),
        OutputS3Region: smithy_client_1.expectString(output.OutputS3Region),
    };
};
const deserializeAws_json1_1S3OutputUrl = (output, context) => {
    return {
        OutputUrl: smithy_client_1.expectString(output.OutputUrl),
    };
};
const deserializeAws_json1_1ScheduledWindowExecution = (output, context) => {
    return {
        ExecutionTime: smithy_client_1.expectString(output.ExecutionTime),
        Name: smithy_client_1.expectString(output.Name),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1ScheduledWindowExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ScheduledWindowExecution(entry, context);
    });
};
const deserializeAws_json1_1SendAutomationSignalResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1SendCommandResult = (output, context) => {
    return {
        Command: output.Command !== undefined && output.Command !== null
            ? deserializeAws_json1_1Command(output.Command, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServiceSetting = (output, context) => {
    return {
        ARN: smithy_client_1.expectString(output.ARN),
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.LastModifiedDate)))
            : undefined,
        LastModifiedUser: smithy_client_1.expectString(output.LastModifiedUser),
        SettingId: smithy_client_1.expectString(output.SettingId),
        SettingValue: smithy_client_1.expectString(output.SettingValue),
        Status: smithy_client_1.expectString(output.Status),
    };
};
const deserializeAws_json1_1ServiceSettingNotFound = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1Session = (output, context) => {
    return {
        Details: smithy_client_1.expectString(output.Details),
        DocumentName: smithy_client_1.expectString(output.DocumentName),
        EndDate: output.EndDate !== undefined && output.EndDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.EndDate)))
            : undefined,
        OutputUrl: output.OutputUrl !== undefined && output.OutputUrl !== null
            ? deserializeAws_json1_1SessionManagerOutputUrl(output.OutputUrl, context)
            : undefined,
        Owner: smithy_client_1.expectString(output.Owner),
        SessionId: smithy_client_1.expectString(output.SessionId),
        StartDate: output.StartDate !== undefined && output.StartDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.StartDate)))
            : undefined,
        Status: smithy_client_1.expectString(output.Status),
        Target: smithy_client_1.expectString(output.Target),
    };
};
const deserializeAws_json1_1SessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Session(entry, context);
    });
};
const deserializeAws_json1_1SessionManagerOutputUrl = (output, context) => {
    return {
        CloudWatchOutputUrl: smithy_client_1.expectString(output.CloudWatchOutputUrl),
        S3OutputUrl: smithy_client_1.expectString(output.S3OutputUrl),
    };
};
const deserializeAws_json1_1SeveritySummary = (output, context) => {
    return {
        CriticalCount: smithy_client_1.expectInt32(output.CriticalCount),
        HighCount: smithy_client_1.expectInt32(output.HighCount),
        InformationalCount: smithy_client_1.expectInt32(output.InformationalCount),
        LowCount: smithy_client_1.expectInt32(output.LowCount),
        MediumCount: smithy_client_1.expectInt32(output.MediumCount),
        UnspecifiedCount: smithy_client_1.expectInt32(output.UnspecifiedCount),
    };
};
const deserializeAws_json1_1StartAssociationsOnceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartAutomationExecutionResult = (output, context) => {
    return {
        AutomationExecutionId: smithy_client_1.expectString(output.AutomationExecutionId),
    };
};
const deserializeAws_json1_1StartChangeRequestExecutionResult = (output, context) => {
    return {
        AutomationExecutionId: smithy_client_1.expectString(output.AutomationExecutionId),
    };
};
const deserializeAws_json1_1StartSessionResponse = (output, context) => {
    return {
        SessionId: smithy_client_1.expectString(output.SessionId),
        StreamUrl: smithy_client_1.expectString(output.StreamUrl),
        TokenValue: smithy_client_1.expectString(output.TokenValue),
    };
};
const deserializeAws_json1_1StatusUnchanged = (output, context) => {
    return {};
};
const deserializeAws_json1_1StepExecution = (output, context) => {
    return {
        Action: smithy_client_1.expectString(output.Action),
        ExecutionEndTime: output.ExecutionEndTime !== undefined && output.ExecutionEndTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionEndTime)))
            : undefined,
        ExecutionStartTime: output.ExecutionStartTime !== undefined && output.ExecutionStartTime !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ExecutionStartTime)))
            : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context)
            : undefined,
        FailureMessage: smithy_client_1.expectString(output.FailureMessage),
        Inputs: output.Inputs !== undefined && output.Inputs !== null
            ? deserializeAws_json1_1NormalStringMap(output.Inputs, context)
            : undefined,
        IsCritical: smithy_client_1.expectBoolean(output.IsCritical),
        IsEnd: smithy_client_1.expectBoolean(output.IsEnd),
        MaxAttempts: smithy_client_1.expectInt32(output.MaxAttempts),
        NextStep: smithy_client_1.expectString(output.NextStep),
        OnFailure: smithy_client_1.expectString(output.OnFailure),
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context)
            : undefined,
        OverriddenParameters: output.OverriddenParameters !== undefined && output.OverriddenParameters !== null
            ? deserializeAws_json1_1AutomationParameterMap(output.OverriddenParameters, context)
            : undefined,
        Response: smithy_client_1.expectString(output.Response),
        ResponseCode: smithy_client_1.expectString(output.ResponseCode),
        StepExecutionId: smithy_client_1.expectString(output.StepExecutionId),
        StepName: smithy_client_1.expectString(output.StepName),
        StepStatus: smithy_client_1.expectString(output.StepStatus),
        TargetLocation: output.TargetLocation !== undefined && output.TargetLocation !== null
            ? deserializeAws_json1_1TargetLocation(output.TargetLocation, context)
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        TimeoutSeconds: smithy_client_1.expectLong(output.TimeoutSeconds),
        ValidNextSteps: output.ValidNextSteps !== undefined && output.ValidNextSteps !== null
            ? deserializeAws_json1_1ValidNextStepList(output.ValidNextSteps, context)
            : undefined,
    };
};
const deserializeAws_json1_1StepExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StepExecution(entry, context);
    });
};
const deserializeAws_json1_1StopAutomationExecutionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1SubTypeCountLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: smithy_client_1.expectString(output.Key),
        Value: smithy_client_1.expectString(output.Value),
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1Target = (output, context) => {
    return {
        Key: smithy_client_1.expectString(output.Key),
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1TargetValues(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1TargetInUseException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1TargetLocation = (output, context) => {
    return {
        Accounts: output.Accounts !== undefined && output.Accounts !== null
            ? deserializeAws_json1_1Accounts(output.Accounts, context)
            : undefined,
        ExecutionRoleName: smithy_client_1.expectString(output.ExecutionRoleName),
        Regions: output.Regions !== undefined && output.Regions !== null
            ? deserializeAws_json1_1Regions(output.Regions, context)
            : undefined,
        TargetLocationMaxConcurrency: smithy_client_1.expectString(output.TargetLocationMaxConcurrency),
        TargetLocationMaxErrors: smithy_client_1.expectString(output.TargetLocationMaxErrors),
    };
};
const deserializeAws_json1_1TargetLocations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetLocation(entry, context);
    });
};
const deserializeAws_json1_1TargetMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1TargetMapValueList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1TargetMaps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetMap(entry, context);
    });
};
const deserializeAws_json1_1TargetMapValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1TargetNotConnected = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1TargetParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1Targets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Target(entry, context);
    });
};
const deserializeAws_json1_1TargetValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeAws_json1_1TerminateSessionResponse = (output, context) => {
    return {
        SessionId: smithy_client_1.expectString(output.SessionId),
    };
};
const deserializeAws_json1_1TooManyTagsError = (output, context) => {
    return {};
};
const deserializeAws_json1_1TooManyUpdates = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1TotalSizeLimitExceededException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UnlabelParameterVersionResult = (output, context) => {
    return {
        InvalidLabels: output.InvalidLabels !== undefined && output.InvalidLabels !== null
            ? deserializeAws_json1_1ParameterLabelList(output.InvalidLabels, context)
            : undefined,
        RemovedLabels: output.RemovedLabels !== undefined && output.RemovedLabels !== null
            ? deserializeAws_json1_1ParameterLabelList(output.RemovedLabels, context)
            : undefined,
    };
};
const deserializeAws_json1_1UnsupportedCalendarException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UnsupportedFeatureRequiredException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UnsupportedInventoryItemContextException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
        TypeName: smithy_client_1.expectString(output.TypeName),
    };
};
const deserializeAws_json1_1UnsupportedInventorySchemaVersionException = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UnsupportedOperatingSystem = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UnsupportedParameterType = (output, context) => {
    return {
        message: smithy_client_1.expectString(output.message),
    };
};
const deserializeAws_json1_1UnsupportedPlatformType = (output, context) => {
    return {
        Message: smithy_client_1.expectString(output.Message),
    };
};
const deserializeAws_json1_1UpdateAssociationResult = (output, context) => {
    return {
        AssociationDescription: output.AssociationDescription !== undefined && output.AssociationDescription !== null
            ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateAssociationStatusResult = (output, context) => {
    return {
        AssociationDescription: output.AssociationDescription !== undefined && output.AssociationDescription !== null
            ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDocumentDefaultVersionResult = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null
            ? deserializeAws_json1_1DocumentDefaultVersionDescription(output.Description, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDocumentMetadataResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDocumentResult = (output, context) => {
    return {
        DocumentDescription: output.DocumentDescription !== undefined && output.DocumentDescription !== null
            ? deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateMaintenanceWindowResult = (output, context) => {
    return {
        AllowUnassociatedTargets: smithy_client_1.expectBoolean(output.AllowUnassociatedTargets),
        Cutoff: smithy_client_1.expectInt32(output.Cutoff),
        Description: smithy_client_1.expectString(output.Description),
        Duration: smithy_client_1.expectInt32(output.Duration),
        Enabled: smithy_client_1.expectBoolean(output.Enabled),
        EndDate: smithy_client_1.expectString(output.EndDate),
        Name: smithy_client_1.expectString(output.Name),
        Schedule: smithy_client_1.expectString(output.Schedule),
        ScheduleOffset: smithy_client_1.expectInt32(output.ScheduleOffset),
        ScheduleTimezone: smithy_client_1.expectString(output.ScheduleTimezone),
        StartDate: smithy_client_1.expectString(output.StartDate),
        WindowId: smithy_client_1.expectString(output.WindowId),
    };
};
const deserializeAws_json1_1UpdateMaintenanceWindowTargetResult = (output, context) => {
    return {
        Description: smithy_client_1.expectString(output.Description),
        Name: smithy_client_1.expectString(output.Name),
        OwnerInformation: smithy_client_1.expectString(output.OwnerInformation),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTargetId: smithy_client_1.expectString(output.WindowTargetId),
    };
};
const deserializeAws_json1_1UpdateMaintenanceWindowTaskResult = (output, context) => {
    return {
        CutoffBehavior: smithy_client_1.expectString(output.CutoffBehavior),
        Description: smithy_client_1.expectString(output.Description),
        LoggingInfo: output.LoggingInfo !== undefined && output.LoggingInfo !== null
            ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context)
            : undefined,
        MaxConcurrency: smithy_client_1.expectString(output.MaxConcurrency),
        MaxErrors: smithy_client_1.expectString(output.MaxErrors),
        Name: smithy_client_1.expectString(output.Name),
        Priority: smithy_client_1.expectInt32(output.Priority),
        ServiceRoleArn: smithy_client_1.expectString(output.ServiceRoleArn),
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1Targets(output.Targets, context)
            : undefined,
        TaskArn: smithy_client_1.expectString(output.TaskArn),
        TaskInvocationParameters: output.TaskInvocationParameters !== undefined && output.TaskInvocationParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
            : undefined,
        TaskParameters: output.TaskParameters !== undefined && output.TaskParameters !== null
            ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
            : undefined,
        WindowId: smithy_client_1.expectString(output.WindowId),
        WindowTaskId: smithy_client_1.expectString(output.WindowTaskId),
    };
};
const deserializeAws_json1_1UpdateManagedInstanceRoleResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateOpsItemResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateOpsMetadataResult = (output, context) => {
    return {
        OpsMetadataArn: smithy_client_1.expectString(output.OpsMetadataArn),
    };
};
const deserializeAws_json1_1UpdatePatchBaselineResult = (output, context) => {
    return {
        ApprovalRules: output.ApprovalRules !== undefined && output.ApprovalRules !== null
            ? deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context)
            : undefined,
        ApprovedPatches: output.ApprovedPatches !== undefined && output.ApprovedPatches !== null
            ? deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context)
            : undefined,
        ApprovedPatchesComplianceLevel: smithy_client_1.expectString(output.ApprovedPatchesComplianceLevel),
        ApprovedPatchesEnableNonSecurity: smithy_client_1.expectBoolean(output.ApprovedPatchesEnableNonSecurity),
        BaselineId: smithy_client_1.expectString(output.BaselineId),
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.CreatedDate)))
            : undefined,
        Description: smithy_client_1.expectString(output.Description),
        GlobalFilters: output.GlobalFilters !== undefined && output.GlobalFilters !== null
            ? deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context)
            : undefined,
        ModifiedDate: output.ModifiedDate !== undefined && output.ModifiedDate !== null
            ? smithy_client_1.expectNonNull(smithy_client_1.parseEpochTimestamp(smithy_client_1.expectNumber(output.ModifiedDate)))
            : undefined,
        Name: smithy_client_1.expectString(output.Name),
        OperatingSystem: smithy_client_1.expectString(output.OperatingSystem),
        RejectedPatches: output.RejectedPatches !== undefined && output.RejectedPatches !== null
            ? deserializeAws_json1_1PatchIdList(output.RejectedPatches, context)
            : undefined,
        RejectedPatchesAction: smithy_client_1.expectString(output.RejectedPatchesAction),
        Sources: output.Sources !== undefined && output.Sources !== null
            ? deserializeAws_json1_1PatchSourceList(output.Sources, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateResourceDataSyncResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateServiceSettingResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ValidNextStepList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return smithy_client_1.expectString(entry);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
