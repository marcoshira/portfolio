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
      <a href={link} target="_blank" rel="noreferrer">
        <img src={srcImg} alt={altImg} />
      </a>

      <Styled.CardContainerContent href={link} target="_blank">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="skills">
          <p>Skills used:</p>
          <SkillsIcon skills={skills} />
        </div>
      </Styled.CardContainerContent>
    </Styled.CardContainer>
  );
};
