import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { deserializeAws_json1_1StartAssociationsOnceCommand, serializeAws_json1_1StartAssociationsOnceCommand, } from "../protocols/Aws_json1_1";
var StartAssociationsOnceCommand = (function (_super) {
    __extends(StartAssociationsOnceCommand, _super);
    function StartAssociationsOnceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    StartAssociationsOnceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartAssociationsOnceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAssociationsOnceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAssociationsOnceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAssociationsOnceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAssociationsOnceCommand(input, context);
    };
    StartAssociationsOnceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAssociationsOnceCommand(output, context);
    };
    return StartAssociationsOnceCommand;
}($Command));
export { StartAssociationsOnceCommand };
