import { Page, PageElement, Template } from '@prisma-clients/templates-pages-write-model';

type FindOnePageDraftQueryResult = (Page & { elements: PageElement[]; template: Template }) | null;
type FindManyPageDraftsQueryResult = Page[];

export type { FindOnePageDraftQueryResult, FindManyPageDraftsQueryResult };
