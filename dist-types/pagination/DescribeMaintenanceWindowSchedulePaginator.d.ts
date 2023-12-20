import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput } from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowSchedule(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowScheduleCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowScheduleCommandOutput>;
