import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteMaintenanceWindowCommandInput extends DeleteMaintenanceWindowRequest {
}
export interface DeleteMaintenanceWindowCommandOutput extends DeleteMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Deletes a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMaintenanceWindowCommand extends $Command<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteMaintenanceWindowCommandInput;
    constructor(input: DeleteMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
