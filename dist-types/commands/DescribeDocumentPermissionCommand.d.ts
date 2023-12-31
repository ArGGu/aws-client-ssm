import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribeDocumentPermissionCommandInput extends DescribeDocumentPermissionRequest {
}
export interface DescribeDocumentPermissionCommandOutput extends DescribeDocumentPermissionResponse, __MetadataBearer {
}
/**
 * <p>Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the
 *    document, you are the owner. If a document is shared, it can either be shared privately (by
 *    specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDocumentPermissionCommand extends $Command<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeDocumentPermissionCommandInput;
    constructor(input: DescribeDocumentPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
