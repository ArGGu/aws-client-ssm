import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetConnectionStatusCommandInput extends GetConnectionStatusRequest {
}
export interface GetConnectionStatusCommandOutput extends GetConnectionStatusResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the Session Manager connection status for an instance to determine whether it is running and
 *    ready to receive Session Manager connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetConnectionStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetConnectionStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetConnectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConnectionStatusCommand extends $Command<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetConnectionStatusCommandInput;
    constructor(input: GetConnectionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
