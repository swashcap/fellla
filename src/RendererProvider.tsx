import { Component, h } from 'preact';
import { RendererContext } from 'preact-fela';
import { RendererProviderFactory } from 'fela-bindings';

export const RendererProvider = RendererProviderFactory(
  Component,
  RendererContext,
  h,
  (children: any) => children
);
