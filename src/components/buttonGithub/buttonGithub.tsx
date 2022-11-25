import React from "react";
import IconApple from "assets/icons/icon-apple.svg";
import { ButtonOtherOptions } from "./buttonGithub.style";

export const SignInGithub: React.FC = () => {
  return (
    <ButtonOtherOptions>
      <img src={IconApple} className="iconApple"/>
      Entrar com a Apple
    </ButtonOtherOptions>
  );
};