import { createComponent } from 'preact-fela';
import { AppTheme } from './theme';

export const Heading = createComponent(
  ({ theme: { color } }: { theme: AppTheme }) => ({
    color,
    fontSize: '1.5em',
  }),
  'h1'
);
