import { JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme, AppThemeTextSizes } from '../../theme';

type GetAttributes<E> = E extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[E]
  : JSX.IntrinsicElements['span'];

type TextProps<E extends keyof JSX.IntrinsicElements = any> = GetAttributes<
  E
> & {
  as?: E;
  color?: string;
  fontSize?: AppThemeTextSizes;
};

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
  'span',
  Object.keys
);
