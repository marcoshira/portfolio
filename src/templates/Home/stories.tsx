import { Meta, Story } from '@storybook/react/types-6-0';
import { Home } from '.';

export default {
  title: 'Home',
  component: Home,
  args: {
    title: 'title',
  },
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
