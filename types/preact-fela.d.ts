declare module 'preact-fela' {
  import { IRenderer } from 'fela';
  import { ComponentType, Context, JSX } from 'preact';

  export interface ConnectedProps<T = any> {
    rules: any;
    styles: Record<string, string>;
    theme: T;
  }

  export function createComponent<Props = any>(
    rules: any,
    component?: ComponentType<Props> | keyof JSX.IntrinsicElements,
    passthrough?: string[]
  ): ComponentType<Props>;
  export function connect<Props = any, Rules extends Record<string, any> = any>(
    rules: Rules
  ): (component: ComponentType<Props & ConnectedProps>) => ComponentType<Props>;

  export const RendererContext: Context<IRenderer>;
  export const ThemeContext: Context<any>;
}
