import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteParameterRequest, DeleteParameterResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteParameterCommandInput extends DeleteParameterRequest {
}
export interface DeleteParameterCommandOutput extends DeleteParameterResult, __MetadataBearer {
}
/**
 * <p>Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds
 *    to create a parameter with the same name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteParameterCommand extends $Command<DeleteParameterCommandInput, DeleteParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteParameterCommandInput;
    constructor(input: DeleteParameterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParameterCommandInput, DeleteParameterCommandOutput>;
    private serialize;
    private deserialize;
}
