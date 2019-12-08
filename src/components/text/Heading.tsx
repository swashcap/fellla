import { JSX, h, FunctionComponent } from 'preact';
import { BaseText } from './BaseText';

export const Heading: FunctionComponent<JSX.HTMLAttributes> = props => (
  <BaseText as="h1" fontSize="large" {...props} />
);
