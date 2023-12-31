import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeDocumentCommandInput extends DescribeDocumentRequest {
}
export interface DescribeDocumentCommandOutput extends DescribeDocumentResult, __MetadataBearer {
}
/**
 * <p>Describes the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDocumentCommand extends $Command<DescribeDocumentCommandInput, DescribeDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeDocumentCommandInput;
    constructor(input: DescribeDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentCommandInput, DescribeDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
