import { SkillCard } from '../../components/SkillCard';
import * as Styled from './styles';

export type SkillsProps = {
  title?: string;
};
export const Skills = ({ title }: SkillsProps) => {
  return (
    <Styled.SkillsWrapper>
      <SkillCard
        iconImg="./assets/images/frontendsvgred.svg"
        title="Front-end Development"
        skills={['React.js', 'Next.js', 'CSS', 'HTML', 'AngularJS']}
      />
      <SkillCard
        iconImg="./assets/images/backendsvgred.svg"
        title="Back-end Development"
        skills={['TypeScript', 'Node.js', 'JavaScript', 'Graphql', 'Express']}
      />
      <SkillCard
        iconImg="./assets/images/datasciencesvgred.svg"
        title="Data Science and Machine Learning"
        skills={['Python', 'Database', 'Pandas', 'Numpy']}
      />
    </Styled.SkillsWrapper>
  );
};
