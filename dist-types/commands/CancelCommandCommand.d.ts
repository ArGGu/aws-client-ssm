import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CancelCommandRequest, CancelCommandResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CancelCommandCommandInput extends CancelCommandRequest {
}
export interface CancelCommandCommandOutput extends CancelCommandResult, __MetadataBearer {
}
/**
 * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the
 *    command will be terminated and the underlying process stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CancelCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCommandCommandInput} for command's `input` shape.
 * @see {@link CancelCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelCommandCommand extends $Command<CancelCommandCommandInput, CancelCommandCommandOutput, SSMClientResolvedConfig> {
    readonly input: CancelCommandCommandInput;
    constructor(input: CancelCommandCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelCommandCommandInput, CancelCommandCommandOutput>;
    private serialize;
    private deserialize;
}
