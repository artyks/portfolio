import { FindManyTemplatesHandler } from './find-many-templates.handler';
import { FindOneTemplateHandler } from './find-one-template.handler';

const QueryHandlers = [FindManyTemplatesHandler, FindOneTemplateHandler];

export { QueryHandlers };
