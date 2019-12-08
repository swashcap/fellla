import { FunctionComponent, JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme, AppThemeTextSizes } from '../../theme';

// Fela's `extend` doesn't work for composition, so work from a private
// `BaseText` that exposes props
export const BaseText: FunctionComponent<JSX.HTMLAttributes & {
  fontSize?: AppThemeTextSizes;
}> = createComponent(
  ({ fontSize, theme }: { fontSize?: string; theme: AppTheme }) => {
    const font =
      (fontSize && fontSize === 'large') ||
      fontSize === 'medium' ||
      fontSize === 'small'
        ? theme.typography[fontSize]
        : theme.typography.normal;

    return {
      marginBottom: 0,
      marginTop: 0,
      ...font,
    };
  },
  'span'
);
