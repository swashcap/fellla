import { Component, JSX, h } from 'preact';
import {
  BaseStack,
  BaseStackAlignment,
  BaseStackProps,
  BaseStackItem,
} from './BaseStack';

export type VStackAlignment = 'bottom' | 'center' | 'top';

export type VStackProps = JSX.HTMLAttributes<HTMLDivElement> &
  Pick<BaseStackProps, 'crossAlignment' | 'reverse' | 'spacing'> & {
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
export class VStack extends Component<VStackProps> {
  static Item = BaseStackItem;

  render({ alignment = 'top', ...rest }: VStackProps) {
    return (
      <BaseStack
        alignment={alignmentMap.get(alignment)!}
        direction="vertical"
        {...rest}
      />
    );
  }
}
