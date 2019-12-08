import { h, render } from 'preact';
import { ThemeContext } from 'preact-fela';

import { Heading } from './components/text/Heading';
import { RendererProvider } from './RendererProvider';
import { getRenderer } from './getRenderer';
import { theme } from './theme';

const appEl = document.getElementById('app');

if (appEl) {
  render(
    <RendererProvider renderer={getRenderer()}>
      <ThemeContext.Provider value={theme}>
        <Heading>Hello, world!</Heading>
      </ThemeContext.Provider>
    </RendererProvider>,
    appEl
  );
}
