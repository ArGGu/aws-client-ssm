import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface PutInventoryCommandInput extends PutInventoryRequest {
}
export interface PutInventoryCommandOutput extends PutInventoryResult, __MetadataBearer {
}
/**
 * <p>Bulk update custom inventory items on one more instance. The request adds an inventory item,
 *    if it doesn't already exist, or updates an inventory item, if it does exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInventoryCommandInput} for command's `input` shape.
 * @see {@link PutInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutInventoryCommand extends $Command<PutInventoryCommandInput, PutInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutInventoryCommandInput;
    constructor(input: PutInventoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInventoryCommandInput, PutInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
