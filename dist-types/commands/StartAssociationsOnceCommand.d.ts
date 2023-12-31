import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface StartAssociationsOnceCommandInput extends StartAssociationsOnceRequest {
}
export interface StartAssociationsOnceCommandOutput extends StartAssociationsOnceResult, __MetadataBearer {
}
/**
 * <p>Runs an association immediately and only one time. This operation can be helpful when
 *    troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAssociationsOnceCommand extends $Command<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartAssociationsOnceCommandInput;
    constructor(input: StartAssociationsOnceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput>;
    private serialize;
    private deserialize;
}
