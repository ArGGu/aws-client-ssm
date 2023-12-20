"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMaintenanceWindowsForTargetCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Retrieves information about the maintenance window targets or tasks that an instance is
 *    associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsForTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowsForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowsForTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsForTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeMaintenanceWindowsForTargetCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeMaintenanceWindowsForTargetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context);
    }
}
exports.DescribeMaintenanceWindowsForTargetCommand = DescribeMaintenanceWindowsForTargetCommand;
