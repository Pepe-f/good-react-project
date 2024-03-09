import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import cls from './ArticlesFilters.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    type,
    sort,
    order,
    search,
    onChangeSort,
    onChangeType,
    onChangeSearch,
    onChangeOrder,
  } = props;

  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleTypeTabs value={type} onChangeType={onChangeType} />
      </VStack>
    </Card>
  );
});
