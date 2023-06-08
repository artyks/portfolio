import { CommonSortingByEnum } from '@common/constants';

enum TemplatesSpecificSortingBy {
  IS_PUBLISHED = 'isPublished',
  IS_ARCHIVED = 'isArchived',
  NAME = 'name',
  CODENAME = 'codename',
}

/**
 * Merge into Enum
 */
const FindManyTemplatesSortingByEnum = { ...CommonSortingByEnum, ...TemplatesSpecificSortingBy };
type FindManyTemplatesSortingByEnum = typeof FindManyTemplatesSortingByEnum;

export { FindManyTemplatesSortingByEnum };
