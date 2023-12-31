import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeAvailablePatchesCommandInput extends DescribeAvailablePatchesRequest {
}
export interface DescribeAvailablePatchesCommandOutput extends DescribeAvailablePatchesResult, __MetadataBearer {
}
/**
 * <p>Lists all patches eligible to be included in a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAvailablePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAvailablePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAvailablePatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailablePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailablePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAvailablePatchesCommand extends $Command<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAvailablePatchesCommandInput;
    constructor(input: DescribeAvailablePatchesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput>;
    private serialize;
    private deserialize;
}
