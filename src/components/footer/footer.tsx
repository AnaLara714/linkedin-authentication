import React from "react";
import { FooterDiv, Text } from "./footer.style";
import IconGithubSvg from "assets/icons/iconGithub.svg";

export const Footer: React.FC = () => {
  return(
    <FooterDiv>
      <a href="https://github.com/AnaLara714" className="linkGithub"> 
        <Text>
          <img src={IconGithubSvg} className={"iconGithub"}/>
          /AnaLara714
        </Text>
      </a>
      <ul className="options">
      <Text>Contrato do Usário</Text>
      <Text>Política de Privacidade do LinkedIn</Text>
      <Text>Diretrizes da comunidade</Text>
      <Text>Política de cookies</Text>
      <Text>Política de Direitos Autorais</Text>
      <Text>Enviar Feedback</Text>
      </ul>
    </FooterDiv>
  );
};