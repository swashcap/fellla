import { FunctionComponent, JSX, h } from 'preact';
import { BaseText } from './BaseText';

export const Subheading: FunctionComponent<JSX.HTMLAttributes> = props => (
  <BaseText as="h2" fontSize="medium" {...props} />
);
