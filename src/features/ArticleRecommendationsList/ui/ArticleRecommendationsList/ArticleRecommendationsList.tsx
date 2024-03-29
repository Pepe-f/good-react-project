import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationsList"
      >
        <Text size={TextSize.L} title={t('Рекомендуем')} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  },
);
