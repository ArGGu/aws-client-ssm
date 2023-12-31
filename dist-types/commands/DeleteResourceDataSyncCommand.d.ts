import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {
}
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {
}
/**
 * <p>Deletes a resource data sync configuration. After the configuration is deleted, changes to
 *    data on managed instances are no longer synced to or from the target. Deleting a sync
 *    configuration doesn't delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourceDataSyncCommand extends $Command<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteResourceDataSyncCommandInput;
    constructor(input: DeleteResourceDataSyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
