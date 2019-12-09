import { JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme, AppThemeSpacing } from '../../theme';

export interface SpacerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  spacing?: AppThemeSpacing;
}

export const Spacer = createComponent(
  ({
    direction = 'vertical',
    spacing = 'normal',
    theme,
  }: SpacerProps & { theme: AppTheme }) =>
    direction === 'horizontal'
      ? { height: '100%', width: theme.spacing[spacing] }
      : { height: theme.spacing[spacing], width: '100%' }
);
