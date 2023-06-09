import { ASSET_ARCHIVED_EVENT_GLOBAL, ASSET_UPLOADED_EVENT_GLOBAL } from '@be-assets-manager/constants';
import { ArchiveAssetDto, UploadAssetDto } from '@be-assets-manager/dtos';
import {
  PAGE_ARCHIVED_EVENT_GLOBAL,
  PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_DRAFT_CREATED_EVENT_GLOBAL,
  PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_PUBLISHED_EVENT_GLOBAL,
  PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_UNPUBLISHED_EVENT_GLOBAL,
} from '@be-pages/constants';
import {
  EsArchivePageDto,
  EsCreatePageDto,
  EsPublishPageDto,
  EsSetPageAssetElementValueDto,
  EsSetPageDateTimeElementValueDto,
  EsSetPageMultipleChoiceElementValueDto,
  EsSetPageNumberElementValueDto,
  EsSetPageTextElementValueDto,
  EsUnpublishPageDto,
} from '@be-pages/types';
import {
  TEMPLATE_ARCHIVED_EVENT_GLOBAL,
  TEMPLATE_CREATED_EVENT_GLOBAL,
  TEMPLATE_PUBLISHED_EVENT_GLOBAL,
  TEMPLATE_REPLACED_EVENT_GLOBAL,
} from '@be-templates/constants';
import { ArchiveTemplateDto, CreateTemplateDto, PublishTemplateDto, ReplaceTemplateDto } from '@be-templates/dtos';
import { MessageEvent } from '@nestjs/common';

type UserId = string;
type GlobalEvent =
  | typeof ASSET_ARCHIVED_EVENT_GLOBAL
  | typeof ASSET_UPLOADED_EVENT_GLOBAL
  | typeof PAGE_ARCHIVED_EVENT_GLOBAL
  | typeof PAGE_PUBLISHED_EVENT_GLOBAL
  | typeof PAGE_UNPUBLISHED_EVENT_GLOBAL
  | typeof PAGE_DRAFT_CREATED_EVENT_GLOBAL
  | typeof TEMPLATE_ARCHIVED_EVENT_GLOBAL
  | typeof TEMPLATE_CREATED_EVENT_GLOBAL
  | typeof TEMPLATE_PUBLISHED_EVENT_GLOBAL
  | typeof TEMPLATE_REPLACED_EVENT_GLOBAL
  | typeof PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
  | typeof PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
  | typeof PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
  | typeof PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
  | typeof PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL;

type MessageEventDataMetadata<TEventName> = { eventName: TEventName; requestId?: string };

type TMessageEventData<TPayload extends { [key: string]: unknown }, TEventName extends GlobalEvent> = TPayload & {
  metadata: MessageEventDataMetadata<TEventName>;
};

type PayloadWithoutMetadata<TPayload> = Omit<TPayload, 'userId' | 'requestId'>;

type AssetsArchivedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<ArchiveAssetDto>,
  typeof ASSET_ARCHIVED_EVENT_GLOBAL
>;
type AssetsUploadedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<UploadAssetDto>,
  typeof ASSET_UPLOADED_EVENT_GLOBAL
>;

type PageArchivedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsArchivePageDto>,
  typeof PAGE_ARCHIVED_EVENT_GLOBAL
>;
type PageDraftCreatedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsCreatePageDto>,
  typeof PAGE_DRAFT_CREATED_EVENT_GLOBAL
>;
type PagePublishedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsPublishPageDto>,
  typeof PAGE_PUBLISHED_EVENT_GLOBAL
>;
type PageUnpublishedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsUnpublishPageDto>,
  typeof PAGE_UNPUBLISHED_EVENT_GLOBAL
>;

type TeplateArchivedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<ArchiveTemplateDto>,
  typeof TEMPLATE_ARCHIVED_EVENT_GLOBAL
>;
type TeplateCreatedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<CreateTemplateDto>,
  typeof TEMPLATE_CREATED_EVENT_GLOBAL
>;
type TeplatePublishedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<PublishTemplateDto>,
  typeof TEMPLATE_PUBLISHED_EVENT_GLOBAL
>;
type TeplateReplacedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<ReplaceTemplateDto>,
  typeof TEMPLATE_REPLACED_EVENT_GLOBAL
>;

type PageAssetElementValueSettedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsSetPageAssetElementValueDto>,
  typeof PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
>;
type PageDateTimeElementValueSettedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsSetPageDateTimeElementValueDto>,
  typeof PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
>;
type PageMultipleChoiceElementValueSettedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsSetPageMultipleChoiceElementValueDto>,
  typeof PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
>;
type PageNumberElementValueSettedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsSetPageNumberElementValueDto>,
  typeof PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
>;
type PageTextElementValueSettedMessageEventData = TMessageEventData<
  PayloadWithoutMetadata<EsSetPageTextElementValueDto>,
  typeof PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL
>;

type MessageEventData =
  | AssetsArchivedMessageEventData
  | AssetsUploadedMessageEventData
  | PageArchivedMessageEventData
  | PageDraftCreatedMessageEventData
  | PagePublishedMessageEventData
  | PageUnpublishedMessageEventData
  | TeplateArchivedMessageEventData
  | TeplateCreatedMessageEventData
  | TeplatePublishedMessageEventData
  | TeplateReplacedMessageEventData
  | PageAssetElementValueSettedMessageEventData
  | PageDateTimeElementValueSettedMessageEventData
  | PageMultipleChoiceElementValueSettedMessageEventData
  | PageNumberElementValueSettedMessageEventData
  | PageTextElementValueSettedMessageEventData;

type NotificationsMessageEvent = Omit<MessageEvent, 'data'> & { data: MessageEventData };

export type { UserId, NotificationsMessageEvent, MessageEventData };
