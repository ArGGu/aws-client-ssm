import { Paginator } from "@aws-sdk/types";
import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput } from "../commands/DescribeInstanceInformationCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInstanceInformation(config: SSMPaginationConfiguration, input: DescribeInstanceInformationCommandInput, ...additionalArguments: any): Paginator<DescribeInstanceInformationCommandOutput>;
