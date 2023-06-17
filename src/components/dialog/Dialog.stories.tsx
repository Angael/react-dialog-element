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
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog isOpen={isOpen} setOpen={setOpen}>
        <h1>Dialog</h1>
        <p>Some text</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Dialog>
    </>
  );
};
Main.args = {};
