import { FunctionComponent, JSX, h } from 'preact';

import { TextInput } from './TextInput';
import { PrimaryButton } from './PrimaryButton';
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
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </HStack>
    </form>
  );
};
