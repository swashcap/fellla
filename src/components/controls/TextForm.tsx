import { FunctionComponent, JSX, h } from 'preact';

import { TextInput } from './TextInput';
import { Button } from './Button';
import { HStack } from '../layout/HStack';

export const TextForm: FunctionComponent<JSX.HTMLAttributes<
  HTMLFormElement
>> = props => {
  return (
    <form {...props}>
      <HStack spacing="normal">
        <HStack.Item grow={2}>
          <TextInput placeholder="Enter" />
        </HStack.Item>
        <Button type="submit">Submit</Button>
      </HStack>
    </form>
  );
};
