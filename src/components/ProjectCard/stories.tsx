import { Meta, Story } from '@storybook/react/types-6-0';
import { ProjectCard, ProjectCardProps } from '.';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: {
    title: 'TCC',
    altImg: 'TCC website cover',
    description:
      "University Completion Thesis website. It calculates a pile's lateral resistance, toe resistance, bearing capacity and allowable load.",
    link: 'https://estaca-web.vercel.app/',
    srcImg: './assets/images/tcc-cover.png',
    skills: ['Python', 'TypeScript'],
  },
} as Meta<ProjectCardProps>;

export const Template: Story<ProjectCardProps> = (args) => {
  return (
    <div>
      <ProjectCard {...args} />
    </div>
  );
};
