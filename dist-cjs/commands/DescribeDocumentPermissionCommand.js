"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDocumentPermissionCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the
 *    document, you are the owner. If a document is shared, it can either be shared privately (by
 *    specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDocumentPermissionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSMClient";
        const commandName = "DescribeDocumentPermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDocumentPermissionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeDocumentPermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context);
    }
}
exports.DescribeDocumentPermissionCommand = DescribeDocumentPermissionCommand;
