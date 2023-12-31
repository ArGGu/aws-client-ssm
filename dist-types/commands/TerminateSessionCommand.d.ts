import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface TerminateSessionCommandInput extends TerminateSessionRequest {
}
export interface TerminateSessionCommandOutput extends TerminateSessionResponse, __MetadataBearer {
}
/**
 * <p>Permanently ends a session and closes the data connection between the Session Manager client and
 *    SSM Agent on the instance. A terminated session isn't be resumed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, TerminateSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, TerminateSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateSessionCommand extends $Command<TerminateSessionCommandInput, TerminateSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: TerminateSessionCommandInput;
    constructor(input: TerminateSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateSessionCommandInput, TerminateSessionCommandOutput>;
    private serialize;
    private deserialize;
}
