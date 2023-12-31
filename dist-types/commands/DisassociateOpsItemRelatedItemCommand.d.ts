import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DisassociateOpsItemRelatedItemCommandInput extends DisassociateOpsItemRelatedItemRequest {
}
export interface DisassociateOpsItemRelatedItemCommandOutput extends DisassociateOpsItemRelatedItemResponse, __MetadataBearer {
}
/**
 * <p>Deletes the association between an OpsItem and a related item. For example, this API
 *    operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of
 *    Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DisassociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DisassociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link DisassociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateOpsItemRelatedItemCommand extends $Command<DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: DisassociateOpsItemRelatedItemCommandInput;
    constructor(input: DisassociateOpsItemRelatedItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput>;
    private serialize;
    private deserialize;
}
