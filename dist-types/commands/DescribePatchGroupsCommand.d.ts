import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribePatchGroupsCommandInput extends DescribePatchGroupsRequest {
}
export interface DescribePatchGroupsCommandOutput extends DescribePatchGroupsResult, __MetadataBearer {
}
/**
 * <p>Lists all patch groups that have been registered with patch baselines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePatchGroupsCommand extends $Command<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupsCommandInput;
    constructor(input: DescribePatchGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
