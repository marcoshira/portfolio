import * as Styled from './styles';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { Gmail } from '@styled-icons/boxicons-logos/Gmail';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const Socials = () => {
  return (
    <Styled.SocialsWrapper>
      <a
        href="https://contate.me/marcoshirazawa"
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp />
      </a>
      <a
        href="https://mailto:hirazawa.marcos@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Gmail />
      </a>

      <a
        href="https://www.linkedin.com/in/marcos-hirazawa/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="
        https://github.com/marcoshira"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
    </Styled.SocialsWrapper>
  );
};
