import { PageArchivedHandler } from './page-archived.handler';
import { PageDraftCreatedHandler } from './page-draft-created.handler';
import { PagePublishedHandler } from './page-published.handler';
import { PageUnpublishedHandler } from './page-unpublished.handler';

const PageEventHandlers = [PageArchivedHandler, PageDraftCreatedHandler, PagePublishedHandler, PageUnpublishedHandler];

export { PageEventHandlers };
