import styled, { css } from 'styled-components';
import { Wrapper as SkillsContainer } from '../SkillsIcon/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    min-width: 100%;

    ${SkillsContainer} {
      color: white;
      height: 100%;
      width: 100%;
      display: grid;
      grid: repeat(3, 33.33%) / auto-flow 33.33%;

      .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        svg {
          height: 90px;
          margin-bottom: 5px;
        }

        p {
          margin: 0;
          text-align: center;
        }
      }
    }
  `}
`;
