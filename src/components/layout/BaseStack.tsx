import { FunctionComponent, JSX, h } from 'preact';
import { connect } from 'preact-fela';
import { AppTheme, AppThemeSpacing } from '../../theme';

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

export interface BaseStackProps extends JSX.HTMLAttributes<HTMLDivElement> {
  alignment: BaseStackAlignment;
  direction: 'horizontal' | 'vertical';
  reverse?: boolean;
  spacing?: AppThemeSpacing;
}

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
    direction,
    reverse = false,
  }: BaseStackProps & { theme: AppTheme }) => {
    const flexDirection = direction === 'horizontal' ? 'row' : 'column';
    return {
      display: 'flex',
      flexDirection: `${flexDirection}${reverse ? '-reverse' : ''}`,
      justifyContent: alignmentToJustify.get(alignment),
    };
  },
})(
  ({
    alignment,
    children,
    direction,
    reverse,
    spacing,
    styles,
    ...rest
  }: BaseStackProps & { styles: any }) => (
    <div class={styles.root} {...rest}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div class={i > 0 ? styles.item : undefined}>{child}</div>
          ))
        : children}
    </div>
  )
);
