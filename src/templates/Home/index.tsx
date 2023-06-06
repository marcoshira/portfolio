import * as Styled from './styles';
import { useState } from 'react';
import { Course, CoursesWrapper } from '../../components/CoursesWrapper';
import { SkillsWrapper } from '../../components/SkillsWrapper';
import { Skill } from '../../components/SkillsIcon';
import { About } from '../About';
import { Menu } from '../../components/Menu';
import { Projects } from '../Projects';

export function Home() {
  const activeCourses = [
    {
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-11c15112-a961-4055-9b6e-79ffa20def3a.pdf',
      title: 'Projeto Completo NodeJS, React, React Native, TypeScript',
    },
    {
      title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f81b377-a6c3-46f7-b107-818669532778.pdf',
    },
    {
      title: 'Curso de React.Js e Next.Js (Intermediário e Avançado)',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e064767d-13d8-4117-8f9f-c6f5dfbc9fa8.pdf',
    },
    {
      title: 'Angular - The Complete Guide (2023 Edition)',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1e4a60c0-02fd-4c78-8c75-3820c87382e1.pdf',
    },
    {
      title: 'Programação Web com Python e Django Framework: Essencial',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-620d8e25-e71a-4d59-9d3c-be33f4ba1286.pdf',
    },
    {
      title: 'Programação em Python do básico ao avançado',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-398cb3cf-850f-4b03-9ab2-5bbfc3ed7f12.pdf',
    },
    {
      title: 'Bancos de Dados SQL e NoSQL do básico ao avançado',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4d74caf6-61fc-4f9a-8daa-8b3b5a4c4ee1.pdf',
    },
    {
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4053759b-2ed5-4d34-aaed-75b2f2731ed7.pdf',
      title: 'Programação em JavaScript do básico ao avançado',
    },
    {
      title: 'Algoritmos e Lógica de Programação do básico ao avançado',
      certificateLink:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-67e75f60-72e9-4b0a-8676-02c7849aaf9e.pdf',
    },
  ] as Course[];

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
      </Styled.Wrapper>
    </Styled.HomeWrapper>
  );
}
