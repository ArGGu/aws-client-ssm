"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListResourceDataSyncCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link ListResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListResourceDataSyncCommand extends smithy_client_1.Command {
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
        const commandName = "ListResourceDataSyncCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ListResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ListResourceDataSyncResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListResourceDataSyncCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListResourceDataSyncCommand(output, context);
    }
}
exports.ListResourceDataSyncCommand = ListResourceDataSyncCommand;
