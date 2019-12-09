import { h, render } from 'preact';
import { ThemeContext } from 'preact-fela';

import { App } from './components/App';
import { RendererProvider } from './RendererProvider';
import { getRenderer } from './getRenderer';
import { theme } from './theme';

const appEl = document.getElementById('app');

if (appEl) {
  render(
    <RendererProvider renderer={getRenderer()}>
      <ThemeContext.Provider value={theme}>
        <App />
      </ThemeContext.Provider>
    </RendererProvider>,
    appEl
  );
}
