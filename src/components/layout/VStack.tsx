import { FunctionComponent, JSX, h } from 'preact';
import { BaseStack, BaseStackAlignment, BaseStackProps } from './BaseStack';

export type VStackAlignment = 'bottom' | 'center' | 'top';

export type VStackProps = JSX.HTMLAttributes<HTMLDivElement> &
  Pick<BaseStackProps, 'reverse' | 'spacing'> & {
    alignment?: VStackAlignment;
  };

const alignmentMap = new Map<VStackAlignment, BaseStackAlignment>([
  ['bottom', BaseStackAlignment.END],
  ['center', BaseStackAlignment.CENTER],
  ['top', BaseStackAlignment.START],
]);

/**
 * Horizontally stack children elements.
 */
export const VStack: FunctionComponent<VStackProps> = ({
  alignment = 'top',
  ...rest
}) => (
  <BaseStack
    alignment={alignmentMap.get(alignment)!}
    direction="vertical"
    {...rest}
  />
);
