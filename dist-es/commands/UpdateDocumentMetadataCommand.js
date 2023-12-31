import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentMetadataCommand, serializeAws_json1_1UpdateDocumentMetadataCommand, } from "../protocols/Aws_json1_1";
var UpdateDocumentMetadataCommand = (function (_super) {
    __extends(UpdateDocumentMetadataCommand, _super);
    function UpdateDocumentMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateDocumentMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentMetadataCommand(input, context);
    };
    UpdateDocumentMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentMetadataCommand(output, context);
    };
    return UpdateDocumentMetadataCommand;
}($Command));
export { UpdateDocumentMetadataCommand };
