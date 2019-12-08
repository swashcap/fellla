import { FunctionComponent, JSX, h } from 'preact';
import { connect } from 'preact-fela';
import { AppTheme } from '../../theme';

export type GridProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Grid: FunctionComponent<GridProps> = connect({
  item: ({ theme }: { theme: AppTheme }) => ({
    marginLeft: theme.spacing.normal,
    marginRight: theme.spacing.normal,
  }),
  root: ({ theme }: { theme: AppTheme }) => ({
    alignItems: 'stretch',
    display: 'flex',
    marginLeft: `calc(-1 * ${theme.spacing.normal})`,
    marginRight: `calc(-1 * ${theme.spacing.normal})`,
  }),
})(
  ({
    children,
    styles,
    ...rest
  }: GridProps & { styles: Record<string, string> }) => {
    const items = Array.isArray(children) ? children : [children];

    return (
      <div class={styles.root} {...rest}>
        {items.map(item => (
          <div class={styles.item}>{item}</div>
        ))}
      </div>
    );
  }
);
