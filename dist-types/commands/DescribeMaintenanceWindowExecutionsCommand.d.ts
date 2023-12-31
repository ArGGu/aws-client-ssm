import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutionsRequest, DescribeMaintenanceWindowExecutionsResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeMaintenanceWindowExecutionsCommandInput extends DescribeMaintenanceWindowExecutionsRequest {
}
export interface DescribeMaintenanceWindowExecutionsCommandOutput extends DescribeMaintenanceWindowExecutionsResult, __MetadataBearer {
}
/**
 * <p>Lists the executions of a maintenance window. This includes information about when the
 *    maintenance window was scheduled to be active, and information about tasks registered and run
 *    with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMaintenanceWindowExecutionsCommand extends $Command<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowExecutionsCommandInput;
    constructor(input: DescribeMaintenanceWindowExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
