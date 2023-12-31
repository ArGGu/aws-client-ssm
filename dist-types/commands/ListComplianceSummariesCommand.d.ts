import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListComplianceSummariesCommandInput extends ListComplianceSummariesRequest {
}
export interface ListComplianceSummariesCommandOutput extends ListComplianceSummariesResult, __MetadataBearer {
}
/**
 * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
 *    example, this call can return State Manager associations, patches, or custom compliance types
 *    according to the filter criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListComplianceSummariesCommand extends $Command<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListComplianceSummariesCommandInput;
    constructor(input: ListComplianceSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
