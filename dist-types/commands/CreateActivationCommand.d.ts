import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreateActivationCommandInput extends CreateActivationRequest {
}
export interface CreateActivationCommandOutput extends CreateActivationResult, __MetadataBearer {
}
/**
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    server or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it
 *    possible to manage them using Systems Manager capabilities. You use the activation code and ID when
 *    installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
 *     Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>On-premises servers or VMs that are registered with Systems Manager and Amazon Elastic Compute Cloud (Amazon EC2) instances
 *     that you manage with Systems Manager are all called <i>managed instances</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActivationCommandInput} for command's `input` shape.
 * @see {@link CreateActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateActivationCommand extends $Command<CreateActivationCommandInput, CreateActivationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateActivationCommandInput;
    constructor(input: CreateActivationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateActivationCommandInput, CreateActivationCommandOutput>;
    private serialize;
    private deserialize;
}
