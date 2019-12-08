import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import logger from 'fela-plugin-logger';

export const getRenderer = () => {
  const renderer = createRenderer({
    devMode: process.env.NODE_ENV !== 'production',
    plugins: [extend(), logger()],
  });

  renderer.renderStatic(
    {
      backgroundColor: '#fff',
      color: '#222',
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
