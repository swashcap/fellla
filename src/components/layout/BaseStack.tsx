import {
  JSX,
  cloneElement,
  h,
  isValidElement,
  FunctionComponent,
} from 'preact';
import { connect, createComponent } from 'preact-fela';
import { AppTheme, AppThemeSpacing } from '../../theme';

/**
 * @note This is a private API: both `HStack` and `VStack` provide their own
 * alignment types.
 */
export enum BaseStackAlignment {
  CENTER,
  END,
  START,
}

const alignmentToJustify = new Map<BaseStackAlignment, string>([
  [BaseStackAlignment.CENTER, 'center'],
  [BaseStackAlignment.END, 'flex-end'],
  [BaseStackAlignment.START, 'flex-start'],
]);

export type BaseStackCrossAlignment = 'center' | 'end' | 'start';

const crossAlignmentToItems = new Map<BaseStackCrossAlignment, string>([
  ['center', 'center'],
  ['end', 'flex-end'],
  ['start', 'flex-start'],
]);

export interface BaseStackProps extends JSX.HTMLAttributes<HTMLDivElement> {
  alignment: BaseStackAlignment;
  crossAlignment?: 'center' | 'end' | 'start';
  direction: 'horizontal' | 'vertical';
  reverse?: boolean;
  spacing?: AppThemeSpacing;
}

export interface BaseStackItemProps extends JSX.HTMLAttributes {
  grow?: number;
}

export const BaseStackItem = createComponent<BaseStackItemProps>(
  ({ grow: flexGrow }: BaseStackItemProps) =>
    flexGrow ? { flexGrow } : undefined
);

/**
 * A primitive stacking component.
 */
export const BaseStack = connect<BaseStackProps>({
  item: ({
    direction,
    spacing,
    theme,
  }: BaseStackProps & { theme: AppTheme }) => {
    if (!spacing) {
      return;
    }

    return {
      [direction === 'horizontal' ? 'marginLeft' : 'marginTop']: theme.spacing[
        spacing
      ],
    };
  },
  root: ({
    alignment,
    crossAlignment = 'start',
    direction,
    reverse = false,
  }: BaseStackProps & { theme: AppTheme }) => {
    const flexDirection = direction === 'horizontal' ? 'row' : 'column';

    return {
      alignItems: crossAlignmentToItems.get(crossAlignment),
      display: 'flex',
      flexDirection: `${flexDirection}${reverse ? '-reverse' : ''}`,
      justifyContent: alignmentToJustify.get(alignment),
    };
  },
})(
  ({
    alignment,
    children,
    crossAlignment,
    direction,
    reverse,
    rules,
    spacing,
    styles,
    theme,
    ...rest
  }) => (
    <div class={styles.root} {...rest}>
      {Array.isArray(children) ? (
        children.map((child, i) => {
          const className = i > 0 ? styles.item : undefined;

          if (!child) {
            return;
          } else if (isValidElement(child) && child.type === BaseStackItem) {
            return cloneElement(child, { ...child.props, className });
          }

          return <BaseStackItem className={className}>{child}</BaseStackItem>;
        })
      ) : (
        <BaseStackItem>{children}</BaseStackItem>
      )}
    </div>
  )
);
