import React from "react";
import IconGoogle from "assets/icons/icon-google.svg";
import { ButtonOtherOptions } from "./buttonGoogle.style";

export const SignInGoogle: React.FC = () => {
  return (
    <ButtonOtherOptions>
      <img src={IconGoogle} className="iconGoogle"/>
      Entrar com o Google
    </ButtonOtherOptions>
  );
};