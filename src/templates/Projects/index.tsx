import { ProjectCard, ProjectCardProps } from '../../components/ProjectCard';
import * as Styled from './styles';

const activeProjects = [
  {
    title: 'Base Apparel Coming Soon Page',
    altImg: 'Base Apparel Coming Soon Page',
    description: 'Frontend Mentor Challenge.',
    link: 'https://mmh-base-apparel.vercel.app/',
    srcImg: './assets/images/apparel-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },
  {
    title: 'Course Completion Thesis',
    altImg: 'Course Completion Thesis website cover',
    description:
      "University Completion Thesis website. It calculates a pile's lateral resistance, toe resistance, bearing capacity and allowable load, based on user inputs.",
    link: 'https://estaca-web.vercel.app/',
    srcImg: './assets/images/tcc-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },
  {
    title: 'Practice Landing Pages',
    altImg: 'Practice Landing Pages cover',
    description:
      'Practice Landing Pages website. My first project using React.js and TypeScript.',
    link: 'https://landing-page-next-mmh.vercel.app/',
    srcImg: './assets/images/lp-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS', 'PostgreSQL'],
  },

  {
    title: 'Base Apparel Coming Soon Page',
    altImg: 'Base Apparel Coming Soon Page',
    description: 'Frontend Mentor Challenge.',
    link: 'https://mmh-base-apparel.vercel.app/',
    srcImg: './assets/images/apparel-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },

  {
    title: 'Base Apparel Coming Soon Page',
    altImg: 'Base Apparel Coming Soon Page',
    description: 'Frontend Mentor Challenge.',
    link: 'https://mmh-base-apparel.vercel.app/',
    srcImg: './assets/images/apparel-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },

  {
    title: 'Base Apparel Coming Soon Page',
    altImg: 'Base Apparel Coming Soon Page',
    description: 'Frontend Mentor Challenge.',
    link: 'https://mmh-base-apparel.vercel.app/',
    srcImg: './assets/images/apparel-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },

  {
    title: 'Base Apparel Coming Soon Page',
    altImg: 'Base Apparel Coming Soon Page',
    description: 'Frontend Mentor Challenge.',
    link: 'https://mmh-base-apparel.vercel.app/',
    srcImg: './assets/images/apparel-cover.png',
    skills: ['TypeScript', 'React.js', 'CSS'],
  },
] as ProjectCardProps[];

export const Projects = () => {
  return (
    <Styled.ProjectsWrapper>
      {activeProjects.map((project, index) => {
        return <ProjectCard {...project} key={index} />;
      })}
    </Styled.ProjectsWrapper>
  );
};
