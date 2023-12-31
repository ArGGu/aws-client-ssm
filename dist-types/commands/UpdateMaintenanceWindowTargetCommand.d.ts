import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateMaintenanceWindowTargetCommandInput extends UpdateMaintenanceWindowTargetRequest {
}
export interface UpdateMaintenanceWindowTargetCommandOutput extends UpdateMaintenanceWindowTargetResult, __MetadataBearer {
}
/**
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field isn't modified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMaintenanceWindowTargetCommand extends $Command<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateMaintenanceWindowTargetCommandInput;
    constructor(input: UpdateMaintenanceWindowTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput>;
    private serialize;
    private deserialize;
}
