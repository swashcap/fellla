import { FunctionComponent, JSX, h } from 'preact';
import { Text } from './Text';

export const Subheading: FunctionComponent<JSX.HTMLAttributes> = props => (
  <Text as="h2" fontSize="medium" {...props} />
);
