import { h, render } from 'preact';

const appEl = document.getElementById('app');

if (appEl) {
  render(<h1>Hello, world!</h1>, appEl);
}
