import React from "react";
import { BoxLogin, ButtonLogin, ButtonOtherOptions, Description, ForgotPassaword, Form, Main, NewUser, OrText, OtherOptions, Title, TxtNewLinkedIn, TxtRegister } from "./login.style";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { LinkedinAuthenticationRoutes } from "components/constants";
import { SignInGoogle } from "components/buttonGoogle";
import { SignInGithub } from "components/buttonGithub";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onRegisterButtonClick = () => 
    navigate(LinkedinAuthenticationRoutes.register);
  
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
        <SignInGoogle/>
        <SignInGithub/>
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