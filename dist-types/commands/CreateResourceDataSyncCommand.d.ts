import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreateResourceDataSyncCommandInput extends CreateResourceDataSyncRequest {
}
export interface CreateResourceDataSyncCommandOutput extends CreateResourceDataSyncResult, __MetadataBearer {
}
/**
 * <p>A resource data sync helps you view data from multiple sources in a single location.
 *    Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and
 *     <code>SyncFromSource</code>.</p>
 *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
 *    synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data
 *     sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
 *    operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a
 *    single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple
 *    Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager
 *     Explorer to display data from multiple accounts and Regions</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
 *    successful initial sync is completed, the system continuously syncs data. To check the status of
 *    a sync, use the <a>ListResourceDataSync</a>.</p>
 *          <note>
 *             <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you
 *     enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you
 *     secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceDataSyncCommand extends $Command<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateResourceDataSyncCommandInput;
    constructor(input: CreateResourceDataSyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
