"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsToResourceCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
/**
 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you
 *    can assign to your documents, managed instances, maintenance windows, Parameter Store parameters,
 *    and patch baselines. Tags enable you to categorize your resources in different ways, for example,
 *    by purpose, owner, or environment. Each tag consists of a key and an optional value, both of
 *    which you define. For example, you could define a set of tags for your account's managed
 *    instances that helps you track each instance's owner and stack level. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=DbAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=SysAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=Dev</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Pre-Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Test</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Each resource can have a maximum of 50 tags.</p>
 *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
 *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 *    to and are interpreted strictly as a string of characters. </p>
 *          <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *     resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddTagsToResourceCommand extends smithy_client_1.Command {
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
        const commandName = "AddTagsToResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddTagsToResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddTagsToResourceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddTagsToResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddTagsToResourceCommand(output, context);
    }
}
exports.AddTagsToResourceCommand = AddTagsToResourceCommand;
