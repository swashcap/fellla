import { JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme } from '../../theme';
import { getFocusStyles } from '../../styles/focus';

export type TextInputProps = JSX.HTMLAttributes<HTMLInputElement>;

export const TextInput = createComponent<TextInputProps>(
  ({ disabled, theme }: TextInputProps & { theme: AppTheme }) => ({
    background: theme.colors.inputBackground,
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

    ':focus': getFocusStyles(theme),
  }),
  'input',
  ['disabled', 'placeholder', 'value']
);
