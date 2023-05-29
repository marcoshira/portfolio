import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8vh;
  padding-left: 7%;
  padding-right: 5%;
`;

export const StaticContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 50%;
    color: white;
    h1 {
      font-size: ${theme.font.sizes.huge};
    }

    p {
      width: 75%;
      line-height: 1.6;
      text-align: justify;
    }
  `}
`;

export const DynamicContentWrapper = styled.div`
  ${({ theme }) => css`
    /* The animation code */
    @keyframes SkillsFirstToLast {
      0% {
        transform: translateX(-400px);
        opacity: 1;
      }
      49% {
        transform: translateX(-600px);
        opacity: 0;
      }
      50% {
        transform: translateX(200px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes SkillsLastToFirst {
      0% {
        transform: translateX(0px);
        opacity: 1;
      }
      49% {
        transform: translateX(200px);
        opacity: 0;
      }
      50% {
        transform: translateX(-600px);
        opacity: 0;
      }
      100% {
        transform: translateX(-400px);
        opacity: 1;
      }
    }

    @keyframes SkillsFirstToSecond {
      0% {
        transform: translateX(-400px);
      }
      100% {
        transform: translateX(-200px);
      }
    }

    @keyframes SkillsSecondToFirst {
      0% {
        transform: translateX(-200px);
      }
      100% {
        transform: translateX(-400px);
      }
    }

    @keyframes SkillsSecondToLast {
      0% {
        transform: translateX(-200px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    @keyframes SkillsLastToSecond {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-200px);
      }
    }

    @keyframes ProjectsFirstToLast {
      0% {
        transform: translateX(-200px);
        opacity: 1;
      }
      49% {
        transform: translateX(-400px);
        opacity: 0;
      }
      50% {
        transform: translateX(400px);
        opacity: 0;
      }
      100% {
        transform: translateX(200px);
        opacity: 1;
      }
    }

    @keyframes ProjectsLastToFirst {
      0% {
        transform: translateX(200px);
        opacity: 1;
      }
      49% {
        transform: translateX(400px);
        opacity: 0;
      }
      50% {
        transform: translateX(-400px);
        opacity: 0;
      }
      100% {
        transform: translateX(-200px);
        opacity: 1;
      }
    }

    @keyframes ProjectsFirstToSecond {
      0% {
        transform: translateX(-200px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    @keyframes ProjectsSecondToFirst {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-200px);
      }
    }

    @keyframes ProjectsSecondToLast {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(200px);
      }
    }

    @keyframes ProjectsLastToSecond {
      0% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    @keyframes CoursesFirstToLast {
      0% {
        transform: translateX(0px);
        opacity: 1;
      }
      49% {
        transform: translateX(-200px);
        opacity: 0;
      }
      50% {
        transform: translateX(600px);
        opacity: 0;
      }
      100% {
        transform: translateX(400px);
        opacity: 1;
      }
    }

    @keyframes CoursesLastToFirst {
      0% {
        transform: translateX(400px);
        opacity: 1;
      }
      49% {
        transform: translateX(600px);
        opacity: 0;
      }
      50% {
        transform: translateX(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(0px);
        opacity: 1;
      }
    }

    @keyframes CoursesFirstToSecond {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(200px);
      }
    }

    @keyframes CoursesSecondToFirst {
      0% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    @keyframes CoursesSecondToLast {
      0% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(400px);
      }
    }

    @keyframes CoursesLastToSecond {
      0% {
        transform: translateX(400px);
      }
      100% {
        transform: translateX(200px);
      }
    }

    width: 50%;
    position: relative;

    .border {
      display: grid;
      height: 80vh;
      width: 100%;
      grid-template-columns: 15% 45% 40%;
      grid-template-rows: 15% 50% 35%;

      /* .upperleft {
        border-left: 2px solid black;
        border-top: 2px solid black;
      }
      .downright {
        border-right: 2px solid black;
        border-bottom: 2px solid black;
      } */
    }

    .content {
      position: absolute;
      top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      height: calc(100% - 20px);

      .title {
        display: flex;
        flex-direction: row;
        align-items: top;
        width: 100%;
        padding: 0 50px 0 40px;
        transition: all 300ms ease-in-out;

        a {
          color: ${theme.colors.secondaryColor};
          margin: 0 40px;
          min-width: 20%;

          cursor: pointer;
          transition: all 300ms ease-in-out;

          &:hover {
            color: ${theme.colors.primaryColor};
          }

          .active {
            font-size: ${theme.font.sizes.large};
            text-align: center;
            margin-top: 13px;
          }

          h2 {
            font-size: ${theme.font.sizes.medium};
            margin-top: 20px;
            text-align: center;
          }
        }

        #Courses.pastP.C {
          animation-name: CoursesFirstToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Courses.pastC.P {
          animation-name: CoursesSecondToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Courses.pastC.S {
          animation-name: CoursesSecondToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Courses.pastS.C {
          animation-name: CoursesLastToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Courses.pastP.S {
          animation-name: CoursesFirstToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Courses.pastS.P {
          animation-name: CoursesLastToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastC.P {
          animation-name: ProjectsLastToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastP.C {
          animation-name: ProjectsSecondToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastP.S {
          animation-name: ProjectsSecondToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastS.P {
          animation-name: ProjectsFirstToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastC.S {
          animation-name: ProjectsLastToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Projects.pastS.C {
          animation-name: ProjectsFirstToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastP.S {
          animation-name: SkillsLastToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastS.P {
          animation-name: SkillsSecondToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastP.C {
          animation-name: SkillsLastToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastC.P {
          animation-name: SkillsFirstToLast;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastC.S {
          animation-name: SkillsFirstToSecond;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        #Skills.pastS.C {
          animation-name: SkillsSecondToFirst;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
      }
    }
  `}
