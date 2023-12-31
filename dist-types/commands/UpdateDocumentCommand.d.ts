import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {
}
export interface UpdateDocumentCommandOutput extends UpdateDocumentResult, __MetadataBearer {
}
/**
 * <p>Updates one or more values for an SSM document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDocumentCommand extends $Command<UpdateDocumentCommandInput, UpdateDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentCommandInput;
    constructor(input: UpdateDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
