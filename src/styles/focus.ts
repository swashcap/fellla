import { AppTheme } from '../theme';

/**
 * Reusable styles for `:focus`.
 */
export const getFocusStyles = (theme: AppTheme) => ({
  boxShadow: `0 0 0 2px ${theme.colors.accent}`,
  borderColor: theme.colors.accent,
  outline: 'none',
});
