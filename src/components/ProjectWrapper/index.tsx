import { useState } from 'react';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';
import * as Styled from './styles';
import { ArrowForwardIos } from '@styled-icons/material-outlined/ArrowForwardIos';
import { ArrowBackIos } from '@styled-icons/material-outlined/ArrowBackIos';

export type ProjectWrapperProps = {
  projects: ProjectCardProps[];
};
export const ProjectWrapper = ({ projects }: ProjectWrapperProps) => {
  const [index, setIndex] = useState(0);

  const indexBack = (len) => {
    if (index === 0) {
      setIndex(len - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const indexFwd = (len) => {
    if (index === len - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Styled.Wrapper id="projects-container">
      <div className="arrows">
        <a onClick={() => indexBack(projects.length)}>
          <ArrowBackIos />
        </a>
        <a onClick={() => indexFwd(projects.length)}>
          <ArrowForwardIos />
        </a>
      </div>
      {projects.map((val, ind) => {
        return (
          <Styled.Card cardIndex={index} key={ind}>
            <ProjectCard
              altImg={val.altImg}
              description={val.description}
              link={val.link}
              skills={val.skills}
              srcImg={val.srcImg}
              title={val.title}
              open={true}
            />
          </Styled.Card>
        );
      })}
    </Styled.Wrapper>
  );
};
