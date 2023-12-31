import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateDocumentMetadataCommandInput extends UpdateDocumentMetadataRequest {
}
export interface UpdateDocumentMetadataCommandOutput extends UpdateDocumentMetadataResponse, __MetadataBearer {
}
/**
 * <p>Updates information related to approval reviews for a specific version of a change template
 *    in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDocumentMetadataCommand extends $Command<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentMetadataCommandInput;
    constructor(input: UpdateDocumentMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
