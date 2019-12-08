import { FunctionComponent, JSX, h } from 'preact';
import { BaseStack, BaseStackAlignment, BaseStackProps } from './BaseStack';

export type HStackAlignment = 'center' | 'end' | 'start';

export type HStackProps = JSX.HTMLAttributes<HTMLDivElement> &
  Pick<BaseStackProps, 'crossAlignment' | 'reverse' | 'spacing'> & {
    alignment?: HStackAlignment;
  };

const alignmentMap = new Map<HStackAlignment, BaseStackAlignment>([
  ['center', BaseStackAlignment.CENTER],
  ['end', BaseStackAlignment.END],
  ['start', BaseStackAlignment.START],
]);

/**
 * Vertically stack children elements.
 */
export const HStack: FunctionComponent<HStackProps> = ({
  alignment = 'start',
  ...rest
}) => (
  <BaseStack
    alignment={alignmentMap.get(alignment)!}
    direction="horizontal"
    {...rest}
  />
);
