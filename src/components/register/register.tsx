import React from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { BoxLogin, Main, Title, Form, ButtonLogin, OtherOptions, OrText, OldUser, TxtOldLinkedIn, TxtLogin, TxtTerms, BlueWords, InLine } from "./register.style";
import { SignInGoogle } from "components/buttonGoogle";
import { SignInGithub } from "components/buttonGithub";
import { LinkedinAuthenticationRoutes } from "components/constants";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [button, setButton] = React.useState(true);
  const [newPassword, setNewPassword] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPassword, setValidPassword] = React.useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = React.useState(true);
  const onLoginButtonClick = () =>
    navigate(LinkedinAuthenticationRoutes.login);

  const onEmailInputChange = (event: any) => {
    const emailRegex = /^\w+@[a-z]+(\.[a-z]+)+$/;
    const email = event.target.value;
    setValidEmail(false);
    if(emailRegex.test(email))  {
      setValidEmail(true);
      console.log(validEmail);
    };
  }; 
  const onPasswordInputChange = (event: any) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/;
    const sequenceLetters = /[A-Za-z]{2}/g;
    const sequenceNumbers = /\d{2}/g;
    const password = event.target.value;
    setValidPassword(false);
    if(strongRegex.test(password)  && !password.match(sequenceLetters) && !password.match(sequenceNumbers)) {
      setNewPassword(event.target.value);
      setValidPassword(true);
    }
  };
  const onConfirmPasswordInputChange = (e: any) => {
    setValidConfirmPassword(false);
    if((e.target.value === newPassword) && (validEmail)) {
      setButton(false);
      setValidConfirmPassword(true);
    }
  };
  const onRegisterButtonClick = () => {
    alert("Cadastro feito com sucesso! Seja bem-vindo(a) ao LinkedI!:)");
  };
  
  return (
    <Main>
      <BoxLogin className="boxMainOut">
        <Title>Aproveite sua vida profissional ao máximo</Title>
        <BoxLogin className="boxMainInside">
          <Form>
            <TextField 
              required={true} 
              type="email" 
              className={validEmail ? "inputsValid" : "inputsInvalid"}  
              label={validEmail ? "E-mail" : ""}
              helperText={!validEmail ? "Insira um e-mail válido." : ""}
              onChange={onEmailInputChange}
            />
            <TextField 
              required={true}
              className={"inputsValid"}  
              label="Nome"
            />
            <TextField
              required={true}
              type="password" 
              className={validPassword ? "inputsValid" : "inputsInvalid"} 
              label={validPassword ? "Senha" : ""}
              helperText={!validPassword ? "A senha, de no mínimo 8 caracteres e no máximo 16, deve conter números ao menos um caracter especial, letras maiúsculas, minúsculas e números. Não pode ter letras ou números em sequência. " : ""}
              inputProps={{maxlength:16}}
              onChange={onPasswordInputChange}
              />
            <TextField 
              required={true}
              type="password" 
              label={validConfirmPassword ? "Confirmar senha" : ""}  
              helperText={!validConfirmPassword ? "Confirme sua senha" : ""}  
              className={validConfirmPassword ? "inputsValid" : "inputsInvalid"} 
              inputProps={{maxlength:16}}
              onChange={onConfirmPasswordInputChange}
            />
            <div className="terms"> 
              <InLine>
                  Ao clicar em Aceite e cadastre-se, você aceita o 
                <BlueWords> Contrato do Usuário,</BlueWords>
              </InLine>
              <InLine>
                   a <BlueWords>Política de Privacidade</BlueWords> e a <BlueWords>Política de Cookies</BlueWords> do 
              </InLine>
              <InLine>
                  LinkedIn.
              </InLine>
            </div>
            <ButtonLogin
              disabled={button}
              onClick={onRegisterButtonClick}
            >Aceitar e cadastre-se</ButtonLogin>
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