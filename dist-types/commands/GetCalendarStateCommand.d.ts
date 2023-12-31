import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {
}
export interface GetCalendarStateCommandOutput extends GetCalendarStateResponse, __MetadataBearer {
}
/**
 * <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If
 *    you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that
 *    specific time, and returns the next time that the change calendar state will transition. If you
 *    don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar
 *    entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCalendarStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCalendarStateCommandInput} for command's `input` shape.
 * @see {@link GetCalendarStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCalendarStateCommand extends $Command<GetCalendarStateCommandInput, GetCalendarStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetCalendarStateCommandInput;
    constructor(input: GetCalendarStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCalendarStateCommandInput, GetCalendarStateCommandOutput>;
    private serialize;
    private deserialize;
}
