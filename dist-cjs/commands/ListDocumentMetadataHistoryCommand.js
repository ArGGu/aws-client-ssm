"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDocumentMetadataHistoryCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Information about approval reviews for a version of a change template in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentMetadataHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentMetadataHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentMetadataHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDocumentMetadataHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDocumentMetadataHistoryCommand extends smithy_client_1.Command {
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
        const commandName = "ListDocumentMetadataHistoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ListDocumentMetadataHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ListDocumentMetadataHistoryResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListDocumentMetadataHistoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListDocumentMetadataHistoryCommand(output, context);
    }
}
exports.ListDocumentMetadataHistoryCommand = ListDocumentMetadataHistoryCommand;
