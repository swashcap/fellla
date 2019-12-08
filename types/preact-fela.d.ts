declare module 'preact-fela' {
  import { IRenderer } from 'fela';
  import { ComponentType, Context, JSX } from 'preact';

  export interface PreactFela<T> {
    css: (...styles: JSX.HTMLAttributes['style'][]) => string;
    renderer: IRenderer;
    theme: T;
  }

  export function createComponent<Props = any>(
    rules: any,
    component?: ComponentType<Props> | keyof JSX.IntrinsicElements,
    passthrough?: string[]
  ): ComponentType<Props>;
  export function connect<Props = any>(
    rules: any
  ): (
    component: ComponentType<Props & { styles: any }>
  ) => ComponentType<Props>;

  export const RendererContext: Context<IRenderer>;
  export const ThemeContext: Context<any>;
}
