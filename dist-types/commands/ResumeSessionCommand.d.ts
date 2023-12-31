import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ResumeSessionCommandInput extends ResumeSessionRequest {
}
export interface ResumeSessionCommandOutput extends ResumeSessionResponse, __MetadataBearer {
}
/**
 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It isn't intended for any other use.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResumeSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResumeSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ResumeSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeSessionCommandInput} for command's `input` shape.
 * @see {@link ResumeSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeSessionCommand extends $Command<ResumeSessionCommandInput, ResumeSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: ResumeSessionCommandInput;
    constructor(input: ResumeSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput>;
    private serialize;
    private deserialize;
}
