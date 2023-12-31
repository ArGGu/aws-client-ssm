import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreatePatchBaselineRequest, CreatePatchBaselineResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreatePatchBaselineCommandInput extends CreatePatchBaselineRequest {
}
export interface CreatePatchBaselineCommandOutput extends CreatePatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Creates a patch baseline.</p>
 *          <note>
 *             <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported
 *     operating system type, see <a>PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link CreatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePatchBaselineCommand extends $Command<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreatePatchBaselineCommandInput;
    constructor(input: CreatePatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
