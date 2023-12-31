import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput } from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowTasks(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTasksCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowTasksCommandOutput>;
