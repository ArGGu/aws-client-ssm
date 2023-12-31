import { __extends } from "tslib";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { AssociateOpsItemRelatedItemCommand, } from "./commands/AssociateOpsItemRelatedItemCommand";
import { CancelCommandCommand, } from "./commands/CancelCommandCommand";
import { CancelMaintenanceWindowExecutionCommand, } from "./commands/CancelMaintenanceWindowExecutionCommand";
import { CreateActivationCommand, } from "./commands/CreateActivationCommand";
import { CreateAssociationBatchCommand, } from "./commands/CreateAssociationBatchCommand";
import { CreateAssociationCommand, } from "./commands/CreateAssociationCommand";
import { CreateDocumentCommand, } from "./commands/CreateDocumentCommand";
import { CreateMaintenanceWindowCommand, } from "./commands/CreateMaintenanceWindowCommand";
import { CreateOpsItemCommand, } from "./commands/CreateOpsItemCommand";
import { CreateOpsMetadataCommand, } from "./commands/CreateOpsMetadataCommand";
import { CreatePatchBaselineCommand, } from "./commands/CreatePatchBaselineCommand";
import { CreateResourceDataSyncCommand, } from "./commands/CreateResourceDataSyncCommand";
import { DeleteActivationCommand, } from "./commands/DeleteActivationCommand";
import { DeleteAssociationCommand, } from "./commands/DeleteAssociationCommand";
import { DeleteDocumentCommand, } from "./commands/DeleteDocumentCommand";
import { DeleteInventoryCommand, } from "./commands/DeleteInventoryCommand";
import { DeleteMaintenanceWindowCommand, } from "./commands/DeleteMaintenanceWindowCommand";
import { DeleteOpsMetadataCommand, } from "./commands/DeleteOpsMetadataCommand";
import { DeleteParameterCommand, } from "./commands/DeleteParameterCommand";
import { DeleteParametersCommand, } from "./commands/DeleteParametersCommand";
import { DeletePatchBaselineCommand, } from "./commands/DeletePatchBaselineCommand";
import { DeleteResourceDataSyncCommand, } from "./commands/DeleteResourceDataSyncCommand";
import { DeregisterManagedInstanceCommand, } from "./commands/DeregisterManagedInstanceCommand";
import { DeregisterPatchBaselineForPatchGroupCommand, } from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import { DeregisterTargetFromMaintenanceWindowCommand, } from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import { DeregisterTaskFromMaintenanceWindowCommand, } from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import { DescribeActivationsCommand, } from "./commands/DescribeActivationsCommand";
import { DescribeAssociationCommand, } from "./commands/DescribeAssociationCommand";
import { DescribeAssociationExecutionsCommand, } from "./commands/DescribeAssociationExecutionsCommand";
import { DescribeAssociationExecutionTargetsCommand, } from "./commands/DescribeAssociationExecutionTargetsCommand";
import { DescribeAutomationExecutionsCommand, } from "./commands/DescribeAutomationExecutionsCommand";
import { DescribeAutomationStepExecutionsCommand, } from "./commands/DescribeAutomationStepExecutionsCommand";
import { DescribeAvailablePatchesCommand, } from "./commands/DescribeAvailablePatchesCommand";
import { DescribeDocumentCommand, } from "./commands/DescribeDocumentCommand";
import { DescribeDocumentPermissionCommand, } from "./commands/DescribeDocumentPermissionCommand";
import { DescribeEffectiveInstanceAssociationsCommand, } from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import { DescribeEffectivePatchesForPatchBaselineCommand, } from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { DescribeInstanceAssociationsStatusCommand, } from "./commands/DescribeInstanceAssociationsStatusCommand";
import { DescribeInstanceInformationCommand, } from "./commands/DescribeInstanceInformationCommand";
import { DescribeInstancePatchesCommand, } from "./commands/DescribeInstancePatchesCommand";
import { DescribeInstancePatchStatesCommand, } from "./commands/DescribeInstancePatchStatesCommand";
import { DescribeInstancePatchStatesForPatchGroupCommand, } from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { DescribeInventoryDeletionsCommand, } from "./commands/DescribeInventoryDeletionsCommand";
import { DescribeMaintenanceWindowExecutionsCommand, } from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommand, } from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { DescribeMaintenanceWindowExecutionTasksCommand, } from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { DescribeMaintenanceWindowScheduleCommand, } from "./commands/DescribeMaintenanceWindowScheduleCommand";
import { DescribeMaintenanceWindowsCommand, } from "./commands/DescribeMaintenanceWindowsCommand";
import { DescribeMaintenanceWindowsForTargetCommand, } from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import { DescribeMaintenanceWindowTargetsCommand, } from "./commands/DescribeMaintenanceWindowTargetsCommand";
import { DescribeMaintenanceWindowTasksCommand, } from "./commands/DescribeMaintenanceWindowTasksCommand";
import { DescribeOpsItemsCommand, } from "./commands/DescribeOpsItemsCommand";
import { DescribeParametersCommand, } from "./commands/DescribeParametersCommand";
import { DescribePatchBaselinesCommand, } from "./commands/DescribePatchBaselinesCommand";
import { DescribePatchGroupsCommand, } from "./commands/DescribePatchGroupsCommand";
import { DescribePatchGroupStateCommand, } from "./commands/DescribePatchGroupStateCommand";
import { DescribePatchPropertiesCommand, } from "./commands/DescribePatchPropertiesCommand";
import { DescribeSessionsCommand, } from "./commands/DescribeSessionsCommand";
import { DisassociateOpsItemRelatedItemCommand, } from "./commands/DisassociateOpsItemRelatedItemCommand";
import { GetAutomationExecutionCommand, } from "./commands/GetAutomationExecutionCommand";
import { GetCalendarStateCommand, } from "./commands/GetCalendarStateCommand";
import { GetCommandInvocationCommand, } from "./commands/GetCommandInvocationCommand";
import { GetConnectionStatusCommand, } from "./commands/GetConnectionStatusCommand";
import { GetDefaultPatchBaselineCommand, } from "./commands/GetDefaultPatchBaselineCommand";
import { GetDeployablePatchSnapshotForInstanceCommand, } from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommand } from "./commands/GetDocumentCommand";
import { GetInventoryCommand, } from "./commands/GetInventoryCommand";
import { GetInventorySchemaCommand, } from "./commands/GetInventorySchemaCommand";
import { GetMaintenanceWindowCommand, } from "./commands/GetMaintenanceWindowCommand";
import { GetMaintenanceWindowExecutionCommand, } from "./commands/GetMaintenanceWindowExecutionCommand";
import { GetMaintenanceWindowExecutionTaskCommand, } from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import { GetMaintenanceWindowExecutionTaskInvocationCommand, } from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import { GetMaintenanceWindowTaskCommand, } from "./commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommand } from "./commands/GetOpsItemCommand";
import { GetOpsMetadataCommand, } from "./commands/GetOpsMetadataCommand";
import { GetOpsSummaryCommand, } from "./commands/GetOpsSummaryCommand";
import { GetParameterCommand, } from "./commands/GetParameterCommand";
import { GetParameterHistoryCommand, } from "./commands/GetParameterHistoryCommand";
import { GetParametersByPathCommand, } from "./commands/GetParametersByPathCommand";
import { GetParametersCommand, } from "./commands/GetParametersCommand";
import { GetPatchBaselineCommand, } from "./commands/GetPatchBaselineCommand";
import { GetPatchBaselineForPatchGroupCommand, } from "./commands/GetPatchBaselineForPatchGroupCommand";
import { GetServiceSettingCommand, } from "./commands/GetServiceSettingCommand";
import { LabelParameterVersionCommand, } from "./commands/LabelParameterVersionCommand";
import { ListAssociationsCommand, } from "./commands/ListAssociationsCommand";
import { ListAssociationVersionsCommand, } from "./commands/ListAssociationVersionsCommand";
import { ListCommandInvocationsCommand, } from "./commands/ListCommandInvocationsCommand";
import { ListCommandsCommand, } from "./commands/ListCommandsCommand";
import { ListComplianceItemsCommand, } from "./commands/ListComplianceItemsCommand";
import { ListComplianceSummariesCommand, } from "./commands/ListComplianceSummariesCommand";
import { ListDocumentMetadataHistoryCommand, } from "./commands/ListDocumentMetadataHistoryCommand";
import { ListDocumentsCommand, } from "./commands/ListDocumentsCommand";
import { ListDocumentVersionsCommand, } from "./commands/ListDocumentVersionsCommand";
import { ListInventoryEntriesCommand, } from "./commands/ListInventoryEntriesCommand";
import { ListOpsItemEventsCommand, } from "./commands/ListOpsItemEventsCommand";
import { ListOpsItemRelatedItemsCommand, } from "./commands/ListOpsItemRelatedItemsCommand";
import { ListOpsMetadataCommand, } from "./commands/ListOpsMetadataCommand";
import { ListResourceComplianceSummariesCommand, } from "./commands/ListResourceComplianceSummariesCommand";
import { ListResourceDataSyncCommand, } from "./commands/ListResourceDataSyncCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyDocumentPermissionCommand, } from "./commands/ModifyDocumentPermissionCommand";
import { PutComplianceItemsCommand, } from "./commands/PutComplianceItemsCommand";
import { PutInventoryCommand, } from "./commands/PutInventoryCommand";
import { PutParameterCommand, } from "./commands/PutParameterCommand";
import { RegisterDefaultPatchBaselineCommand, } from "./commands/RegisterDefaultPatchBaselineCommand";
import { RegisterPatchBaselineForPatchGroupCommand, } from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import { RegisterTargetWithMaintenanceWindowCommand, } from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import { RegisterTaskWithMaintenanceWindowCommand, } from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { ResetServiceSettingCommand, } from "./commands/ResetServiceSettingCommand";
import { ResumeSessionCommand, } from "./commands/ResumeSessionCommand";
import { SendAutomationSignalCommand, } from "./commands/SendAutomationSignalCommand";
import { SendCommandCommand } from "./commands/SendCommandCommand";
import { StartAssociationsOnceCommand, } from "./commands/StartAssociationsOnceCommand";
import { StartAutomationExecutionCommand, } from "./commands/StartAutomationExecutionCommand";
import { StartChangeRequestExecutionCommand, } from "./commands/StartChangeRequestExecutionCommand";
import { StartSessionCommand, } from "./commands/StartSessionCommand";
import { StopAutomationExecutionCommand, } from "./commands/StopAutomationExecutionCommand";
import { TerminateSessionCommand, } from "./commands/TerminateSessionCommand";
import { UnlabelParameterVersionCommand, } from "./commands/UnlabelParameterVersionCommand";
import { UpdateAssociationCommand, } from "./commands/UpdateAssociationCommand";
import { UpdateAssociationStatusCommand, } from "./commands/UpdateAssociationStatusCommand";
import { UpdateDocumentCommand, } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentDefaultVersionCommand, } from "./commands/UpdateDocumentDefaultVersionCommand";
import { UpdateDocumentMetadataCommand, } from "./commands/UpdateDocumentMetadataCommand";
import { UpdateMaintenanceWindowCommand, } from "./commands/UpdateMaintenanceWindowCommand";
import { UpdateMaintenanceWindowTargetCommand, } from "./commands/UpdateMaintenanceWindowTargetCommand";
import { UpdateMaintenanceWindowTaskCommand, } from "./commands/UpdateMaintenanceWindowTaskCommand";
import { UpdateManagedInstanceRoleCommand, } from "./commands/UpdateManagedInstanceRoleCommand";
import { UpdateOpsItemCommand, } from "./commands/UpdateOpsItemCommand";
import { UpdateOpsMetadataCommand, } from "./commands/UpdateOpsMetadataCommand";
import { UpdatePatchBaselineCommand, } from "./commands/UpdatePatchBaselineCommand";
import { UpdateResourceDataSyncCommand, } from "./commands/UpdateResourceDataSyncCommand";
import { UpdateServiceSettingCommand, } from "./commands/UpdateServiceSettingCommand";
import { SSMClient } from "./SSMClient";
var SSM = (function (_super) {
    __extends(SSM, _super);
    function SSM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSM.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
        var command = new AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.associateOpsItemRelatedItem = function (args, optionsOrCb, cb) {
        var command = new AssociateOpsItemRelatedItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.cancelCommand = function (args, optionsOrCb, cb) {
        var command = new CancelCommandCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.cancelMaintenanceWindowExecution = function (args, optionsOrCb, cb) {
        var command = new CancelMaintenanceWindowExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createActivation = function (args, optionsOrCb, cb) {
        var command = new CreateActivationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createAssociation = function (args, optionsOrCb, cb) {
        var command = new CreateAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createAssociationBatch = function (args, optionsOrCb, cb) {
        var command = new CreateAssociationBatchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createDocument = function (args, optionsOrCb, cb) {
        var command = new CreateDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new CreateMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createOpsItem = function (args, optionsOrCb, cb) {
        var command = new CreateOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createOpsMetadata = function (args, optionsOrCb, cb) {
        var command = new CreateOpsMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createPatchBaseline = function (args, optionsOrCb, cb) {
        var command = new CreatePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.createResourceDataSync = function (args, optionsOrCb, cb) {
        var command = new CreateResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteActivation = function (args, optionsOrCb, cb) {
        var command = new DeleteActivationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteDocument = function (args, optionsOrCb, cb) {
        var command = new DeleteDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteInventory = function (args, optionsOrCb, cb) {
        var command = new DeleteInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new DeleteMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteOpsMetadata = function (args, optionsOrCb, cb) {
        var command = new DeleteOpsMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteParameter = function (args, optionsOrCb, cb) {
        var command = new DeleteParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteParameters = function (args, optionsOrCb, cb) {
        var command = new DeleteParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deletePatchBaseline = function (args, optionsOrCb, cb) {
        var command = new DeletePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deleteResourceDataSync = function (args, optionsOrCb, cb) {
        var command = new DeleteResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deregisterManagedInstance = function (args, optionsOrCb, cb) {
        var command = new DeregisterManagedInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deregisterPatchBaselineForPatchGroup = function (args, optionsOrCb, cb) {
        var command = new DeregisterPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deregisterTargetFromMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new DeregisterTargetFromMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.deregisterTaskFromMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new DeregisterTaskFromMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeActivations = function (args, optionsOrCb, cb) {
        var command = new DescribeActivationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAssociation = function (args, optionsOrCb, cb) {
        var command = new DescribeAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAssociationExecutions = function (args, optionsOrCb, cb) {
        var command = new DescribeAssociationExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAssociationExecutionTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeAssociationExecutionTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAutomationExecutions = function (args, optionsOrCb, cb) {
        var command = new DescribeAutomationExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAutomationStepExecutions = function (args, optionsOrCb, cb) {
        var command = new DescribeAutomationStepExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeAvailablePatches = function (args, optionsOrCb, cb) {
        var command = new DescribeAvailablePatchesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeDocument = function (args, optionsOrCb, cb) {
        var command = new DescribeDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeDocumentPermission = function (args, optionsOrCb, cb) {
        var command = new DescribeDocumentPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeEffectiveInstanceAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeEffectiveInstanceAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeEffectivePatchesForPatchBaseline = function (args, optionsOrCb, cb) {
        var command = new DescribeEffectivePatchesForPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInstanceAssociationsStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceAssociationsStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInstanceInformation = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInstancePatches = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancePatchesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInstancePatchStates = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancePatchStatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInstancePatchStatesForPatchGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancePatchStatesForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeInventoryDeletions = function (args, optionsOrCb, cb) {
        var command = new DescribeInventoryDeletionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowExecutions = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowExecutionTaskInvocations = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowExecutionTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowExecutionTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindows = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowSchedule = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowsForTarget = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowsForTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeMaintenanceWindowTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceWindowTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeOpsItems = function (args, optionsOrCb, cb) {
        var command = new DescribeOpsItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describePatchBaselines = function (args, optionsOrCb, cb) {
        var command = new DescribePatchBaselinesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describePatchGroups = function (args, optionsOrCb, cb) {
        var command = new DescribePatchGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describePatchGroupState = function (args, optionsOrCb, cb) {
        var command = new DescribePatchGroupStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describePatchProperties = function (args, optionsOrCb, cb) {
        var command = new DescribePatchPropertiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.describeSessions = function (args, optionsOrCb, cb) {
        var command = new DescribeSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.disassociateOpsItemRelatedItem = function (args, optionsOrCb, cb) {
        var command = new DisassociateOpsItemRelatedItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getAutomationExecution = function (args, optionsOrCb, cb) {
        var command = new GetAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getCalendarState = function (args, optionsOrCb, cb) {
        var command = new GetCalendarStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getCommandInvocation = function (args, optionsOrCb, cb) {
        var command = new GetCommandInvocationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getConnectionStatus = function (args, optionsOrCb, cb) {
        var command = new GetConnectionStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getDefaultPatchBaseline = function (args, optionsOrCb, cb) {
        var command = new GetDefaultPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getDeployablePatchSnapshotForInstance = function (args, optionsOrCb, cb) {
        var command = new GetDeployablePatchSnapshotForInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getDocument = function (args, optionsOrCb, cb) {
        var command = new GetDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getInventory = function (args, optionsOrCb, cb) {
        var command = new GetInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getInventorySchema = function (args, optionsOrCb, cb) {
        var command = new GetInventorySchemaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new GetMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getMaintenanceWindowExecution = function (args, optionsOrCb, cb) {
        var command = new GetMaintenanceWindowExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getMaintenanceWindowExecutionTask = function (args, optionsOrCb, cb) {
        var command = new GetMaintenanceWindowExecutionTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getMaintenanceWindowExecutionTaskInvocation = function (args, optionsOrCb, cb) {
        var command = new GetMaintenanceWindowExecutionTaskInvocationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getMaintenanceWindowTask = function (args, optionsOrCb, cb) {
        var command = new GetMaintenanceWindowTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getOpsItem = function (args, optionsOrCb, cb) {
        var command = new GetOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getOpsMetadata = function (args, optionsOrCb, cb) {
        var command = new GetOpsMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getOpsSummary = function (args, optionsOrCb, cb) {
        var command = new GetOpsSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getParameter = function (args, optionsOrCb, cb) {
        var command = new GetParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getParameterHistory = function (args, optionsOrCb, cb) {
        var command = new GetParameterHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getParameters = function (args, optionsOrCb, cb) {
        var command = new GetParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getParametersByPath = function (args, optionsOrCb, cb) {
        var command = new GetParametersByPathCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getPatchBaseline = function (args, optionsOrCb, cb) {
        var command = new GetPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getPatchBaselineForPatchGroup = function (args, optionsOrCb, cb) {
        var command = new GetPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.getServiceSetting = function (args, optionsOrCb, cb) {
        var command = new GetServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.labelParameterVersion = function (args, optionsOrCb, cb) {
        var command = new LabelParameterVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listAssociations = function (args, optionsOrCb, cb) {
        var command = new ListAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listAssociationVersions = function (args, optionsOrCb, cb) {
        var command = new ListAssociationVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listCommandInvocations = function (args, optionsOrCb, cb) {
        var command = new ListCommandInvocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listCommands = function (args, optionsOrCb, cb) {
        var command = new ListCommandsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listComplianceItems = function (args, optionsOrCb, cb) {
        var command = new ListComplianceItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listComplianceSummaries = function (args, optionsOrCb, cb) {
        var command = new ListComplianceSummariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listDocumentMetadataHistory = function (args, optionsOrCb, cb) {
        var command = new ListDocumentMetadataHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listDocuments = function (args, optionsOrCb, cb) {
        var command = new ListDocumentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listDocumentVersions = function (args, optionsOrCb, cb) {
        var command = new ListDocumentVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listInventoryEntries = function (args, optionsOrCb, cb) {
        var command = new ListInventoryEntriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listOpsItemEvents = function (args, optionsOrCb, cb) {
        var command = new ListOpsItemEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listOpsItemRelatedItems = function (args, optionsOrCb, cb) {
        var command = new ListOpsItemRelatedItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listOpsMetadata = function (args, optionsOrCb, cb) {
        var command = new ListOpsMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listResourceComplianceSummaries = function (args, optionsOrCb, cb) {
        var command = new ListResourceComplianceSummariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listResourceDataSync = function (args, optionsOrCb, cb) {
        var command = new ListResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.modifyDocumentPermission = function (args, optionsOrCb, cb) {
        var command = new ModifyDocumentPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.putComplianceItems = function (args, optionsOrCb, cb) {
        var command = new PutComplianceItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.putInventory = function (args, optionsOrCb, cb) {
        var command = new PutInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.putParameter = function (args, optionsOrCb, cb) {
        var command = new PutParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.registerDefaultPatchBaseline = function (args, optionsOrCb, cb) {
        var command = new RegisterDefaultPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.registerPatchBaselineForPatchGroup = function (args, optionsOrCb, cb) {
        var command = new RegisterPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.registerTargetWithMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new RegisterTargetWithMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.registerTaskWithMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new RegisterTaskWithMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.resetServiceSetting = function (args, optionsOrCb, cb) {
        var command = new ResetServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.resumeSession = function (args, optionsOrCb, cb) {
        var command = new ResumeSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.sendAutomationSignal = function (args, optionsOrCb, cb) {
        var command = new SendAutomationSignalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.sendCommand = function (args, optionsOrCb, cb) {
        var command = new SendCommandCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.startAssociationsOnce = function (args, optionsOrCb, cb) {
        var command = new StartAssociationsOnceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.startAutomationExecution = function (args, optionsOrCb, cb) {
        var command = new StartAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.startChangeRequestExecution = function (args, optionsOrCb, cb) {
        var command = new StartChangeRequestExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.startSession = function (args, optionsOrCb, cb) {
        var command = new StartSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.stopAutomationExecution = function (args, optionsOrCb, cb) {
        var command = new StopAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.terminateSession = function (args, optionsOrCb, cb) {
        var command = new TerminateSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.unlabelParameterVersion = function (args, optionsOrCb, cb) {
        var command = new UnlabelParameterVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateAssociation = function (args, optionsOrCb, cb) {
        var command = new UpdateAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateAssociationStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateAssociationStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateDocument = function (args, optionsOrCb, cb) {
        var command = new UpdateDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateDocumentDefaultVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateDocumentDefaultVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateDocumentMetadata = function (args, optionsOrCb, cb) {
        var command = new UpdateDocumentMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateMaintenanceWindow = function (args, optionsOrCb, cb) {
        var command = new UpdateMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateMaintenanceWindowTarget = function (args, optionsOrCb, cb) {
        var command = new UpdateMaintenanceWindowTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateMaintenanceWindowTask = function (args, optionsOrCb, cb) {
        var command = new UpdateMaintenanceWindowTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateManagedInstanceRole = function (args, optionsOrCb, cb) {
        var command = new UpdateManagedInstanceRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateOpsItem = function (args, optionsOrCb, cb) {
        var command = new UpdateOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateOpsMetadata = function (args, optionsOrCb, cb) {
        var command = new UpdateOpsMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updatePatchBaseline = function (args, optionsOrCb, cb) {
        var command = new UpdatePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateResourceDataSync = function (args, optionsOrCb, cb) {
        var command = new UpdateResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SSM.prototype.updateServiceSetting = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return SSM;
}(SSMClient));
export { SSM };
