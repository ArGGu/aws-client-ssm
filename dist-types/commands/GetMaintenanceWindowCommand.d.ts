import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetMaintenanceWindowRequest, GetMaintenanceWindowResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetMaintenanceWindowCommandInput extends GetMaintenanceWindowRequest {
}
export interface GetMaintenanceWindowCommandOutput extends GetMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Retrieves a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMaintenanceWindowCommand extends $Command<GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowCommandInput;
    constructor(input: GetMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
