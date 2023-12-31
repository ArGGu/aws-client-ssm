import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreateDocumentCommandInput extends CreateDocumentRequest {
}
export interface CreateDocumentCommandOutput extends CreateDocumentResult, __MetadataBearer {
}
/**
 * <p>Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs
 *    on your managed instances. For more information about SSM documents, including information about
 *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDocumentCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDocumentCommand extends $Command<CreateDocumentCommandInput, CreateDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateDocumentCommandInput;
    constructor(input: CreateDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDocumentCommandInput, CreateDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
