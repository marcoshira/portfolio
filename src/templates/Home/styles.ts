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
      transform: translateX(-33.33%);
      height: 100vh;
    `,
  Skills: () =>
    css`
      transform: translateX(-66.67%);
      height: 89vh;
      transition: height 0ms ease 600ms, transform 600ms ease-in-out;
    `,
  Courses: () =>
    css`
      transform: translateX(-0%);
    `,
};

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.ipad} {
      position: relative;
    }
    @media ${theme.media.mobile} {
      position: relative;
    }
  `}
`;

export const Wrapper = styled.div<SectionDisplayed>`
  ${({ theme, section }) => css`
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    width: 300vw;
    padding-top: 8vh;
    transition: height 0ms, transform 600ms ease-in-out;

    ${SectionDisplay[section]()}
    @media ${theme.media.ipad} {
      flex-direction: column;
      height: auto;
      width: 100vw;
      padding-top: 10px;
      transform: translateX(-0%);
    }
    @media ${theme.media.mobile} {
      flex-direction: column;
      height: auto;
      width: 100vw;
      padding-top: 10px;
      transform: translateX(-0%);
    }
  `}
`;
