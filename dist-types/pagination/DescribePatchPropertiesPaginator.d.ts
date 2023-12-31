import { Paginator } from "@aws-sdk/types";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput } from "../commands/DescribePatchPropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribePatchProperties(config: SSMPaginationConfiguration, input: DescribePatchPropertiesCommandInput, ...additionalArguments: any): Paginator<DescribePatchPropertiesCommandOutput>;
