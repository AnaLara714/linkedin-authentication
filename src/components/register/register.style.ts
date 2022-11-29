import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import imgBackground from "assets/img/imageBackground.png";

export const Main = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexBasis: "100%",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100%",
  marginTop: "-15px",
  backgroundImage: `url(${imgBackground})`,
  "@media (max-width: 850px)": {
    background: "#FFFFFF",
  },
  "& .boxMainOut": {
    marginBottom: 20,
    marginTop: 20,
    width: "40%",
    padding: 24,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    boxShadow: "0 4px 12px rgb(0 0 0 / 15%)",
    "@media (max-width: 950px)": {
      width: "60%",
    },
    "@media (max-width: 850px)": {
      width: "80%",
      boxShadow: "none",
      marginTop: -20,
    },
  },
  "& .boxMainInside": {
    width: "100%",
  },
  "& .inputsValid": {
    marginBottom: 16,
    width: "100%", 
    "& input": {
      height: 25,
      padding: 15,
    },
  },
  "& .inputsInvalid": {
    marginBottom: 16,
    width: "100%",
    "& input":  {
      height: 56,
      border: "3px solid red",
      boxSizing: "border-box",
      borderRadius: 6, 
    },
    "& p": {
      color: "red",
    },
  },
  "& .halfDivider": {
    width: "50%",
    "@media (max-width: 800px)": {
      width: "45%",
    },
  },
});
export const BoxLogin = styled("div")({
  borderRadius: 8,
  backgroundColor: "#FFFFFF",
});
export const Title = styled(Typography)({
  fontSize: 22,
  fontWeight: 400,
  paddingBottom: 4,
  color: "rgba(0,0,0,0.9)",
  lineHeight: "1.25",
  flexBasis: "100%",
  display: "flex",
  justifyContent: "center",
});
export const Form = styled("form")({
  marginTop: "20px",
});
export const ButtonLogin = styled("button")({
  background: "var(--color-action, #0a66c2) !important",
  color: "#fff",
  border: "none",
  padding: "0 24px",
  cursor: "pointer",
  borderRadius: "28px !important",
  width: "100%",
  marginTop: 16,
  fontWeight: 600,
  fontSize: 16,
  height: 55,
});
export const OtherOptions = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 12,  
});
export const OrText = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  cursor: "default",
  lineHeight: "1.42857",
  color: "rgba(0,0,0,0.6)",
  margin: "0 12px",
});
export const OldUser = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 15,
});
export const TxtOldLinkedIn = styled(Typography)({
  fonteSize: 16,
  color: "#000000E6",
  cursor: "default",
  "@media (max-width: 450px)": {
    fontSize: 14, 
  },
});
export const TxtLogin = styled(Typography)({
  fonteSize: 16,
  fontWeight: 600,
  color: "#0a66c2",
  padding: "0 8px",
  cursor: "pointer",
  "@media (max-width: 450px)": {
    fontSize: 14, 
  },
});

export const InLine = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  color: "rgba(0,0,0,0.6)",
  fontSize: 12,
  fontWeight: 400,
  "@media (max-width: 450px)": {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",     
    // flexBasis: "100%",
  },
});
export const TxtTerms = styled(Typography)({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});
export const BlueWords =  styled(Typography)({
  marginLeft: 3,
  marginRight: 3,
  fontWeight: 600,
  fontSize: 12,
  "@media (max-width: 450px)": {
    display: "flex",
      flexWrap: "wrap",   
  },
  // flexDirection: "row",
  color: "#0a66c2",
});