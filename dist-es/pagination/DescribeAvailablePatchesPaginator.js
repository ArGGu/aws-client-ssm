import { __asyncGenerator, __await, __awaiter, __generator, __read, __spreadArray } from "tslib";
import { DescribeAvailablePatchesCommand, } from "../commands/DescribeAvailablePatchesCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
var makePagedClientRequest = function (client, input) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, client.send.apply(client, __spreadArray([new DescribeAvailablePatchesCommand(input)], __read(args)))];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
var makePagedRequest = function (client, input) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, client.describeAvailablePatches.apply(client, __spreadArray([input], __read(args)))];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
export function paginateDescribeAvailablePatches(config, input) {
    var additionalArguments = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalArguments[_i - 2] = arguments[_i];
    }
    return __asyncGenerator(this, arguments, function paginateDescribeAvailablePatches_1() {
        var token, hasNext, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = config.startingToken || undefined;
                    hasNext = true;
                    _a.label = 1;
                case 1:
                    if (!hasNext) return [3, 9];
                    input.NextToken = token;
                    input["MaxResults"] = config.pageSize;
                    if (!(config.client instanceof SSM)) return [3, 3];
                    return [4, __await(makePagedRequest.apply(void 0, __spreadArray([config.client, input], __read(additionalArguments))))];
                case 2:
                    page = _a.sent();
                    return [3, 6];
                case 3:
                    if (!(config.client instanceof SSMClient)) return [3, 5];
                    return [4, __await(makePagedClientRequest.apply(void 0, __spreadArray([config.client, input], __read(additionalArguments))))];
                case 4:
                    page = _a.sent();
                    return [3, 6];
                case 5: throw new Error("Invalid client, expected SSM | SSMClient");
                case 6: return [4, __await(page)];
                case 7: return [4, _a.sent()];
                case 8:
                    _a.sent();
                    token = page.NextToken;
                    hasNext = !!token;
                    return [3, 1];
                case 9: return [4, __await(undefined)];
                case 10: return [2, _a.sent()];
            }
        });
    });
}
