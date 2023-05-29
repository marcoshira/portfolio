import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    flex-direction: row;
    overflow: hidden;

    .arrows {
      z-index: 3;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      position: absolute;
      left: 5%;
      right: 5%;
      top: calc(50% - 30px);

      a {
        transition: all 300ms ease-in-out;
        &:hover {
          transform: scale(1.2);
          cursor: pointer;
        }
      }

      svg {
        height: 30px;
        color: white;
      }
    }
  `}
`;

type cardIndex = {
  cardIndex: number;
};

const indexChanger = (cardIndex: number) => css`
  transform: ${`translateX(${-676 * cardIndex}px)`};
`;

export const Card = styled.div<cardIndex>`
  ${({ theme, cardIndex }) => css`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    height: 100%;

    transition: all 300ms ease-in-out;

    ${indexChanger(cardIndex)}
  `}
`;
