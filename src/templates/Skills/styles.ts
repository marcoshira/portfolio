import styled, { css } from 'styled-components';

export const SkillsWrapper = styled.div`
  ${({ theme }) => css`
    z-index: 5;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    padding-top: 6vh;
    min-width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
  `}
`;
