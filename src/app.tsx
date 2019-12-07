import { h, render } from 'preact';
import { ThemeContext } from 'preact-fela';

import { Heading } from './Heading';
import { RendererProvider } from './RendererProvider';
import { renderer } from './renderer';
import { theme } from './theme';

const appEl = document.getElementById('app');

if (appEl) {
  render(
    <RendererProvider renderer={renderer}>
      <ThemeContext.Provider value={theme}>
        <Heading>Hello, world!</Heading>
      </ThemeContext.Provider>
    </RendererProvider>,
    appEl
  );
}
