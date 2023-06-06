import Image from 'next/image';
import * as Styled from './styles';

export type AboutProps = {
  title?: string;
};
export const About = ({ title }: AboutProps) => {
  return (
    <Styled.About>
      <Styled.AboutText>
        <h1>Welcome</h1>
        <p>
          My name is Marcos Hirazawa, I&apos;m 23 years old and I&apos;m a full
          stack developer based in Londrina, Paraná, Brazil. I&apos;ve been
          studying programming for 2 years and I&apos;ve gathered around 500
          hours between studying and projects. My main skills are React.js,
          Node.js and TypeScript, but I&apos;m always trying to broaden my
          knowledge. I have a degree in civil engineering but my interest lies
          at the technology area, therefore I&apos;m getting another degree in
          data science and artificial intelligence with plans to graduate by
          2026. I&apos;m mainly interested at the web and app development, but
          my goal is to get into the tech area so I can learn even more.
        </p>
      </Styled.AboutText>
      <Styled.AboutImg src="./assets/images/aboutsvg.svg" />
    </Styled.About>
  );
};
