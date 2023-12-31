import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetOpsSummaryResult } from "../models/models_1";
import { GetOpsSummaryRequest } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetOpsSummaryCommandInput extends GetOpsSummaryRequest {
}
export interface GetOpsSummaryCommandOutput extends GetOpsSummaryResult, __MetadataBearer {
}
/**
 * <p>View a summary of operations metadata (OpsData) based on specified filters and aggregators.
 *    OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as
 *    well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager
 *    Explorer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOpsSummaryCommand extends $Command<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsSummaryCommandInput;
    constructor(input: GetOpsSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
