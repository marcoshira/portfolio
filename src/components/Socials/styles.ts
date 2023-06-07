import styled, { css } from 'styled-components';

export const SocialsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    justify-content: center;
    left: 0;
    top: 0;
    z-index: 3;

    a {
      color: white;
      margin: 8px 20px;

      svg {
        height: 45px;
        transition: ${theme.transitions.faster};
      }

      &:hover {
        cursor: pointer;

        svg {
          transform: scale(1.15);
        }
      }
    }
  `}
`;
