import * as Styled from './styles';
import { useState } from 'react';
import { ProjectWrapper } from '../../components/ProjectWrapper';
import { ProjectCardProps } from '../../components/ProjectCard';
import { Course, CoursesWrapper } from '../../components/CoursesWrapper';
import { SkillsWrapper } from '../../components/SkillsWrapper';
import { Skill } from '../../components/SkillsIcon';

export function Home() {
  const activeProjects = [
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
  ] as ProjectCardProps[];

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

  const [active, setActive] = useState('P');
  const [pastActive, setPastActive] = useState('');

  return (
    <Styled.Wrapper>
      <Styled.StaticContentWrapper>
        <h1>Welcome</h1>
        <p>
          My name is Marcos Hirazawa, I&apos;m 23 years old and I&apos;m a full
          stack developer based in Londrina, Paraná, Brazil. I&apos;ve been
          studying programming for 2 years and I&apos;ve gathered around 500
          hours between studying and projects. My main skills are React.js,
          Node.js and TypeScript, but I&apos;m always trying to broaden my
          knowledge. I have a degree in civil engineering but my interest lies
          at the technology area, therefore I&apos;m getting another degree in
          data science and artificial intelligence with plans to graduate by
          2026. I&apos;m mainly interested at the web and app development, but
          my goal is to get into the tech area so I can learn even more.
        </p>
      </Styled.StaticContentWrapper>
      <Styled.DynamicContentWrapper>
        <div className="border">
          <div className="upperleft"></div>
          <div className="uppermiddle"></div>
          <div className="upperright"></div>
          <div className="middleleft"></div>
          <div className="middle"></div>
          <div className="middleright"></div>
          <div className="downleft"></div>
          <div className="downmiddle"></div>
          <div className="downright"></div>
          <div className="content">
            <div className="title">
              <a
                className={`past${pastActive} ${active}`}
                id="Courses"
                onClick={() => {
                  setPastActive(active);
                  setActive('C');
                }}
              >
                <h2 className={active === 'C' ? 'active' : ''}>Courses</h2>
              </a>
              <a
                className={`past${pastActive} ${active}`}
                id="Projects"
                onClick={() => {
                  setPastActive(active);
                  setActive('P');
                }}
              >
                <h2 className={active === 'P' ? 'active' : ''}>Projects</h2>
              </a>
              <a
                className={`past${pastActive} ${active}`}
                id="Skills"
                onClick={() => {
                  setPastActive(active);
                  setActive('S');
                }}
              >
                <h2 className={active === 'S' ? 'active' : ''}>Skills</h2>
              </a>
            </div>
            <Styled.DynamicWrapper className={`past${pastActive} ${active}`}>
              <CoursesWrapper courses={activeCourses} />
              <ProjectWrapper projects={activeProjects} />
              <SkillsWrapper skills={activeSkills} />
            </Styled.DynamicWrapper>
          </div>
        </div>
      </Styled.DynamicContentWrapper>
    </Styled.Wrapper>
  );
}
