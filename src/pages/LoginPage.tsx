import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Login } from 'components/login';
import React from 'react';

export const LoginPage: React.FC = () => {
  return(
    <>
      <Header/>
      <Login/>
      <Footer/>
    </>
  );
};