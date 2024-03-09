import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;

  const {
    order,
    sort,
    type,
    search,
    onChangeSearch,
    onChangeType,
    onChangeSort,
    onChangeOrder,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      type={type}
      sort={sort}
      order={order}
      search={search}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
    />
  );
});
