"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = require("tslib");
// @ts-ignore: package.json will be imported from dist folders
const package_json_1 = tslib_1.__importDefault(require("../package.json")); // eslint-disable-line
const client_sts_1 = require("@aws-sdk/client-sts");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const hash_node_1 = require("@aws-sdk/hash-node");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const node_config_provider_1 = require("@aws-sdk/node-config-provider");
const node_http_handler_1 = require("@aws-sdk/node-http-handler");
const util_base64_node_1 = require("@aws-sdk/util-base64-node");
const util_body_length_node_1 = require("@aws-sdk/util-body-length-node");
const util_user_agent_node_1 = require("@aws-sdk/util-user-agent-node");
const util_utf8_node_1 = require("@aws-sdk/util-utf8-node");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * @internal
 */
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    smithy_client_1.emitWarningIfUnsupportedVersion(process.version);
    const clientSharedValues = runtimeConfig_shared_1.getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : client_sts_1.decorateDefaultCredentialProvider(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : util_user_agent_node_1.defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : node_config_provider_1.loadConfig(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_g = config === null || config === void 0 ? void 0 : config.region) !== null && _g !== void 0 ? _g : node_config_provider_1.loadConfig(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_h = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _h !== void 0 ? _h : new node_http_handler_1.NodeHttpHandler(),
        retryMode: (_j = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _j !== void 0 ? _j : node_config_provider_1.loadConfig(middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS),
        sha256: (_k = config === null || config === void 0 ? void 0 : config.sha256) !== null && _k !== void 0 ? _k : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_l = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _l !== void 0 ? _l : node_http_handler_1.streamCollector,
        utf8Decoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _m !== void 0 ? _m : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _o !== void 0 ? _o : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
