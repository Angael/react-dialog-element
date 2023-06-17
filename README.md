# react-dialog-element
React Dialog component using native `<dialog>` element.

Using native HTML element has few benefits over custom dialog components: 
- Better accessibility
- Better performance
- Small bundle size (about 1kB)
- Fully styleable
- Traps focus inside dialog
- Closes on escape key press
- Closes on click outside dialog

## Usage
```jsx
import { Dialog } from 'react-dialog-element';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open dialog</button>
      <Dialog isOpen={isOpen} setOpen={setOpen}>
        <h1>Dialog content</h1>
      </Dialog>
    </>
  );
};
```

## Browser support
[Caniuse link](https://caniuse.com/dialog)
