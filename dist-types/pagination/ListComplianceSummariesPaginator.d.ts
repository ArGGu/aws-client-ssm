import { Paginator } from "@aws-sdk/types";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput } from "../commands/ListComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListComplianceSummaries(config: SSMPaginationConfiguration, input: ListComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListComplianceSummariesCommandOutput>;
