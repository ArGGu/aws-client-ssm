import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteParametersRequest, DeleteParametersResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteParametersCommandInput extends DeleteParametersRequest {
}
export interface DeleteParametersCommandOutput extends DeleteParametersResult, __MetadataBearer {
}
/**
 * <p>Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to
 *    create a parameter with the same name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParametersCommandInput} for command's `input` shape.
 * @see {@link DeleteParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteParametersCommand extends $Command<DeleteParametersCommandInput, DeleteParametersCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteParametersCommandInput;
    constructor(input: DeleteParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParametersCommandInput, DeleteParametersCommandOutput>;
    private serialize;
    private deserialize;
}
