import { JSX, h } from 'preact';
import { connect } from 'preact-fela';
import { AppTheme } from '../../theme';

export interface GridProps extends JSX.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export const Grid = connect<GridProps>({
  item: ({ columns, theme }: GridProps & { theme: AppTheme }) => ({
    paddingLeft: theme.spacing.normal,
    paddingRight: theme.spacing.normal,
    width: columns ? `calc(100% / ${columns})` : '100%',
  }),
  root: ({ theme }: { theme: AppTheme }) => ({
    alignItems: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: `calc(-1 * ${theme.spacing.normal})`,
    marginRight: `calc(-1 * ${theme.spacing.normal})`,
  }),
})(({ children, columns, rules, styles, theme, ...rest }) => {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div class={styles.root} {...rest}>
      {items.map(item => (
        <div class={styles.item}>{item}</div>
      ))}
    </div>
  );
});
