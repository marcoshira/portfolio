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
  open,
}: ProjectCardProps) => {
  return (
    <Styled.Wrapper className={open ? 'open' : ''}>
      <Styled.CardContainer>
        <a href={link}>
          <h2>{title}</h2>
        </a>
        <a href={link} className="imagelink">
          <img src={srcImg} alt={altImg} />
        </a>
        <p>{description}</p>
        <div className="skills">
          <p>Skills used:</p>
          <SkillsIcon skills={skills} />
        </div>
      </Styled.CardContainer>
    </Styled.Wrapper>
  );
};
