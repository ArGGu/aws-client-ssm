import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetInventoryCommandInput extends GetInventoryRequest {
}
export interface GetInventoryCommandOutput extends GetInventoryResult, __MetadataBearer {
}
/**
 * <p>Query inventory information. This includes instance status, such as <code>Stopped</code> or
 *     <code>Terminated</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInventoryCommandInput} for command's `input` shape.
 * @see {@link GetInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInventoryCommand extends $Command<GetInventoryCommandInput, GetInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetInventoryCommandInput;
    constructor(input: GetInventoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInventoryCommandInput, GetInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