`;

export const DynamicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.7);

  @keyframes ZeroToLast {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(1344px);
    }
  }

  @keyframes LastToZero {
    0% {
      transform: translateX(1344px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes LastToOne {
    0% {
      transform: translateX(1344px);
    }
    100% {
      transform: translateX(672px);
    }
  }

  @keyframes OneToLast {
    0% {
      transform: translateX(672px);
    }
    100% {
      transform: translateX(1344px);
    }
  }

  @keyframes ZeroToOne {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(672px);
    }
  }

  @keyframes OneToZero {
    0% {
      transform: translateX(672px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ZeroToMinus {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-672px);
    }
  }

  @keyframes MinusToZero {
    0% {
      transform: translateX(-672px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes MinusToFirst {
    0% {
      transform: translateX(-672px);
    }
    100% {
      transform: translateX(-1344px);
    }
  }

  @keyframes FirstToMinus {
    0% {
      transform: translateX(-1344px);
    }
    100% {
      transform: translateX(-672px);
    }
  }

  @keyframes ZeroToFirst {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1344px);
    }
  }

  @keyframes FirstToZero {
    0% {
      transform: translateX(-1344px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  &.pastP.S {
    #projects-container {
      animation-name: ZeroToMinus;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #skills-container {
      animation-name: ZeroToMinus;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #corses-container {
      transform: translateX(1344px);
    }
  }

  &.pastS.P {
    #projects-container {
      animation-name: MinusToZero;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #skills-container {
      animation-name: MinusToZero;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #courses-container {
      transform: translateX(0px);
    }
  }

  &.pastS.C {
    #projects-container {
      transform: translateX(672px);
    }

    #skills-container {
      animation-name: MinusToFirst;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #courses-container {
      animation-name: LastToOne;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }
  }

  &.pastC.S {
    #projects-container {
      transform: translateX(-672px);
    }

    #skills-container {
      animation-name: FirstToMinus;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #courses-container {
      animation-name: OneToLast;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }
  }

  &.pastP.C {
    #projects-container {
      animation-name: ZeroToOne;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #skills-container {
      animation-name: ZeroToFirst;
      animation-duration: 0ms;
      animation-fill-mode: forwards;
    }

    #courses-container {
      animation-name: ZeroToOne;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }
  }

  &.pastC.P {
    #projects-container {
      animation-name: OneToZero;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }

    #skills-container {
      animation-name: FirstToZero;
      animation-duration: 0ms;
      animation-fill-mode: forwards;
    }

    #courses-container {
      animation-name: OneToZero;
      animation-duration: 300ms;
      animation-fill-mode: forwards;
    }
  }
`;
