import styled, { css } from 'styled-components';

export const About = styled.div`
  ${({ theme }) => css`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 89vh;
    min-width: 100vw;
    padding-left: 5vw;
    padding-right: 5vw;
    @media ${theme.media.ipad} {
      height: auto;
      flex-direction: column;
      position: relative;
    }

    @media ${theme.media.mobile} {
      height: auto;
      flex-direction: column;
      position: relative;
    }
  `}
`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 65px;
    width: 46%;
    h1 {
      font-size: 64px;
      font-weight: 100;
      margin-bottom: 40px;
      width: 100%;
    }

    p {
      width: 100%;
      line-height: 1.6;
      text-align: justify;
      font-size: 18px;
      font-weight: 300;
    }
    @media ${theme.media.ipad} {
      height: 97vh;
      justify-content: space-between;
      padding-top: 0px;
      width: 85%;
      text-align: center;
      margin-bottom: 3vh;

      p {
        line-height: 1.4;
        text-align: justify;
        font-size: 2.4rem;
        font-weight: 300;
        position: absolute;
        top: 55vh;
        left: 0;
        transform: translate(-50%)
        width: 70vw;
        padding: 0 10vw;
      }

      h1 {
        position: absolute;
        top: 3vh;
        text-align: center;
        left: 0;
        font-size: 88px;
      }
    }
    @media ${theme.media.mobile} {
      height: 97vh;
      justify-content: space-between;
      padding-top: 0px;
      width: 85%;
      text-align: center;
      margin-bottom: 3vh;

      p {
        line-height: 1.4;
        text-align: justify;
        font-size: 1.5rem;
        font-weight: 300;
        position: absolute;
        top: 41vh;
        left: 0;
        transform: translate(-50%)
        width: 70vw;
        padding: 0 10vw;
      }

      h1 {
        position: absolute;
        top: 0;
        text-align: center;
        left: 0;
        font-size: 50px;
      }
    }


    @media ${theme.media.monitor} {
      p {
        font-size: 22px;
      }
    }
  `}
`;

export const AboutImg = styled.img`
  ${({ theme }) => css`
    width: 32%;

    @media ${theme.media.ipad} {
      width: auto;
      height: 30vh;
      position: absolute;
      top: 20vh;
    }

    @media ${theme.media.mobile} {
      width: auto;
      height: 20vh;
      position: absolute;
      top: 15vh;
    }
  `}
`;
