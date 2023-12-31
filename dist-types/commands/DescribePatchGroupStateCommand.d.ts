import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {
}
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {
}
/**
 * <p>Returns high-level aggregated patch compliance state information for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePatchGroupStateCommand extends $Command<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupStateCommandInput;
    constructor(input: DescribePatchGroupStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput>;
    private serialize;
    private deserialize;
}
