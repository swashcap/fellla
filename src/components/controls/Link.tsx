import { JSX, h } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme } from '../../theme';
import { Text } from '../text/Text';

export type LinkProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export const Link = createComponent<LinkProps>(
  ({ theme }: { theme: AppTheme }) => ({
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'underline',

    ':focus': {
      color: theme.colors.accent,
    },
    ':hover': {
      color: theme.colors.accent,
    },
  }),
  (props: LinkProps) => <Text as="a" {...props} />,
  ['href']
);
