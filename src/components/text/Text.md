```jsx
<Text>This is a sample text</Text>
```

Pass a component or DOM string with the `as` property to change the element:

```jsx
<Text as="p">This is a sample paragraph</Text>
```

Override a `Text`'s appearance with `style`

```jsx
<Text
  style={{
    background: 'linear-gradient(seashell, mistyrose)',
    color: 'indigo',
    display: 'block',
    textAlign: 'center',
    padding: '1em'
  }}
>
  This is a sample with style!
</Text>
```

You can also nest `Text`s for inline content and styling:

```jsx
<Text as="p">
  This is an <Text as="strong" style={{ color: 'red' }}>important</Text> text
</Text>
```