import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface AssociateOpsItemRelatedItemCommandInput extends AssociateOpsItemRelatedItemRequest {
}
export interface AssociateOpsItemRelatedItemCommandOutput extends AssociateOpsItemRelatedItemResponse, __MetadataBearer {
}
/**
 * <p>Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an
 *    Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of
 *    Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateOpsItemRelatedItemCommand extends $Command<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: AssociateOpsItemRelatedItemCommandInput;
    constructor(input: AssociateOpsItemRelatedItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput>;
    private serialize;
    private deserialize;
}
