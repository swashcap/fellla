import { JSX, h } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme } from '../../theme';
import { Text } from '../text/Text';

export type SecondaryButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export const SecondaryButton = createComponent(
  ({ disabled, theme }: SecondaryButtonProps & { theme: AppTheme }) => ({
    background: 'transparent',
    borderColor: disabled ? theme.colors.disabled : theme.colors.text,
    borderRadius: '100em',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: disabled ? theme.colors.disabled : theme.colors.text,
    cursor: disabled ? 'default' : 'pointer',
    font: 'inherit',
    marginBottom: 0,
    marginTop: 0,
    padding: `${theme.spacing.small} ${theme.spacing.normal}`,
  }),
  ({ children, ...rest }: SecondaryButtonProps) => (
    <button type="button" {...rest}>
      <Text color="inherit">{children}</Text>
    </button>
  ),
  ['disabled', 'onClick', 'type']
);
