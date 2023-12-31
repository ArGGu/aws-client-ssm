import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeOpsItemsCommand, serializeAws_json1_1DescribeOpsItemsCommand, } from "../protocols/Aws_json1_1";
var DescribeOpsItemsCommand = (function (_super) {
    __extends(DescribeOpsItemsCommand, _super);
    function DescribeOpsItemsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeOpsItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeOpsItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOpsItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOpsItemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOpsItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOpsItemsCommand(input, context);
    };
    DescribeOpsItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOpsItemsCommand(output, context);
    };
    return DescribeOpsItemsCommand;
}($Command));
export { DescribeOpsItemsCommand };
