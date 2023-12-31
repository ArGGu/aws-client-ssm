import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {
}
export interface UpdateDocumentDefaultVersionCommandOutput extends UpdateDocumentDefaultVersionResult, __MetadataBearer {
}
/**
 * <p>Set the default version of a document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDocumentDefaultVersionCommand extends $Command<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentDefaultVersionCommandInput;
    constructor(input: UpdateDocumentDefaultVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput>;
    private serialize;
    private deserialize;
}
