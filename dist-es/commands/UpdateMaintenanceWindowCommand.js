import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateMaintenanceWindowRequest } from "../models/models_1";
import { UpdateMaintenanceWindowResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateMaintenanceWindowCommand, serializeAws_json1_1UpdateMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var UpdateMaintenanceWindowCommand = (function (_super) {
    __extends(UpdateMaintenanceWindowCommand, _super);
    function UpdateMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceWindowCommand(input, context);
    };
    UpdateMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceWindowCommand(output, context);
    };
    return UpdateMaintenanceWindowCommand;
}($Command));
export { UpdateMaintenanceWindowCommand };
