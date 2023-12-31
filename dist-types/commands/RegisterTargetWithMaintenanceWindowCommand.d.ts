import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { RegisterTargetWithMaintenanceWindowRequest, RegisterTargetWithMaintenanceWindowResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface RegisterTargetWithMaintenanceWindowCommandInput extends RegisterTargetWithMaintenanceWindowRequest {
}
export interface RegisterTargetWithMaintenanceWindowCommandOutput extends RegisterTargetWithMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Registers a target with a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTargetWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterTargetWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTargetWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterTargetWithMaintenanceWindowCommand extends $Command<RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterTargetWithMaintenanceWindowCommandInput;
    constructor(input: RegisterTargetWithMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
