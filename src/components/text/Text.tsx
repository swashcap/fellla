import { JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme, AppThemeTextSizes } from '../../theme';

interface TextProps extends JSX.HTMLAttributes {
  color?: string;
  fontSize?: AppThemeTextSizes;
}

export const Text = createComponent<TextProps>(
  ({
    color,
    fontSize,
    theme,
  }: {
    color?: string;
    fontSize?: string;
    theme: AppTheme;
  }) => {
    const font =
      (fontSize && fontSize === 'large') ||
      fontSize === 'medium' ||
      fontSize === 'small'
        ? theme.typography[fontSize]
        : theme.typography.normal;

    return {
      color: color ? color : theme.colors.text,
      marginBottom: 0,
      marginTop: 0,
      ...font,
    };
  },
  'span'
);
