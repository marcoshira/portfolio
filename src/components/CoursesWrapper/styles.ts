import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;
    background: rgba(255, 255, 255, 0.15);
    min-width: 100%;
  `}
`;

type CoursesLength = {
  length: number;
};

const heightChanger = (length: number) => css`
  min-height: ${`${466 / length}px`};
`;

export const Course = styled.div<CoursesLength>`
  ${({ theme, length }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    color: black;

    ${heightChanger(length)}

    p {
      margin: 0;
    }

    a {
      color: black;
      transition: all 300ms ease-in-out;

      &:hover {
        color: ${theme.colors.primaryColor};
        cursor: pointer;
      }
    }
  `}
`;
