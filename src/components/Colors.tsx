import { h } from 'preact';
import { hex } from 'color-convert';

import { Grid } from './layout/Grid';
import { Text } from './text/Text';
import { VStack } from './layout/VStack';
import { useCss } from '../hooks/useCss';
import { useTheme } from '../hooks/useTheme';
import { AppTheme } from '../theme';

export const Colors = () => {
  const css = useCss();
  const theme = useTheme();
  const colors = Object.keys(theme.colors);
  const boxShadow = `rgba(${hex
    .rgb(theme.colors.text)
    .join(',')}, .15) 0 1px 10px`;

  return (
    <Grid columns={colors.length}>
      {colors.map(color => {
        const backgroundColor = theme.colors[color as keyof AppTheme['colors']];

        return (
          <VStack key={color} spacing="normal">
            <div
              class={css({
                backgroundColor,
                borderRadius: '100%',
                boxShadow,
                height: '5em',
                width: '5em',
              })}
            />
            <Text>{color}</Text>
          </VStack>
        );
      })}
    </Grid>
  );
};
