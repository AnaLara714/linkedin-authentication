import React from "react";
import { HeaderDiv } from "./header.style";
import logo from "assets/icons/logo.png"
export const Header: React.FC = () => {
  return(
   <HeaderDiv>
    <img src={logo} className={"logo"}/>
   </HeaderDiv>
  );
};