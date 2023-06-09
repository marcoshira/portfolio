import styled, { css } from 'styled-components';

export const Menu = styled.div`
  ${({ theme }) => css`
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    padding-right: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 11vh;
    border-bottom: 0px solid white;
    /* box-shadow: 5px 0 15px 1px white; */

    @media ${theme.media.ipad} {
      display: none;
    }
    @media ${theme.media.mobile} {
      display: none;
    }
  `}
`;

export const MenuItem = styled.a`
  ${({ theme }) => css`
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-size: 20px;
    font-family: ${theme.font.family.default};
    font-weight: 200;
    transition: ${theme.transitions.faster};

    &:hover {
      cursor: pointer;
      color: ${theme.colors.yellow};
    }
  `}
`;
