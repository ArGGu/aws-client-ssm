"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribePatchProperties = void 0;
const DescribePatchPropertiesCommand_1 = require("../commands/DescribePatchPropertiesCommand");
const SSM_1 = require("../SSM");
const SSMClient_1 = require("../SSMClient");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribePatchPropertiesCommand_1.DescribePatchPropertiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describePatchProperties(input, ...args);
};
async function* paginateDescribePatchProperties(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSM_1.SSM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSMClient_1.SSMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSM | SSMClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribePatchProperties = paginateDescribePatchProperties;
