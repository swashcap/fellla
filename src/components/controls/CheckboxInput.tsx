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
    cursor: disabled ? 'default' : 'pointer',
    display: 'block',
    height: '1.5rem',
    width: '1.5rem',

    ':focus': getFocusStyles(theme),

    ':after': {
      color: disabled ? theme.colors.disabled : theme.colors.accent,
      content: checked ? '"✓"' : '',
      display: 'block',
      fontSize: '125%',
      lineHeight: 1,
      textAlign: 'center',
    },
  }),
  input: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
  },
};

export type CheckboxInputProps = JSX.HTMLAttributes<HTMLInputElement>;

export const CheckboxInput: FunctionComponent<CheckboxInputProps> = ({
  class: className,
  ...rest
}) => {
  const css = useCss(rest);

  return (
    <Fragment>
      <span class={css(style.indicator, className)} />
      <input class={css(style.input)} type="checkbox" {...rest} />
    </Fragment>
  );
};
