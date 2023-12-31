import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetInventorySchemaCommandInput extends GetInventorySchemaRequest {
}
export interface GetInventorySchemaCommandOutput extends GetInventorySchemaResult, __MetadataBearer {
}
/**
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInventorySchemaCommand extends $Command<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetInventorySchemaCommandInput;
    constructor(input: GetInventorySchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput>;
    private serialize;
    private deserialize;
}
