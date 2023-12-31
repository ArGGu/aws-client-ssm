import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateAssociationStatusRequest, UpdateAssociationStatusResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateAssociationStatusCommandInput extends UpdateAssociationStatusRequest {
}
export interface UpdateAssociationStatusCommandOutput extends UpdateAssociationStatusResult, __MetadataBearer {
}
/**
 * <p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified
 *    instance.</p>
 *          <p>
 *             <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to
 *    report status updates about your associations and is only used for associations created with the
 *     <code>InstanceId</code> legacy parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssociationStatusCommand extends $Command<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateAssociationStatusCommandInput;
    constructor(input: UpdateAssociationStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
