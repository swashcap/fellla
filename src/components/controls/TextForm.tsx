import { FunctionComponent, JSX, Ref, h } from 'preact';

import { TextInput } from './TextInput';
import { PrimaryButton } from './PrimaryButton';
import { HStack } from '../layout/HStack';

export interface TextFormProps extends JSX.HTMLAttributes<HTMLFormElement> {
  inputRef?: Ref<HTMLInputElement>;
}

export const TextForm: FunctionComponent<TextFormProps> = ({
  inputRef,
  ...rest
}) => {
  return (
    <form {...rest}>
      <HStack spacing="normal">
        <HStack.Item grow={2}>
          <TextInput innerRef={inputRef} placeholder="Enter" />
        </HStack.Item>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </HStack>
    </form>
  );
};
