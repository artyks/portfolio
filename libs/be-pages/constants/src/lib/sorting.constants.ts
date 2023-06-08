import { CommonSortingByEnum } from '@common/constants';

enum PageDraftsSpecificSortingBy {
  IS_PUBLISHED = 'isPublished',
  IS_ARCHIVED = 'isArchived',
  NAME = 'name',
  CODENAME = 'codename',
}

/**
 * Merge into Enum
 */
const FindManyPageDraftsSortingByEnum = { ...CommonSortingByEnum, ...PageDraftsSpecificSortingBy };
type FindManyPageDraftsSortingByEnum = typeof FindManyPageDraftsSortingByEnum;

export { FindManyPageDraftsSortingByEnum };
