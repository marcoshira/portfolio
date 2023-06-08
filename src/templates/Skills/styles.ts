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

    > h1 {
      display: none;
    }

    @media ${theme.media.mobile} {
      height: auto;
      flex-direction: column;
      padding-top: 0;
      margin-bottom: 50px;

      > h1 {
        display: inline;
        margin: 0px 0 40px;
        text-align: center;
        font-weight: 100;
        font-size: 50px;
      }
    }
  `}
`;
