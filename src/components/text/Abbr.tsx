import { JSX, h } from 'preact';
import { createComponent } from 'preact-fela';
import { Text } from './Text';

export type AbbrProps = JSX.HTMLAttributes<HTMLElement>;

export const Abbr = createComponent(
  {
    '[title]': {
      textDecoration: 'none',
    },
  },
  (props: AbbrProps) => <Text as="abbr" {...props} />,
  ['title']
);
