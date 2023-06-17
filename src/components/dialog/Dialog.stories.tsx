import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'test/Dialog',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = (args) => <Dialog data-testId="InputField-id" {...args} />;
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',
};
