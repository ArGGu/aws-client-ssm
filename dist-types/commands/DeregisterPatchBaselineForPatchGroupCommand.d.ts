import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeregisterPatchBaselineForPatchGroupRequest, DeregisterPatchBaselineForPatchGroupResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeregisterPatchBaselineForPatchGroupCommandInput extends DeregisterPatchBaselineForPatchGroupRequest {
}
export interface DeregisterPatchBaselineForPatchGroupCommandOutput extends DeregisterPatchBaselineForPatchGroupResult, __MetadataBearer {
}
/**
 * <p>Removes a patch group from a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterPatchBaselineForPatchGroupCommand extends $Command<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterPatchBaselineForPatchGroupCommandInput;
    constructor(input: DeregisterPatchBaselineForPatchGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
