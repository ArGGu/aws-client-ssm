import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UpdateOpsMetadataRequest, UpdateOpsMetadataResult } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface UpdateOpsMetadataCommandInput extends UpdateOpsMetadataRequest {
}
export interface UpdateOpsMetadataCommandOutput extends UpdateOpsMetadataResult, __MetadataBearer {
}
/**
 * <p>Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateOpsMetadataCommand extends $Command<UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateOpsMetadataCommandInput;
    constructor(input: UpdateOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
