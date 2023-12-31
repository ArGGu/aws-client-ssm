import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_1";
import { deserializeAws_json1_1UnlabelParameterVersionCommand, serializeAws_json1_1UnlabelParameterVersionCommand, } from "../protocols/Aws_json1_1";
var UnlabelParameterVersionCommand = (function (_super) {
    __extends(UnlabelParameterVersionCommand, _super);
    function UnlabelParameterVersionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UnlabelParameterVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UnlabelParameterVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnlabelParameterVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnlabelParameterVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnlabelParameterVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnlabelParameterVersionCommand(input, context);
    };
    UnlabelParameterVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnlabelParameterVersionCommand(output, context);
    };
    return UnlabelParameterVersionCommand;
}($Command));
export { UnlabelParameterVersionCommand };
