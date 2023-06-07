import { Page, Template, TemplateElement } from '@prisma-clients/templates-pages-write-model';

type FindOneTemplateQueryResult = (Template & { elements: TemplateElement[]; pages: Page[] }) | null;
type FindManyTemplatesQueryResult = Template[];

export type { FindOneTemplateQueryResult, FindManyTemplatesQueryResult };
