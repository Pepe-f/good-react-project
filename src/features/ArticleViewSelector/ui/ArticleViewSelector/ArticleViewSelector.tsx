import { memo } from 'react';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TileIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { ArticleView } from '@/entities/Article';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TileIcon,
      off: () => TileIconDeprecated,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
          border="round"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
                clickable
                onClick={onClick(viewType.view)}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                Svg={viewType.icon}
                width={24}
                height={24}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
