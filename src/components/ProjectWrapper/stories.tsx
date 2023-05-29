import { Meta, Story } from '@storybook/react/types-6-0';
import { ProjectWrapper, ProjectWrapperProps } from '.';

export default {
  title: 'ProjectWrapper',
  component: ProjectWrapper,
  args: {
    projects: [
      {
        title: 'TCC',
        altImg: 'TCC website cover',
        description:
          "University Completion Thesis website. It calculates a pile's lateral resistance, toe resistance, bearing capacity and allowable load.",
        link: 'https://estaca-web.vercel.app/',
        srcImg: './assets/images/tcc-cover.png',
        skills: ['Python', 'TypeScript'],
      },
    ],
  },
} as Meta<ProjectWrapperProps>;

export const Template: Story<ProjectWrapperProps> = (args) => {
  return (
    <div>
      <ProjectWrapper {...args} />
    </div>
  );
};
