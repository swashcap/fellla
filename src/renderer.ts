import { createRenderer } from 'fela';

export const renderer = createRenderer({
  devMode: process.env.NODE_ENV !== 'production',
});
