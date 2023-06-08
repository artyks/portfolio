import { CommonPaginationDto } from '@common/dtos';
import { Page, Template, TemplateElement } from '@prisma-clients/templates-pages-write-model';

type TemplateWithElementsAndPages = Template & { elements: TemplateElement[]; pages: Page[] };
type FindOneTemplateQueryResult = TemplateWithElementsAndPages | null;

type TemplateWithCountPages = Template & { _count: { pages: number } };
type FindManyTemplatesQueryResult = {
  templates: TemplateWithCountPages[];
  pagination?: CommonPaginationDto & { hasNextPage: boolean };
  totalCount: number;
};

export type { FindOneTemplateQueryResult, FindManyTemplatesQueryResult };
