import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'test/Dialog',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Main: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Dialog isOpen={isOpen} setOpen={setIsOpen}>
        <h1>Dialog</h1>
        <p>Some text</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Dialog>
    </>
  );
};
Main.args = {};
