# react-dialog-element
React Dialog component using native `<dialog>` element for React.

This has few benefits over custom dialog components: 
- Better accessibility
- Better performance
- Smaller bundle size
- Fully styleable

## Usage
```jsx
import { Dialog } from 'react-dialog-element';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Dialog content</h1>
      </Dialog>
    </>
  );
};
```

## Browser support
[Caniuse link](https://caniuse.com/dialog)
