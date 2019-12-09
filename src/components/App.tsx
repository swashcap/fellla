import { h } from 'preact';
import { useRef } from 'preact/hooks';

import { Abbr } from './text/Abbr';
import { CheckboxInput } from './controls/CheckboxInput';
import { Container } from './layout/Container';
import { HStack } from './layout/HStack';
import { Heading } from './text/Heading';
import { Link } from './controls/Link';
import { List } from './List';
import { SecondaryButton } from './controls/SecondaryButton';
import { Spacer } from './layout/Spacer';
import { Subheading } from './text/Subheading';
import { Text } from './text/Text';
import { TextForm } from './controls/TextForm';
import { VStack } from './layout/VStack';
import { useList } from '../hooks/useList';

export const App = () => {
  const input = useRef<HTMLInputElement | null>(null);
  const [list, dispatch] = useList([
    {
      isComplete: false,
      text: 'Learn Fela',
    },
    {
      isComplete: false,
      text: 'Learn Preact',
    },
    {
      isComplete: true,
      text: 'Make a list',
    },
  ]);

  return (
    <Container>
      <VStack spacing="normal">
        <header role="banner">
          <VStack spacing="normal">
            <Spacer />
            <Heading>Fellla</Heading>
            <Text as="p">
              This project demos <Abbr title="Cascading Style Sheets">CSS</Abbr>{' '}
              in JavaScript via the runtime library{' '}
              <Link href="https://fela.js.org">Fela</Link>. The{' '}
              <Abbr title="User Interface">UI</Abbr> is powered by{' '}
              <Link href="https://preactjs.com">Preact</Link>.
            </Text>
            <Spacer spacing="medium" />
          </VStack>
        </header>
        <main>
          <VStack spacing="normal">
            <Subheading as="label" htmlFor="text">
              Add something to the list:
            </Subheading>
            <TextForm
              inputRef={input}
              onSubmit={event => {
                event.preventDefault();

                if (input.current && input.current.value) {
                  dispatch({
                    payload: {
                      isComplete: false,
                      text: input.current.value,
                    },
                    type: 'LIST_ADD_ITEM',
                  });
                  input.current.value = '';
                }
              }}
            />
            <Spacer spacing="smalls" />
            <List>
              {Object.keys(list).map(id => (
                <List.Item key={id}>
                  <HStack crossAlignment="center" spacing="normal">
                    <HStack.Item>
                      <CheckboxInput
                        checked={list[id].isComplete}
                        onClick={event => {
                          event.preventDefault();
                          dispatch({
                            payload: {
                              id,
                              value: !list[id].isComplete,
                            },
                            type: 'LIST_SET_COMPLETE_ITEM',
                          });
                        }}
                      />
                    </HStack.Item>
                    <HStack.Item grow={2}>
                      <Text>{list[id].text}</Text>
                    </HStack.Item>
                    <HStack.Item>
                      <SecondaryButton
                        onClick={() => {
                          dispatch({
                            payload: id,
                            type: 'LIST_REMOVE_ITEM',
                          });
                        }}
                      >
                        Remove
                      </SecondaryButton>
                    </HStack.Item>
                  </HStack>
                </List.Item>
              ))}
            </List>
          </VStack>
        </main>
        <footer role="contentinfo">
          <Text as="small" fontSize="small">
            Source code{' '}
            <Link href="https://github.com/swashcap/fellla">on GitHub</Link>.
          </Text>
        </footer>
      </VStack>
    </Container>
  );
};
