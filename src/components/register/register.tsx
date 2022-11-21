import React from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { BoxLogin, Main, Title, Form, ButtonLogin, OtherOptions, OrText, OldUser, TxtOldLinkedIn, TxtLogin, TxtTerms, BlueWords } from "./register.style";
import { SignInGoogle } from "components/buttonGoogle";
import { SignInGithub } from "components/buttonGithub";
import { LinkedinAuthenticationRoutes } from "components/constants";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = () =>
    navigate(LinkedinAuthenticationRoutes.login);

  return (
    <Main>
      <BoxLogin className="boxMainOut">
        <Title>Aproveite sua vida profissional ao máximo</Title>
        <BoxLogin className="boxMainInside">
          <Form>
            <TextField className="inputs" label="E-mail"/>
            <TextField className="inputs" label="Nome"/>
            <TextField type="password" className="inputs" label="Senha"/>
            <TextField type="password" className="inputs" label="Confirmar senha"/>
            <TxtTerms> 
              Ao clicar em Aceite e cadastre-se, você aceita o <BlueWords> Contrato do </BlueWords>
            </TxtTerms>
            <TxtTerms> 
              <BlueWords>Usuário,</BlueWords> a <BlueWords>Política de Privacidade</BlueWords> e a <BlueWords>Política de Cookies</BlueWords> do 
            </TxtTerms>
            <TxtTerms>
              LinkedIn.
            </TxtTerms> 
            <ButtonLogin>Aceitar e cadastre-se</ButtonLogin>
          </Form>
          <OtherOptions>
            <Divider className="halfDivider"/> 
            <OrText>ou</OrText>
            <Divider className="halfDivider"/> 
          </OtherOptions>
          <SignInGoogle/>
          <SignInGithub/>
          <OldUser>
            <TxtOldLinkedIn>Já se cadastrou no LinkedIn?</TxtOldLinkedIn>
            <TxtLogin
              onClick={onLoginButtonClick}
            >
              Entre
            </TxtLogin>
          </OldUser>
        </BoxLogin>
      </BoxLogin>
    </Main>
  );
};