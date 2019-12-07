import { Component, h, render } from 'preact';
import { RendererContext, ThemeContext, createComponent } from 'preact-fela';
import { RendererProviderFactory } from 'fela-bindings';

import { renderer } from './renderer';

interface AppTheme {
  color: string;
}

const appEl = document.getElementById('app');

const theme: AppTheme = {
  color: 'purple',
};

const RendererProvider = RendererProviderFactory(
  Component,
  RendererContext,
  h,
  (children: any) => children
);

const Heading = createComponent(
  ({ theme: { color } }: { theme: AppTheme }) => ({
    color,
    fontSize: '1.5em',
  }),
  'h1'
);

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
