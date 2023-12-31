import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeEffectivePatchesForPatchBaselineRequest, DescribeEffectivePatchesForPatchBaselineResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeEffectivePatchesForPatchBaselineCommandInput extends DescribeEffectivePatchesForPatchBaselineRequest {
}
export interface DescribeEffectivePatchesForPatchBaselineCommandOutput extends DescribeEffectivePatchesForPatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
 *    patch baseline. Applies to patch baselines for Windows only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEffectivePatchesForPatchBaselineCommand extends $Command<DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeEffectivePatchesForPatchBaselineCommandInput;
    constructor(input: DescribeEffectivePatchesForPatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
