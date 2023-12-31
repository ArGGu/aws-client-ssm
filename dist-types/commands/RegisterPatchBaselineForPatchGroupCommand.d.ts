import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { RegisterPatchBaselineForPatchGroupRequest, RegisterPatchBaselineForPatchGroupResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface RegisterPatchBaselineForPatchGroupCommandInput extends RegisterPatchBaselineForPatchGroupRequest {
}
export interface RegisterPatchBaselineForPatchGroupCommandOutput extends RegisterPatchBaselineForPatchGroupResult, __MetadataBearer {
}
/**
 * <p>Registers a patch baseline for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link RegisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterPatchBaselineForPatchGroupCommand extends $Command<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterPatchBaselineForPatchGroupCommandInput;
    constructor(input: RegisterPatchBaselineForPatchGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
