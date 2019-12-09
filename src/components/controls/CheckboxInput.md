```jsx
import { HStack } from '../layout/HStack'
;
<HStack spacing="normal">
  <CheckboxInput onClick={console.log} />
  <CheckboxInput checked />
</HStack>
```

```jsx
import { HStack } from '../layout/HStack'
;
<HStack spacing="normal">
  <CheckboxInput disabled />
  <CheckboxInput checked disabled />
</HStack>
```
