"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMaintenanceWindowExecutionTaskInvocationsCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Retrieves the individual task executions (one per target) for a particular task run as part
 *    of a maintenance window execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeMaintenanceWindowExecutionTaskInvocationsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeMaintenanceWindowExecutionTaskInvocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeMaintenanceWindowExecutionTaskInvocationsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(output, context);
    }
}
exports.DescribeMaintenanceWindowExecutionTaskInvocationsCommand = DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
