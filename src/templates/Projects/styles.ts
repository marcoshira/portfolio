import styled, { css } from 'styled-components';

export const ProjectsWrapper = styled.div`
  ${({ theme }) => css`
    overflow-y: scroll;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    padding-top: 6vh;
    min-width: 100vw;
    height: 95vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, auto));
    column-gap: 5vw;
    row-gap: 5vw;
    color: white;

    > h1 {
      display: none;
    }

    @media ${theme.media.mobile} {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: top;
      padding: 0;

      > h1 {
        display: inline;
        margin: 10px 0 40px;
        text-align: center;
        font-weight: 100;
        font-size: 50px;
      }
    }
  `}
`;
