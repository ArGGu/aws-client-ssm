import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeInventoryDeletionsCommandInput extends DescribeInventoryDeletionsRequest {
}
export interface DescribeInventoryDeletionsCommandOutput extends DescribeInventoryDeletionsResult, __MetadataBearer {
}
/**
 * <p>Describes a specific delete inventory operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInventoryDeletionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInventoryDeletionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInventoryDeletionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInventoryDeletionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInventoryDeletionsCommand extends $Command<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInventoryDeletionsCommandInput;
    constructor(input: DescribeInventoryDeletionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput>;
    private serialize;
    private deserialize;
}
