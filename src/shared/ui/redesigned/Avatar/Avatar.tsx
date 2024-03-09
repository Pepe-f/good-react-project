import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};
