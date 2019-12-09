```jsx
<HStack
  alignment="end"
  spacing="small"
  style={{ height: "4em" }}
>
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</HStack>
```

Manually add `HStack.Item`s to control their flexbox behavoir:

```jsx
<HStack>
  <HStack.Item grow={2}>
    Growing
  </HStack.Item>
  <div style={{ width: '100px' }}>Not growing</div>
</HStack>
```
