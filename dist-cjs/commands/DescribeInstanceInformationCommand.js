"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInstanceInformationCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Describes one or more of your instances, including information about the operating system
 *    platform, the version of SSM Agent installed on the instance, instance status, and so on.</p>
 *          <p>If you specify one or more instance IDs, it returns information for those instances. If you
 *    don't specify instance IDs, it returns information for all your instances. If you specify an
 *    instance ID that isn't valid or an instance that you don't own, you receive an error.</p>
 *          <note>
 *             <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management
 *      (IAM) role assigned to on-premises instances. This call doesn't return the
 *      IAM role for EC2 instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceInformationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstanceInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceInformationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeInstanceInformationCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeInstanceInformationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeInstanceInformationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeInstanceInformationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeInstanceInformationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeInstanceInformationCommand(output, context);
    }
}
exports.DescribeInstanceInformationCommand = DescribeInstanceInformationCommand;
