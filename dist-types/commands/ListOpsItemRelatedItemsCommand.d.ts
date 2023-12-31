import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListOpsItemRelatedItemsCommandInput extends ListOpsItemRelatedItemsRequest {
}
export interface ListOpsItemRelatedItemsCommandOutput extends ListOpsItemRelatedItemsResponse, __MetadataBearer {
}
/**
 * <p>Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a
 *    capability of Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemRelatedItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOpsItemRelatedItemsCommand extends $Command<ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListOpsItemRelatedItemsCommandInput;
    constructor(input: ListOpsItemRelatedItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput>;
    private serialize;
    private deserialize;
}
