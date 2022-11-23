import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const FooterDiv = styled('div')({
  height: 45,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  "& .options": {
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  "& .iconGithub": {
    width: 20,
    height: 20,
    marginRight: 3,
  },
});
export const Text = styled(Typography)({
  color: "rgba(0,0,0,0.6)",
  fontWeight: 400,
  fontSize: 12,
  padding: 8,
  display: "flex",
  alignItems: "center",
  lineHeight: "1.33333px",
});