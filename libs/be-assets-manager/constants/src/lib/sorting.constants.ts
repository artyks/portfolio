import { CommonSortingByEnum } from '@common/constants';

enum AssetsSpecificSortingBy {
  FILE_NAME = 'fileName',
}

/**
 * Merge into Enum
 */
const FindManyAssetsSortingByEnum = { ...CommonSortingByEnum, ...AssetsSpecificSortingBy };
type FindManyAssetsSortingByEnum = typeof FindManyAssetsSortingByEnum;

export { FindManyAssetsSortingByEnum, AssetsSpecificSortingBy };
