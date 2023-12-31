import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeInstancePatchStatesForPatchGroupRequest, DescribeInstancePatchStatesForPatchGroupResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeInstancePatchStatesForPatchGroupCommandInput extends DescribeInstancePatchStatesForPatchGroupRequest {
}
export interface DescribeInstancePatchStatesForPatchGroupCommandOutput extends DescribeInstancePatchStatesForPatchGroupResult, __MetadataBearer {
}
/**
 * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstancePatchStatesForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstancePatchStatesForPatchGroupCommand extends $Command<DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchStatesForPatchGroupCommandInput;
    constructor(input: DescribeInstancePatchStatesForPatchGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
