import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface SendAutomationSignalCommandInput extends SendAutomationSignalRequest {
}
export interface SendAutomationSignalCommandOutput extends SendAutomationSignalResult, __MetadataBearer {
}
/**
 * <p>Sends a signal to an Automation execution to change the current behavior or status of the
 *    execution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendAutomationSignalCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendAutomationSignalCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new SendAutomationSignalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAutomationSignalCommandInput} for command's `input` shape.
 * @see {@link SendAutomationSignalCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendAutomationSignalCommand extends $Command<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput, SSMClientResolvedConfig> {
    readonly input: SendAutomationSignalCommandInput;
    constructor(input: SendAutomationSignalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput>;
    private serialize;
    private deserialize;
}
