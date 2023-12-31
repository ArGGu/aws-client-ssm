import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetDocumentCommandInput extends GetDocumentRequest {
}
export interface GetDocumentCommandOutput extends GetDocumentResult, __MetadataBearer {
}
/**
 * <p>Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDocumentCommand extends $Command<GetDocumentCommandInput, GetDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDocumentCommandInput;
    constructor(input: GetDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentCommandInput, GetDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
