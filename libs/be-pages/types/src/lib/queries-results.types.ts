import { CommonPaginationDto } from '@common/dtos';
import { Page, PageElement, Template } from '@prisma-clients/templates-pages-write-model';

type PageWithElementsAndTemplates = Page & { elements: PageElement[]; template: Template };
type FindOnePageDraftQueryResult = PageWithElementsAndTemplates | null;

type FindManyPageDraftsQueryResult = {
  pages: Page[];
  pagination?: CommonPaginationDto & { hasNextPage: boolean };
  totalCount: number;
};

export type { FindOnePageDraftQueryResult, FindManyPageDraftsQueryResult };
