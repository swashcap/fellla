import { JSX, h, FunctionComponent } from 'preact';
import { Text } from './Text';

export const Heading: FunctionComponent<JSX.HTMLAttributes> = props => (
  <Text as="h1" fontSize="large" {...props} />
);
