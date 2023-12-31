import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeregisterManagedInstanceCommandInput extends DeregisterManagedInstanceRequest {
}
export interface DeregisterManagedInstanceCommandOutput extends DeregisterManagedInstanceResult, __MetadataBearer {
}
/**
 * <p>Removes the server or virtual machine from the list of registered servers. You can
 *    reregister the instance again at any time. If you don't plan to use Run Command on the server, we
 *    suggest uninstalling SSM Agent first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterManagedInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterManagedInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterManagedInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterManagedInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterManagedInstanceCommand extends $Command<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterManagedInstanceCommandInput;
    constructor(input: DeregisterManagedInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
