import styled, { css } from 'styled-components';

type SectionDisplayed = {
  section: string;
};

const SectionDisplay = {
  About: () =>
    css`
      transform: translateX(-0%);
      height: 89vh;
      transition: height 0ms ease 600ms, transform 600ms ease-in-out;
    `,
  Projects: () =>
    css`
      transform: translateX(-50%);
      height: 100vh;
    `,
  Skills: () =>
    css`
      transform: translateX(-0%);
    `,
  Courses: () =>
    css`
      transform: translateX(-0%);
    `,
};

export const HomeWrapper = styled.div`
  ${({ theme }) => css``}
`;

export const Wrapper = styled.div<SectionDisplayed>`
  ${({ theme, section }) => css`
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    width: 200vw;
    padding-top: 8vh;
    transition: height 0ms, transform 600ms ease-in-out;

    ${SectionDisplay[section]()}
  `}
`;
