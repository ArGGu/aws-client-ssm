import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ResetServiceSettingRequest, ResetServiceSettingResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface ResetServiceSettingCommandInput extends ResetServiceSettingRequest {
}
export interface ResetServiceSettingCommandOutput extends ResetServiceSettingResult, __MetadataBearer {
}
/**
 * <p>
 *             <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 *    service team might create a default setting of "false". This means the user can't use this
 *    feature unless they change the setting to "true" and intentionally opt in for a paid
 *    feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the
 *    current value. Use the <a>UpdateServiceSetting</a> API operation to change the default
 *    setting. </p>
 *          <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services
 *    service team. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResetServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResetServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ResetServiceSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetServiceSettingCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetServiceSettingCommand extends $Command<ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput, SSMClientResolvedConfig> {
    readonly input: ResetServiceSettingCommandInput;
    constructor(input: ResetServiceSettingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput>;
    private serialize;
    private deserialize;
}
