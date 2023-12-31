import { Logger as __Logger } from "@aws-sdk/types";
import { SSMClientConfig } from "./SSMClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: SSMClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    regionInfoProvider: import("@aws-sdk/types").RegionInfoProvider;
    serviceId: string;
    urlParser: import("@aws-sdk/types").UrlParser;
};
