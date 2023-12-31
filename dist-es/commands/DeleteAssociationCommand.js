import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteAssociationRequest, DeleteAssociationResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteAssociationCommand, serializeAws_json1_1DeleteAssociationCommand, } from "../protocols/Aws_json1_1";
var DeleteAssociationCommand = (function (_super) {
    __extends(DeleteAssociationCommand, _super);
    function DeleteAssociationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssociationCommand(input, context);
    };
    DeleteAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssociationCommand(output, context);
    };
    return DeleteAssociationCommand;
}($Command));
export { DeleteAssociationCommand };
