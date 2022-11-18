import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Login } from 'components/login';
import React from 'react';

export const App: React.FC = () => {
  return(
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
};