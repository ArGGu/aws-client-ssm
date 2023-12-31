import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface DescribePatchPropertiesCommandInput extends DescribePatchPropertiesRequest {
}
export interface DescribePatchPropertiesCommandOutput extends DescribePatchPropertiesResult, __MetadataBearer {
}
/**
 * <p>Lists the properties of available patches organized by product, product family,
 *    classification, severity, and other properties of available patches. You can use the reported
 *    properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
 *          <p>The following section lists the properties that can be used in filters for each major
 *    operating system type:</p>
 *          <dl>
 *             <dt>AMAZON_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>AMAZON_LINUX_2</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>CENTOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>DEBIAN</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>MACOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code>
 *                </p>
 *             </dd>
 *             <dt>ORACLE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>SUSE</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>UBUNTU</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>WINDOWS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> |
 *        <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchPropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchPropertiesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePatchPropertiesCommand extends $Command<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchPropertiesCommandInput;
    constructor(input: DescribePatchPropertiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
