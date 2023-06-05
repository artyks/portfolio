import { Prisma } from '@prisma/templates-pages-write-client';
import { CreateManyTemplateElementInput } from './template-elements-service.types';

type CreateTemplateInput = Omit<
  Prisma.TemplateCreateInput,
  'elements' | 'createdAt' | 'updatedAt' | 'elements' | 'pages'
> & { elements: CreateManyTemplateElementInput[] };

type ReplaceTemplateInput = CreateTemplateInput & {
  id: string;
};

export type { CreateTemplateInput, ReplaceTemplateInput };
