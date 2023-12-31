import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ModifyDocumentPermissionCommandInput extends ModifyDocumentPermissionRequest {
}
export interface ModifyDocumentPermissionCommandOutput extends ModifyDocumentPermissionResponse, __MetadataBearer {
}
/**
 * <p>Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document
 *    privately, you must specify the Amazon Web Services user account IDs for those people who can use the
 *    document. If you share a document publicly, you must specify <i>All</i> as the
 *    account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDocumentPermissionCommand extends $Command<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput, SSMClientResolvedConfig> {
    readonly input: ModifyDocumentPermissionCommandInput;
    constructor(input: ModifyDocumentPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
