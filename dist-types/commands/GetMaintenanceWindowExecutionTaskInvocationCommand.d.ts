import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetMaintenanceWindowExecutionTaskInvocationRequest, GetMaintenanceWindowExecutionTaskInvocationResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetMaintenanceWindowExecutionTaskInvocationCommandInput extends GetMaintenanceWindowExecutionTaskInvocationRequest {
}
export interface GetMaintenanceWindowExecutionTaskInvocationCommandOutput extends GetMaintenanceWindowExecutionTaskInvocationResult, __MetadataBearer {
}
/**
 * <p>Retrieves information about a specific task running on a specific target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMaintenanceWindowExecutionTaskInvocationCommand extends $Command<GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowExecutionTaskInvocationCommandInput;
    constructor(input: GetMaintenanceWindowExecutionTaskInvocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput>;
    private serialize;
    private deserialize;
}
