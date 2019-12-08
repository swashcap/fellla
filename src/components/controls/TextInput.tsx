import { JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme } from '../../theme';

export type TextInputProps = JSX.HTMLAttributes<HTMLInputElement>;

export const TextInput = createComponent<TextInputProps>(
  ({ disabled, theme }: TextInputProps & { theme: AppTheme }) => ({
    background: theme.colors.background,
    borderColor: disabled ? theme.colors.disabled : theme.colors.text,
    borderRadius: '100em',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: disabled ? theme.colors.disabled : theme.colors.text,
    display: 'block',
    font: 'inherit',
    marginBottom: 0,
    marginTop: 0,
    padding: `${theme.spacing.small} ${theme.spacing.normal}`,
    width: '100%',

    '::placeholder': {
      color: theme.colors.disabled,
    },

    ':focus': {
      boxShadow: `0 0 0 2px ${theme.colors.accent}`,
      borderColor: theme.colors.accent,
      outline: 'none',
    },
  }),
  'input',
  ['placeholder', 'value']
);
