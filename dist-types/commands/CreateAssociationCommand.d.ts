import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface CreateAssociationCommandInput extends CreateAssociationRequest {
}
export interface CreateAssociationCommandOutput extends CreateAssociationResult, __MetadataBearer {
}
/**
 * <p>A State Manager association defines the state that you want to maintain on your instances.
 *    For example, an association can specify that anti-virus software must be installed and running on
 *    your instances, or that certain ports must be closed. For static targets, the association
 *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an
 *    Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager
 *    applies the configuration when new instances are added to the group. The association also
 *    specifies actions to take when applying the configuration. For example, an association for
 *    anti-virus software might run once a day. If the software isn't installed, then State Manager
 *    installs it. If the software is installed, but the service isn't running, then the association
 *    might instruct State Manager to start the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssociationCommand extends $Command<CreateAssociationCommandInput, CreateAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateAssociationCommandInput;
    constructor(input: CreateAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
