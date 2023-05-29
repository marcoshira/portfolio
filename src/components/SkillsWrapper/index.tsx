import { SkillsIcon, SkillsIconProps } from '../SkillsIcon';
import * as Styled from './styles';

export const SkillsWrapper = ({ skills }: SkillsIconProps) => {
  return (
    <Styled.Wrapper id="skills-container">
      <SkillsIcon skills={skills} showTitle={true} />
    </Styled.Wrapper>
  );
};
