import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetParametersByPathRequest, GetParametersByPathResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetParametersByPathCommandInput extends GetParametersByPathRequest {
}
export interface GetParametersByPathCommandOutput extends GetParametersByPathResult, __MetadataBearer {
}
/**
 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersByPathCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParametersByPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersByPathCommandInput} for command's `input` shape.
 * @see {@link GetParametersByPathCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetParametersByPathCommand extends $Command<GetParametersByPathCommandInput, GetParametersByPathCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParametersByPathCommandInput;
    constructor(input: GetParametersByPathCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParametersByPathCommandInput, GetParametersByPathCommandOutput>;
    private serialize;
    private deserialize;
}
