import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  &.open {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 1;
  }
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 1;

    color: black;

    img {
      width: 400px;
      margin-bottom: 10px;
    }

    a {
      h2 {
        margin: 0;
      }
      color: black;
      margin-bottom: 30px;

      transition: all 300ms ease-in-out;

      &:hover {
        /* color: #ef626c; */
        color: ${theme.colors.primaryColor};
      }

      &.imagelink {
        margin-bottom: 0;
      }
    }

    p {
      width: 90%;
      text-align: justify;
      margin-bottom: 15px;
    }

    .skills {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;

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
