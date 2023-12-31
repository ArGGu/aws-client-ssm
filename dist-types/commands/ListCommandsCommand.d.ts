import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListCommandsRequest, ListCommandsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListCommandsCommandInput extends ListCommandsRequest {
}
export interface ListCommandsCommandOutput extends ListCommandsResult, __MetadataBearer {
}
/**
 * <p>Lists the commands requested by users of the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListCommandsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCommandsCommandInput} for command's `input` shape.
 * @see {@link ListCommandsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCommandsCommand extends $Command<ListCommandsCommandInput, ListCommandsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListCommandsCommandInput;
    constructor(input: ListCommandsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCommandsCommandInput, ListCommandsCommandOutput>;
    private serialize;
    private deserialize;
}
