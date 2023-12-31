import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateAssociationBatchRequest, CreateAssociationBatchResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreateAssociationBatchCommandInput extends CreateAssociationBatchRequest {
}
export interface CreateAssociationBatchCommandOutput extends CreateAssociationBatchResult, __MetadataBearer {
}
/**
 * <p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified instances or
 *    targets.</p>
 *          <p>When you associate a document with one or more instances using instance IDs or tags,
 *    Amazon Web Services Systems Manager Agent (SSM Agent) running on the instance processes the document and configures the
 *    instance as specified.</p>
 *          <p>If you associate a document with an instance that already has an associated document, the
 *    system returns the AssociationAlreadyExists exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationBatchCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationBatchCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationBatchCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssociationBatchCommand extends $Command<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateAssociationBatchCommandInput;
    constructor(input: CreateAssociationBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput>;
    private serialize;
    private deserialize;
}
