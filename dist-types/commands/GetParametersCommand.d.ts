import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetParametersRequest, GetParametersResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetParametersCommandInput extends GetParametersRequest {
}
export interface GetParametersCommandOutput extends GetParametersResult, __MetadataBearer {
}
/**
 * <p>Get information about one or more parameters by specifying multiple parameter names.</p>
 *          <note>
 *             <p>To get information about a single parameter, you can use the <a>GetParameter</a>
 *     operation instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersCommandInput} for command's `input` shape.
 * @see {@link GetParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetParametersCommand extends $Command<GetParametersCommandInput, GetParametersCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParametersCommandInput;
    constructor(input: GetParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParametersCommandInput, GetParametersCommandOutput>;
    private serialize;
    private deserialize;
}
