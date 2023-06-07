import * as Styled from './styles';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Nextdotjs as NextJs } from '@styled-icons/simple-icons/Nextdotjs';
import { Nodedotjs as NodeJs } from '@styled-icons/simple-icons/Nodedotjs';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Database } from '@styled-icons/fa-solid/Database';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Angular } from '@styled-icons/boxicons-logos/Angular';
import { Python } from '@styled-icons/boxicons-logos/Python';
import { Pandas } from '@styled-icons/simple-icons/Pandas';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Numpy } from '@styled-icons/simple-icons/Numpy';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Express } from '@styled-icons/simple-icons/Express';

export type Skill =
  | 'TypeScript'
  | 'Node.js'
  | 'Next.js'
  | 'CSS'
  | 'HTML'
  | 'Database'
  | 'React.js'
  | 'AngularJS'
  | 'JavaScript'
  | 'Pandas'
  | 'Numpy'
  | 'Graphql'
  | 'Express'
  | 'Python';
export type SkillsIconProps = {
  skills: Skill[];
  showTitle?: boolean;
};

export const SkillsIcon = ({ skills, showTitle = false }: SkillsIconProps) => {
  return (
    <Styled.Wrapper>
      {skills.map((value, index) => {
        switch (value) {
          case 'TypeScript':
            return (
              <div className="skill" key={index}>
                <Typescript />
                {showTitle ? <p>TypeScript</p> : ''}
              </div>
            );
          case 'Node.js':
            return (
              <div className="skill" key={index}>
                <NodeJs />
                {showTitle ? <p>Node.js</p> : ''}
              </div>
            );
          case 'Next.js':
            return (
              <div className="skill" key={index}>
                <NextJs />
                {showTitle ? <p>Next.js</p> : ''}
              </div>
            );
          case 'CSS':
            return (
              <div className="skill" key={index}>
                <Css3 />
                {showTitle ? <p>CSS</p> : ''}
              </div>
            );
          case 'HTML':
            return (
              <div className="skill" key={index}>
                <Html5 />
                {showTitle ? <p>HTML</p> : ''}
              </div>
            );
          case 'Database':
            return (
              <div className="skill" key={index}>
                <Database />
                {showTitle ? <p>Database</p> : ''}
              </div>
            );
          case 'React.js':
            return (
              <div className="skill" key={index}>
                <ReactLogo />
                {showTitle ? <p>React.js</p> : ''}
              </div>
            );
          case 'AngularJS':
            return (
              <div className="skill" key={index}>
                <Angular />
                {showTitle ? <p>AngularJS</p> : ''}
              </div>
            );
          case 'JavaScript':
            return (
              <div className="skill" key={index}>
                <Javascript />
                {showTitle ? <p>JavaScript</p> : ''}
              </div>
            );
          case 'Python':
            return (
              <div className="skill" key={index}>
                <Python />
                {showTitle ? <p>Python</p> : ''}
              </div>
            );
          case 'Pandas':
            return (
              <div className="skill" key={index}>
                <Pandas />
                {showTitle ? <p>Pandas</p> : ''}
              </div>
            );
          case 'Numpy':
            return (
              <div className="skill" key={index}>
                <Numpy />
                {showTitle ? <p>Numpy</p> : ''}
              </div>
            );
          case 'Graphql':
            return (
              <div className="skill" key={index}>
                <Graphql />
                {showTitle ? <p>Graphql</p> : ''}
              </div>
            );
          case 'Express':
            return (
              <div className="skill" key={index}>
                <Express />
                {showTitle ? <p>Express</p> : ''}
              </div>
            );
        }
      })}
    </Styled.Wrapper>
  );
};
