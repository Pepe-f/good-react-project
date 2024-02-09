import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Deprecated, use new components from the redesigned folder
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
  const { align = 'start' } = props;
  return <Flex direction="column" align={align} {...props} />;
};
