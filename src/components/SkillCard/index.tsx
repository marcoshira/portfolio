import { Skill, SkillsIcon } from '../SkillsIcon';
import * as Styled from './styles';

export type SkillCardProps = {
  title?: string;
  icon?: React.ReactChild;
  iconImg?: string;
  skills?: Skill[];
};
export const SkillCard = ({ title, icon, skills, iconImg }: SkillCardProps) => {
  return (
    <Styled.SkillCardWrapper>
      {icon}
      {iconImg && <img src={iconImg} />}
      <h1>{title}</h1>
      <SkillsIcon skills={skills} />
    </Styled.SkillCardWrapper>
  );
};
