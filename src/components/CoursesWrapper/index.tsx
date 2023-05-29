import * as Styled from './styles';

export type Course = {
  title: string;
  certificateLink: string;
};

export type CoursesWrapperProps = {
  courses: Course[];
};
export const CoursesWrapper = ({ courses }: CoursesWrapperProps) => {
  return (
    <Styled.Wrapper id="courses-container">
      {courses.map((val, ind) => {
        return (
          <Styled.Course key={ind} length={courses.length}>
            <p>{val.title}</p>
            <a href={val.certificateLink} target="_blank" rel="noreferrer">
              Certificate
            </a>
          </Styled.Course>
        );
      })}
    </Styled.Wrapper>
  );
};
