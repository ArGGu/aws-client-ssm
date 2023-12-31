import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateAssociationRequest, UpdateAssociationResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateAssociationCommandInput extends UpdateAssociationRequest {
}
export interface UpdateAssociationCommandOutput extends UpdateAssociationResult, __MetadataBearer {
}
/**
 * <p>Updates an association. You can update the association name and version, the document
 *    version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. </p>
 *          <p>In order to call this API operation, your Identity and Access Management (IAM) user
 *    account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call
 *     <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred
 *     (AccessDeniedException) when calling the UpdateAssociation operation: User: <user_arn>
 *     isn't authorized to perform: ssm:DescribeAssociation on resource:
 *    <resource_arn></code>
 *          </p>
 *          <important>
 *             <p>When you update an association, the association immediately runs against the specified
 *     targets.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssociationCommand extends $Command<UpdateAssociationCommandInput, UpdateAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateAssociationCommandInput;
    constructor(input: UpdateAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssociationCommandInput, UpdateAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
