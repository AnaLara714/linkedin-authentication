import React from "react";
import { BoxLogin, ButtonLogin, ButtonOtherOptions, Description, ForgotPassaword, Form, Main, NewUser, OrText, OtherOptions, Title, TxtNewLinkedIn, TxtRegister } from "./login.style";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconGoogle from "assets/icons/icon-google.svg"
import IconGithub from "assets/icons/iconGithub.svg";
export const Login: React.FC = () => {
  const onRegisterButtonClick = () => {}

  return(
    <Main>
      <BoxLogin>
        <Title>Entrar</Title>
        <Description>
          Acompanhe as novidades do seu mundo profissional
        </Description>
        <Form>
          <TextField className="inputEmail" label="E-mail ou telefone"/>
          <TextField type="password" className="inputPassword" label="Senha"/>
          <ForgotPassaword>
            Esqueceu a senha?
          </ForgotPassaword>
          <ButtonLogin>Entrar</ButtonLogin>
        </Form>
        <OtherOptions>
          <Divider className="halfDivider"/> 
          <OrText>ou</OrText>
          <Divider className="halfDivider"/> 
        </OtherOptions>
        <ButtonOtherOptions>
          <img src={IconGoogle} className="iconGoogle"/>
          Entrar com o Google
        </ButtonOtherOptions>
        <ButtonOtherOptions>
          <img src={IconGithub} className="iconGithub"/>
          Entrar com o Github
        </ButtonOtherOptions>
        <NewUser>
          <TxtNewLinkedIn>Novo no LinkedIn?</TxtNewLinkedIn>
          <TxtRegister
            onClick={onRegisterButtonClick}
          >Cadastre-se</TxtRegister>
        </NewUser>
      </BoxLogin>
    </Main>
  );
};