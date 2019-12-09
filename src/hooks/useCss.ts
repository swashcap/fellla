import { JSX } from 'preact';
import { useContext } from 'preact/hooks';
import { combineRules, IRenderer } from 'fela';
import { RendererContext } from 'preact-fela';

import { useTheme } from './useTheme';

/**
 * A port of `useFela`'s CSS helper for preact.
 * https://github.com/robinweser/fela/blob/master/packages/react-fela/src/useFela.js
 */
export const useCss = (props?: any) => {
  const renderer = useContext<IRenderer>(RendererContext);
  const theme = useTheme();

  return (...styles: Array<any>) => {
    return renderer.renderRule(combineRules(...styles), { theme, ...props });
  };
};
