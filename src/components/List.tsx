import { Component, ComponentType, JSX, h } from 'preact';
import { connect, createComponent, ConnectedProps } from 'preact-fela';
import { AppTheme } from '../theme';
import { useCss } from '../hooks/useCss';

type HTMLListProps<T extends ListElements> = T extends 'ol'
  ? HTMLOListElement
  : HTMLUListElement;

export type ListElements = 'ol' | 'ul';

export interface ListProps<E extends ListElements = 'ul'>
  extends JSX.HTMLAttributes<HTMLListProps<E>> {
  as?: E;
}

export const List = connect({
  root: {
    listStyle: 'none',
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 0,
  },
})(
  class extends Component<ListProps> {
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

    render({
      as: Component = 'ul',
      class: className,
      rules,
      styles,
      theme,
      ...rest
    }: ListProps & ConnectedProps) {
      const css = useCss();

      return <Component class={styles.root} {...rest} />;
    }
  }
);
