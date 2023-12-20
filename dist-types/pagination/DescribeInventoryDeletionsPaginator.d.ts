import { Paginator } from "@aws-sdk/types";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput } from "../commands/DescribeInventoryDeletionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInventoryDeletions(config: SSMPaginationConfiguration, input: DescribeInventoryDeletionsCommandInput, ...additionalArguments: any): Paginator<DescribeInventoryDeletionsCommandOutput>;
