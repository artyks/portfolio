import { ArchiveTemplateHandler } from './archive-template.handler';
import { CreateTemplateHandler } from './create-template.handler';
import { PublishTemplateHandler } from './publish-template.handler';
import { ReplaceTemplateHandler } from './replace-template.handler';

const CommandHandlers = [ArchiveTemplateHandler, CreateTemplateHandler, PublishTemplateHandler, ReplaceTemplateHandler];

export { CommandHandlers };
