import { Skill, SkillsIcon } from '../SkillsIcon';
import * as Styled from './styles';

export type ProjectCardProps = {
  title: string;
  srcImg: string;
  altImg: string;
  skills: Skill[];
  description: string;
  link: string;
  open?: boolean;
};
export const ProjectCard = ({
  title,
  description,
  link,
  skills,
  srcImg,
  altImg,
}: ProjectCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={srcImg} alt={altImg} />
      <Styled.CardContainerContent>
        <a href={link} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <div className="skills">
          <p>Skills used:</p>
          <SkillsIcon skills={skills} />
        </div>
      </Styled.CardContainerContent>
    </Styled.CardContainer>
  );
};
