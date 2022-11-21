import { Footer } from "components/footer";
import { Header } from "components/header";
import { Register } from "components/register";
import React from "react";

export const RegisterPage: React.FC = () => {
  return (
    <>
      <Header/>
      <Register/>
      <Footer/>
    </>
  );
};