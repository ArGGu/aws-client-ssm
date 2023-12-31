import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutComplianceItemsRequest, PutComplianceItemsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface PutComplianceItemsCommandInput extends PutComplianceItemsRequest {
}
export interface PutComplianceItemsCommandOutput extends PutComplianceItemsResult, __MetadataBearer {
}
/**
 * <p>Registers a compliance type and other compliance details on a designated resource. This
 *    operation lets you register custom compliance details with a resource. This call overwrites
 *    existing compliance information on the resource, so you must provide a full list of compliance
 *    items each time that you send the request.</p>
 *          <p>ComplianceType can be one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was
 *      applied.</p>
 *             </li>
 *             <li>
 *                <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p>
 *             </li>
 *             <li>
 *                <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to
 *      the instance.</p>
 *             </li>
 *             <li>
 *                <p>Id: The patch, association, or custom compliance ID.</p>
 *             </li>
 *             <li>
 *                <p>Title: A title.</p>
 *             </li>
 *             <li>
 *                <p>Status: The status of the compliance item. For example, <code>approved</code> for patches,
 *      or <code>Failed</code> for associations.</p>
 *             </li>
 *             <li>
 *                <p>Severity: A patch severity. For example, <code>critical</code>.</p>
 *             </li>
 *             <li>
 *                <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p>
 *             </li>
 *             <li>
 *                <p>DocumentVersion: An SSM document version number. For example, 4.</p>
 *             </li>
 *             <li>
 *                <p>Classification: A patch classification. For example, <code>security updates</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchBaselineId: A patch baseline ID.</p>
 *             </li>
 *             <li>
 *                <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchGroup: The name of a patch group.</p>
 *             </li>
 *             <li>
 *                <p>InstalledTime: The time the association, patch, or custom compliance item was applied to
 *      the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutComplianceItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link PutComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutComplianceItemsCommand extends $Command<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutComplianceItemsCommandInput;
    constructor(input: PutComplianceItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput>;
    private serialize;
    private deserialize;
}
