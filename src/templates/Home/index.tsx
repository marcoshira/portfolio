import * as Styled from './styles';
import { useState } from 'react';
import { Skill } from '../../components/SkillsIcon';
import { About } from '../About';
import { Menu } from '../../components/Menu';
import { Projects } from '../Projects';
import { Skills } from '../Skills';
import { Socials } from '../../components/Socials';

export function Home() {
  const activeSkills = [
    'TypeScript',
    'CSS',
    'HTML',
    'Next.js',
    'Python',
    'Node.js',
    'AngularJS',
    'React.js',
    'PostgreSQL',
  ] as Skill[];

  const [active, setActive] = useState('About');
  const [pastActive, setPastActive] = useState('');

  return (
    <Styled.HomeWrapper>
      <Menu onClickA={setActive} />

      <Styled.Wrapper section={active}>
        <About />
        <Projects />
        <Skills />
      </Styled.Wrapper>
      <Socials />
    </Styled.HomeWrapper>
  );
}
