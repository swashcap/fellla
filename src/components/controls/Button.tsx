import { h, FunctionComponent, JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { BaseText } from '../text/BaseText';
import { AppTheme } from '../../theme';

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = createComponent(
  ({ disabled, theme }: ButtonProps & { theme: AppTheme }) => {
    return {
      background: disabled ? theme.colors.disabled : theme.colors.accent,
      border: '1px transparent',
      borderRadius: '100em',
      cursor: disabled ? 'default' : 'pointer',
      color: theme.colors.background,
      font: 'inherit',
      margin: 0,
      padding: `${theme.spacing.small} ${theme.spacing.normal}`,
    };
  },
  ({ children, ...rest }: ButtonProps) => (
    <button type="button" {...rest}>
      <BaseText color="inherit">{children}</BaseText>
    </button>
  )
);
