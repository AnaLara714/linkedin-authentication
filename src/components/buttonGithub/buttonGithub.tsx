import React from "react";
import IconGithub from "assets/icons/iconGithub.svg";
import { ButtonOtherOptions } from "./buttonGithub.style";

export const SignInGithub: React.FC = () => {
  return (
    <ButtonOtherOptions>
      <img src={IconGithub} className="iconGithub"/>
      Entrar com o Github
    </ButtonOtherOptions>
  );
};