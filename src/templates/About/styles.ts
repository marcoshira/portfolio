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
  `}
`;

export const AboutImg = styled.img`
  ${({ theme }) => css`
    width: 32%;
  `}
`;
