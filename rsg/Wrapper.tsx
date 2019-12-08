import { Component, ComponentChildren, h } from 'preact';
import { ThemeContext } from 'preact-fela';

import { RendererProvider } from '../src/RendererProvider';
import { getRenderer } from '../src/getRenderer';
import { theme } from '../src/theme';

export interface WrapperProps {
  children?: ComponentChildren;
}

const renderer = getRenderer();

export default class Wrapper extends Component<WrapperProps> {
  render({ children }: WrapperProps) {
    return (
      <RendererProvider renderer={renderer}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </RendererProvider>
    );
  }
}
