import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import logger from 'fela-plugin-logger';

import { theme } from './theme';

export const getRenderer = () => {
  const renderer = createRenderer({
    devMode: process.env.NODE_ENV !== 'production',
    plugins: [extend(), logger()],
  });

  renderer.renderStatic(
    {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after'
  );
  renderer.renderStatic(
    {
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
      lineHeight: 1.5,
    },
    'html'
  );
  renderer.renderStatic(
    {
      margin: 0,
    },
    'body'
  );

  return renderer;
};
