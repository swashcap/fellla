import { createComponent } from 'preact-fela';
import { AppTheme } from '../../theme';

export const Container = createComponent(({ theme }: { theme: AppTheme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '40em',
  paddingLeft: theme.spacing.normal,
  paddingRight: theme.spacing.normal,
}));
