import { FunctionComponent, JSX, h } from 'preact';
import { BaseText } from './BaseText';

export const Text: FunctionComponent<JSX.HTMLAttributes> = props => (
  <BaseText {...props} />
);
