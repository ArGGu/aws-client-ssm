import { Paginator } from "@aws-sdk/types";
import { DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput } from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInstancePatchStatesForPatchGroup(config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesForPatchGroupCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput>;
