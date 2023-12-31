import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateMaintenanceWindowRequest } from "../models/models_1";
import { UpdateMaintenanceWindowResult } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateMaintenanceWindowCommandInput extends UpdateMaintenanceWindowRequest {
}
export interface UpdateMaintenanceWindowCommandOutput extends UpdateMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMaintenanceWindowCommand extends $Command<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateMaintenanceWindowCommandInput;
    constructor(input: UpdateMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
