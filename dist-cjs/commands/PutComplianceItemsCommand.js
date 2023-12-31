"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutComplianceItemsCommand = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
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
class PutComplianceItemsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSMClient";
        const commandName = "PutComplianceItemsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutComplianceItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutComplianceItemsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutComplianceItemsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutComplianceItemsCommand(output, context);
    }
}
exports.PutComplianceItemsCommand = PutComplianceItemsCommand;
