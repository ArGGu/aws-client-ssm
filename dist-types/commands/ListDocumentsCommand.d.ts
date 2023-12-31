import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ListDocumentsCommandInput extends ListDocumentsRequest {
}
export interface ListDocumentsCommandOutput extends ListDocumentsResult, __MetadataBearer {
}
/**
 * <p>Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can
 *    limit the results of this request by using a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDocumentsCommand extends $Command<ListDocumentsCommandInput, ListDocumentsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListDocumentsCommandInput;
    constructor(input: ListDocumentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentsCommandInput, ListDocumentsCommandOutput>;
    private serialize;
    private deserialize;
}
