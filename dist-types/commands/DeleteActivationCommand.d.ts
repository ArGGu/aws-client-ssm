import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteActivationRequest, DeleteActivationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DeleteActivationCommandInput extends DeleteActivationRequest {
}
export interface DeleteActivationCommandOutput extends DeleteActivationResult, __MetadataBearer {
}
/**
 * <p>Deletes an activation. You aren't required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed instances. Deleting an
 *    activation doesn't de-register managed instances. You must manually de-register managed
 *    instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteActivationCommand extends $Command<DeleteActivationCommandInput, DeleteActivationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteActivationCommandInput;
    constructor(input: DeleteActivationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActivationCommandInput, DeleteActivationCommandOutput>;
    private serialize;
    private deserialize;
}
