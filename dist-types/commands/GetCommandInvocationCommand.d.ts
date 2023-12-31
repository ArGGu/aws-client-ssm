import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetCommandInvocationCommandInput extends GetCommandInvocationRequest {
}
export interface GetCommandInvocationCommandOutput extends GetCommandInvocationResult, __MetadataBearer {
}
/**
 * <p>Returns detailed information about command execution for an invocation or plugin.</p>
 *          <p>
 *             <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document.
 *    To get the command execution status on a specific instance, use <a>ListCommandInvocations</a>. To get the command execution status across instances, use
 *     <a>ListCommands</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCommandInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCommandInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCommandInvocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommandInvocationCommandInput} for command's `input` shape.
 * @see {@link GetCommandInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCommandInvocationCommand extends $Command<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetCommandInvocationCommandInput;
    constructor(input: GetCommandInvocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput>;
    private serialize;
    private deserialize;
}
