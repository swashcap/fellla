import { JSX, Fragment, FunctionComponent, h } from 'preact';
import { useCss } from '../../hooks/useCss';
import { AppTheme } from '../../theme';
import { getFocusStyles } from '../../styles/focus';

const style = {
  indicator: ({
    checked,
    disabled,
    theme,
  }: CheckboxInputProps & { theme: AppTheme }) => ({
    background: theme.colors.inputBackground,
    borderColor: disabled ? theme.colors.disabled : theme.colors.text,
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'block',
    height: '1.25rem',
    width: '1.25rem',

    ':focus': getFocusStyles(theme),

    ':after': {
      color: disabled ? theme.colors.disabled : theme.colors.accent,
      content: checked ? '"✓"' : '',
      display: 'block',
      fontSize: '100%',
      lineHeight: 1,
      textAlign: 'center',
    },
  }),
  input: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
  },
  root: ({ disabled, theme }: CheckboxInputProps & { theme: AppTheme }) => ({
    cursor: disabled ? 'default' : 'pointer',
    display: 'block',
    padding: theme.spacing.small,
  }),
};

export interface CheckboxInputProps
  extends JSX.HTMLAttributes<HTMLLabelElement> {
  inputProps?: JSX.HTMLAttributes<HTMLInputElement>;
}

export const CheckboxInput: FunctionComponent<CheckboxInputProps> = ({
  class: className,
  inputProps,
  ...rest
}) => {
  const css = useCss(rest);

  return (
    <label class={css(style.root, className)} {...rest}>
      <span class={css(style.indicator)} />
      <input class={css(style.input)} type="checkbox" {...inputProps} />
    </label>
  );
};
