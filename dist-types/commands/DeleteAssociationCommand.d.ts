import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteAssociationRequest, DeleteAssociationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteAssociationCommandInput extends DeleteAssociationRequest {
}
export interface DeleteAssociationCommandOutput extends DeleteAssociationResult, __MetadataBearer {
}
/**
 * <p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified instance.
 *    If you created the association by using the <code>Targets</code> parameter, then you must delete
 *    the association by using the association ID.</p>
 *          <p>When you disassociate a document from an instance, it doesn't change the configuration of
 *    the instance. To change the configuration state of an instance after you disassociate a document,
 *    you must create a new document with the desired configuration and associate it with the
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssociationCommand extends $Command<DeleteAssociationCommandInput, DeleteAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteAssociationCommandInput;
    constructor(input: DeleteAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssociationCommandInput, DeleteAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
