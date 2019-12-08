import { createComponent } from 'preact-fela';
import { AppTheme } from '../theme';

export const Button = createComponent(
  ({ theme: { color } }: { theme: AppTheme }) => ({
    background: color,
  }),
  'button'
);
