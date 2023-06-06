import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 40vw;
    height: 40vh;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: ${theme.transitions.slow};
    position: relative;
    border-radius: 10px;

    &:hover {
      border: 1px solid white;
      img {
        opacity: 0;
      }

      div {
        opacity: 1;
      }
    }
    img {
      width: 40vw;
      height: 40vh;
      position: absolute;
      transition: ${theme.transitions.normal};
      border-radius: 10px;
    }
  `}
`;

export const CardContainerContent = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 40vw;
    height: 30vh;

    opacity: 0;
    transition: ${theme.transitions.slow};

    &:hover {
      opacity: 1;
    }

    a {
      h2 {
        color: white;
        margin: 0;
      }
      transition: all 300ms ease-in-out;

      &:hover {
        cursor: pointer;
      }
    }

    p {
      width: 90%;
      text-align: center;
    }

    .skills {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      svg {
        height: 35px;
        margin-left: 10px;
      }

      p {
        font-size: ${theme.font.sizes.ltmedium};
        margin: 0;
        width: 130px;
      }
    }
  `}
`;
