import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface AddTagsToResourceCommandInput extends AddTagsToResourceRequest {
}
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceResult, __MetadataBearer {
}
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
export declare class AddTagsToResourceCommand extends $Command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, SSMClientResolvedConfig> {
    readonly input: AddTagsToResourceCommandInput;
    constructor(input: AddTagsToResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
