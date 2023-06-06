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
  `}
`;
