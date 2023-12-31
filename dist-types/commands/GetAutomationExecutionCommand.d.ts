import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetAutomationExecutionRequest, GetAutomationExecutionResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetAutomationExecutionCommandInput extends GetAutomationExecutionRequest {
}
export interface GetAutomationExecutionCommandOutput extends GetAutomationExecutionResult, __MetadataBearer {
}
/**
 * <p>Get detailed information about a particular Automation execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link GetAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAutomationExecutionCommand extends $Command<GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetAutomationExecutionCommandInput;
    constructor(input: GetAutomationExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
