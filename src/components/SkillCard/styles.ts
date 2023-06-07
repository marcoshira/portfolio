import styled, { css } from 'styled-components';
import { Wrapper } from '../SkillsIcon/styles';

export const SkillCardWrapper = styled.div`
  ${({ theme }) => css`
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: black;
    border: 1px solid white;
    border-radius: 15px;
    height: 70vh;
    width: 25vw;
    padding: 40px 40px;
    background-image: url('./assets/images/wavebackground2.jpg');
    background-size: cover;
    transition: ${theme.transitions.fast};

    &:hover {
      img {
        transform: scale(1.05);
      }
    }

    img {
      height: 150px;
      width: 250px;
      margin-bottom: 25px;
      transition: ${theme.transitions.fast};
    }

    h1 {
      text-align: center;
      margin-bottom: 15px;
    }

    ${Wrapper} {
      width: 100%;

      display: flex;
      flex-flow: wrap row;
      justify-content: center;
      svg {
        height: 35px;
        margin: 10px;
      }
    }
  `}
`;
