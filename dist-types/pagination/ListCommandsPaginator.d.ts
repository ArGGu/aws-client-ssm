import { Paginator } from "@aws-sdk/types";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListCommands(config: SSMPaginationConfiguration, input: ListCommandsCommandInput, ...additionalArguments: any): Paginator<ListCommandsCommandOutput>;
