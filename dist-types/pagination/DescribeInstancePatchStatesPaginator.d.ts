import { Paginator } from "@aws-sdk/types";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput } from "../commands/DescribeInstancePatchStatesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInstancePatchStates(config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchStatesCommandOutput>;
