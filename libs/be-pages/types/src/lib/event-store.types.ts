import { DomainEvent } from '@be-event-store';
import {
  PAGE_ARCHIVED_EVENT_TYPE,
  PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DRAFT_CREATED_EVENT_TYPE,
  PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_PUBLISHED_EVENT_TYPE,
  PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_UNPUBLISHED_EVENT_TYPE,
} from '@be-pages/constants';
import {
  ArchivePageDto,
  CreatePageDto,
  PublishPageDto,
  SetPageAssetElementValueDto,
  SetPageDateTimeElementValueDto,
  SetPageMultipleChoiceElementValueDto,
  SetPageNumberElementValueDto,
  SetPageTextElementValueDto,
  UnpublishPageDto,
} from '@be-pages/dtos';

/** Pages */
type EsArchivePageDto = ArchivePageDto & { [key: string]: unknown };
type EsPageArchivedEvent = DomainEvent<typeof PAGE_ARCHIVED_EVENT_TYPE, EsArchivePageDto>;

type EsCreatePageDto = CreatePageDto & { [key: string]: unknown; id: string };
type EsPageDraftCreatedEvent = DomainEvent<typeof PAGE_DRAFT_CREATED_EVENT_TYPE, EsCreatePageDto>;

type EsPublishPageDto = PublishPageDto & { [key: string]: unknown };
type EsPagePublishedEvent = DomainEvent<typeof PAGE_PUBLISHED_EVENT_TYPE, EsPublishPageDto>;

type EsUnpublishPageDto = UnpublishPageDto & { [key: string]: unknown };
type EsPageUnpublishedEvent = DomainEvent<typeof PAGE_UNPUBLISHED_EVENT_TYPE, EsUnpublishPageDto>;

/** Page elements: */
type EsSetPageAssetElementValueDto = SetPageAssetElementValueDto & { [key: string]: unknown; pageId: string };
type EsPageAssetElementValueSettedEvent = DomainEvent<
  typeof PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  EsSetPageAssetElementValueDto
>;

type EsSetPageDateTimeElementValueDto = SetPageDateTimeElementValueDto & { [key: string]: unknown; pageId: string };
type EsPageDateTimeElementValueSettedEvent = DomainEvent<
  typeof PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  EsSetPageDateTimeElementValueDto
>;

type EsSetPageMultipleChoiceElementValueDto = SetPageMultipleChoiceElementValueDto & {
  [key: string]: unknown;
  pageId: string;
};
type EsPageMultipleChoiceElementValueSettedEvent = DomainEvent<
  typeof PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  EsSetPageMultipleChoiceElementValueDto
>;

type EsSetPageNumberElementValueDto = SetPageNumberElementValueDto & { [key: string]: unknown; pageId: string };
type EsPageNumberElementValueSettedEvent = DomainEvent<
  typeof PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  EsSetPageNumberElementValueDto
>;

type EsSetPageTextElementValueDto = SetPageTextElementValueDto & { [key: string]: unknown; pageId: string };
type EsPageTextElementValueSettedEvent = DomainEvent<
  typeof PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  EsSetPageTextElementValueDto
>;

export type {
  EsPageArchivedEvent,
  EsArchivePageDto,
  EsPageDraftCreatedEvent,
  EsCreatePageDto,
  EsPagePublishedEvent,
  EsPublishPageDto,
  EsPageUnpublishedEvent,
  EsUnpublishPageDto,
  EsPageAssetElementValueSettedEvent,
  EsSetPageAssetElementValueDto,
  EsPageDateTimeElementValueSettedEvent,
  EsSetPageDateTimeElementValueDto,
  EsPageMultipleChoiceElementValueSettedEvent,
  EsSetPageMultipleChoiceElementValueDto,
  EsPageNumberElementValueSettedEvent,
  EsSetPageNumberElementValueDto,
  EsPageTextElementValueSettedEvent,
  EsSetPageTextElementValueDto,
};
