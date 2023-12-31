import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeActivationsRequest, DescribeActivationsResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeActivationsCommandInput extends DescribeActivationsRequest {
}
export interface DescribeActivationsCommandOutput extends DescribeActivationsResult, __MetadataBearer {
}
/**
 * <p>Describes details about the activation, such as the date and time the activation was
 *    created, its expiration date, the Identity and Access Management (IAM) role assigned to
 *    the instances in the activation, and the number of instances registered by using this
 *    activation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeActivationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeActivationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeActivationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivationsCommandInput} for command's `input` shape.
 * @see {@link DescribeActivationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeActivationsCommand extends $Command<DescribeActivationsCommandInput, DescribeActivationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeActivationsCommandInput;
    constructor(input: DescribeActivationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivationsCommandInput, DescribeActivationsCommandOutput>;
    private serialize;
    private deserialize;
}
