import { Component, ComponentType, JSX, h } from 'preact';
import { connect, createComponent, ConnectedProps } from 'preact-fela';
import { AppTheme } from '../theme';
import { useCss } from '../hooks/useCss';

export type ListProps = JSX.HTMLAttributes<HTMLUListElement>;

export class List extends Component<ListProps> {
  static Item = createComponent(
    ({ theme }: { theme: AppTheme }) => ({
      borderBottom: `1px solid ${theme.colors.disabled}`,
      paddingBottom: theme.spacing.small,
      paddingLeft: theme.spacing.normal,
      paddingRight: theme.spacing.normal,
      paddingTop: theme.spacing.small,
    }),
    'li'
  );

  render({ class: className, ...rest }: ListProps) {
    const style = {
      listStyle: 'none',
      marginBottom: 0,
      marginTop: 0,
      paddingLeft: 0,
    };

    const css = useCss();

    return <ul class={css(style, className)} {...rest} />;
  }
}
