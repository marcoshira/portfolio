import { Meta, Story } from '@storybook/react/types-6-0';
import { SkillsIcon, SkillsIconProps } from '.';

export default {
  title: 'SkillsIcon',
  component: SkillsIcon,
  args: {
    title: 'title',
  },
} as Meta<SkillsIconProps>;

export const Template: Story<SkillsIconProps> = (args) => {
  return (
    <div>
      <SkillsIcon {...args} />
    </div>
  );
};
