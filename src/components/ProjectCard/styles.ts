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
      cursor: pointer;
      img {
        opacity: 0;
      }

      div {
        opacity: 1;
      }
    }
    a {
      position: absolute;
    }
    img {
      width: 40vw;
      height: 40vh;

      transition: ${theme.transitions.normal};
      border-radius: 10px;
    }

    @media ${theme.media.mobile} {
      height: 170px;
      width: 90%;
      margin: 0 5% 10px;

      a {
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  `}
`;

export const CardContainerContent = styled.a`
  ${({ theme }) => css`
    color: white;
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
      cursor: pointer;
    }

    h2 {
      color: white;
      margin: 0;
    }
    transition: all 300ms ease-in-out;

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

    @media ${theme.media.mobile} {
      height: 170px;
      width: 100%;
      p {
        display: none;
      }

      h2 {
        font-weight: 300;
        text-align: center;
        font-size: 21px;
      }

      .skills {
        width: 100%;

        svg {
          height: 30px;
          margin-left: 10px;
        }

        p {
          font-size: ${theme.font.sizes.ltmedium};
          margin: 0;
          width: 130px;
          display: inline;
        }
      }
    }
    @media ${theme.media.monitor} {
      p {
        font-size: 22px;
      }
  `}
`;
