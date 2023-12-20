import { Paginator } from "@aws-sdk/types";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "../commands/ListDocumentsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListDocuments(config: SSMPaginationConfiguration, input: ListDocumentsCommandInput, ...additionalArguments: any): Paginator<ListDocumentsCommandOutput>;
