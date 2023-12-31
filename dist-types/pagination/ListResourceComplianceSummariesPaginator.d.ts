import { Paginator } from "@aws-sdk/types";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput } from "../commands/ListResourceComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListResourceComplianceSummaries(config: SSMPaginationConfiguration, input: ListResourceComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListResourceComplianceSummariesCommandOutput>;
