import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface RegisterDefaultPatchBaselineCommandInput extends RegisterDefaultPatchBaselineRequest {
}
export interface RegisterDefaultPatchBaselineCommandOutput extends RegisterDefaultPatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Defines the default patch baseline for the relevant operating system.</p>
 *          <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline
 *    Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify
 *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
 *     <code>pb-0574b43a65ea646ed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterDefaultPatchBaselineCommand extends $Command<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterDefaultPatchBaselineCommandInput;
    constructor(input: RegisterDefaultPatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
