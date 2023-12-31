import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetOpsMetadataRequest, GetOpsMetadataResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetOpsMetadataCommandInput extends GetOpsMetadataRequest {
}
export interface GetOpsMetadataCommandOutput extends GetOpsMetadataResult, __MetadataBearer {
}
/**
 * <p>View operational metadata related to an application in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOpsMetadataCommand extends $Command<GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsMetadataCommandInput;
    constructor(input: GetOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
