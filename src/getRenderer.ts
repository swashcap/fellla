import { createRenderer } from 'fela';

export const getRenderer = () => {
  const renderer = createRenderer({
    devMode: process.env.NODE_ENV !== 'production',
  });

  renderer.renderStatic(
    {
      backgroundColor: '#fff',
      color: '#222',
      fontFamily: 'sans-serif',
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
