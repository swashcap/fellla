import { FunctionComponent, JSX } from 'preact';
import { createComponent } from 'preact-fela';
import { AppTheme, theme } from '../../theme';

export type TextInputProps = JSX.HTMLAttributes<HTMLInputElement>;

export const TextInput: FunctionComponent<TextInputProps> = createComponent(
  ({ disabled, theme }: TextInputProps & { theme: AppTheme }) => ({
    borderColor: disabled ? theme.colors.disabled : theme.colors.text,
    borderRadius: '100em',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: disabled ? theme.colors.disabled : theme.colors.text,
    display: 'block',
    font: 'inherit',
    padding: `${theme.spacing.small} ${theme.spacing.normal}`,
    width: '100%',

    '::placeholder': {
      color: theme.colors.disabled,
    },
  }),
  'input',
  ['placeholder', 'value']
);
