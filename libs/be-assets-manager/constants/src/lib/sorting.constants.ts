import { CommonSortingByEnum } from '@common/constants';

enum AssetsSpecificSortingBy {
  NAME = 'name',
}

/**
 * Merge into Enum
 */
const FindManyAssetsSortingByEnum = { ...CommonSortingByEnum, ...AssetsSpecificSortingBy };
type FindManyAssetsSortingByEnum = typeof FindManyAssetsSortingByEnum;

export { FindManyAssetsSortingByEnum };
