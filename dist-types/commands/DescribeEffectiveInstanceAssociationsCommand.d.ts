import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeEffectiveInstanceAssociationsRequest, DescribeEffectiveInstanceAssociationsResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeEffectiveInstanceAssociationsCommandInput extends DescribeEffectiveInstanceAssociationsRequest {
}
export interface DescribeEffectiveInstanceAssociationsCommandOutput extends DescribeEffectiveInstanceAssociationsResult, __MetadataBearer {
}
/**
 * <p>All associations for the instance(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectiveInstanceAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectiveInstanceAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectiveInstanceAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectiveInstanceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectiveInstanceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEffectiveInstanceAssociationsCommand extends $Command<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeEffectiveInstanceAssociationsCommandInput;
    constructor(input: DescribeEffectiveInstanceAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
