import { Prisma } from '@prisma/templates-pages-write-client';

type CreateManyTemplateElementInput = Omit<
  Prisma.TemplateElementCreateInput,
  'id' | 'prevElement' | 'nextElement' | 'pageElement' | 'createdAt' | 'updatedAt'
> & {
  id: string;
  prevElementId: string | null;
};

type ReplaceManyTemplateElementInput = Omit<CreateManyTemplateElementInput, 'template' | 'type'>;

export type { CreateManyTemplateElementInput, ReplaceManyTemplateElementInput };
