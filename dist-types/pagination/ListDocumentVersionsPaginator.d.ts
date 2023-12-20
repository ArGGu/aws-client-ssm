import { Paginator } from "@aws-sdk/types";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput } from "../commands/ListDocumentVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListDocumentVersions(config: SSMPaginationConfiguration, input: ListDocumentVersionsCommandInput, ...additionalArguments: any): Paginator<ListDocumentVersionsCommandOutput>;
