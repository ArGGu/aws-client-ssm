"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceDataSyncCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't
 *    edit that sync later and choose the <code>Include all accounts from my Organizations
 *     configuration</code> option. Instead, you must delete the first resource data sync, and create a
 *    new one.</p>
 *          <note>
 *             <p>This API operation only supports a resource data sync that was created with a
 *     SyncFromSource <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateResourceDataSyncCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateResourceDataSyncCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.UpdateResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.UpdateResourceDataSyncResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
    }
}
exports.UpdateResourceDataSyncCommand = UpdateResourceDataSyncCommand;
