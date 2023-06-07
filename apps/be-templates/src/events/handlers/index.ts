import { TemplateArchivedHandler } from './template-archived.handler';
import { TemplateCreatedHandler } from './template-created.handler';
import { TemplatePublishedHandler } from './template-published.handler';
import { TemplateReplacedHandler } from './template-replaced.handler';

const EventHandlers = [
  TemplateArchivedHandler,
  TemplateCreatedHandler,
  TemplatePublishedHandler,
  TemplateReplacedHandler,
];

export { EventHandlers };
