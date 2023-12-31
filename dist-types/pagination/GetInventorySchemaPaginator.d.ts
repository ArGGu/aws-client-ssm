import { Paginator } from "@aws-sdk/types";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "../commands/GetInventorySchemaCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetInventorySchema(config: SSMPaginationConfiguration, input: GetInventorySchemaCommandInput, ...additionalArguments: any): Paginator<GetInventorySchemaCommandOutput>;
