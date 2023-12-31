import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListOpsMetadataRequest, ListOpsMetadataResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListOpsMetadataCommandInput extends ListOpsMetadataRequest {
}
export interface ListOpsMetadataCommandOutput extends ListOpsMetadataResult, __MetadataBearer {
}
/**
 * <p>Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or
 *    blobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link ListOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOpsMetadataCommand extends $Command<ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListOpsMetadataCommandInput;
    constructor(input: ListOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
