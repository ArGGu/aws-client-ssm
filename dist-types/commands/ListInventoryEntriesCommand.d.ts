import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListInventoryEntriesCommandInput extends ListInventoryEntriesRequest {
}
export interface ListInventoryEntriesCommandOutput extends ListInventoryEntriesResult, __MetadataBearer {
}
/**
 * <p>A list of inventory items returned by the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListInventoryEntriesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListInventoryEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInventoryEntriesCommandInput} for command's `input` shape.
 * @see {@link ListInventoryEntriesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInventoryEntriesCommand extends $Command<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListInventoryEntriesCommandInput;
    constructor(input: ListInventoryEntriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput>;
    private serialize;
    private deserialize;
}
