import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdatePatchBaselineRequest, UpdatePatchBaselineResult } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdatePatchBaselineCommandInput extends UpdatePatchBaselineRequest {
}
export interface UpdatePatchBaselineCommandOutput extends UpdatePatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Modifies an existing patch baseline. Fields not specified in the request are left
 *    unchanged.</p>
 *          <note>
 *             <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported
 *     operating system type, see <a>PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link UpdatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePatchBaselineCommand extends $Command<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdatePatchBaselineCommandInput;
    constructor(input: UpdatePatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
