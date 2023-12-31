import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetDeployablePatchSnapshotForInstanceCommandInput extends GetDeployablePatchSnapshotForInstanceRequest {
}
export interface GetDeployablePatchSnapshotForInstanceCommandOutput extends GetDeployablePatchSnapshotForInstanceResult, __MetadataBearer {
}
/**
 * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
 *    primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p>
 *          <note>
 *             <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid
 *     this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of
 *     Amazon Web Services Systems Manager, with an SSM document that enables you to target an instance with a script or command.
 *     For example, run the command using the <code>AWS-RunShellScript</code> document or the
 *      <code>AWS-RunPowerShellScript</code> document.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeployablePatchSnapshotForInstanceCommand extends $Command<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDeployablePatchSnapshotForInstanceCommandInput;
    constructor(input: GetDeployablePatchSnapshotForInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
