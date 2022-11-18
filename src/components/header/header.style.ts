import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const HeaderDiv = styled('div')({
  height: 82,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  "& .logo": {
    marginLeft: 35,
  }
});