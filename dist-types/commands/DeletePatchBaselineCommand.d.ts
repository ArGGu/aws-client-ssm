import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeletePatchBaselineRequest, DeletePatchBaselineResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeletePatchBaselineCommandInput extends DeletePatchBaselineRequest {
}
export interface DeletePatchBaselineCommandOutput extends DeletePatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Deletes a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeletePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeletePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DeletePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePatchBaselineCommand extends $Command<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeletePatchBaselineCommandInput;
    constructor(input: DeletePatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
