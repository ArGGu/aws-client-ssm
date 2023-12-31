import { Paginator } from "@aws-sdk/types";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeEffectiveInstanceAssociations(config: SSMPaginationConfiguration, input: DescribeEffectiveInstanceAssociationsCommandInput, ...additionalArguments: any): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;
