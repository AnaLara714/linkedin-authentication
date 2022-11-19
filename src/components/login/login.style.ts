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
  "@media (max-width: 800px)": {
    marginTop: "-25px",
  },
  "& .inputEmail": {
    width: 300,
    "@media (max-width: 800px)": {
      width: 350,
    },
  },
  "& .inputPassword": {
    marginTop: 24,
    width: 300,
    "@media (max-width: 800px)": {
      width: 350,
    },
  },
  "& .halfDivider": {
    width: "40%",
    "@media (max-width: 800px)": {
      width: "50%",
    },
  },
  "& .iconGoogle": {
    width: 25,
    hight: 25,
    marginRight: 5,
    marginBottom: "-5px",
  },
  "& .iconGithub": {
    width: 20,
    hight: 20,
    marginRight: 5,
    marginBottom: "-3px",
  },
});
export const BoxLogin = styled("div")({
  width: 300,
  marginBottom: 20,
  marginTop: 20,
  padding: 24,
  borderRadius: 8,
  boxShadow: "0 4px 12px rgb(0 0 0 / 15%)",
  backgroundColor: "#FFFFFF",
  "@media (max-width: 800px)": {
    boxShadow: "none",
  },
});
export const Title = styled(Typography)({
  fontSize: 30,
  fontWeight: 600,
  paddingBottom: 4,
  color: "rgba(0,0,0,0.9)",
  lineHeight: "1.25",
  cursor: "default",
});
export const Description = styled(Typography)({
  fontSize: 14,
  width: 300,
  fontWeight: 400,
  paddingBottom: 4,
  cursor: "default",
  color: "rgba(0,0,0,0.9)",
  lineHeight: "1.42857",
  "@media (max-width: 800px)": {
    width: 350,
  }
});
export const Form = styled("form")({
  marginTop: "20px",
})
export const ForgotPassaword = styled(Typography)({
  fontSize: 15,
  marginTop: 8,
  fontWeight: 600,
  left: "0px",
  cursor: "pointer",
  color: "#0a66c2",
});
export const ButtonLogin = styled("button")({
  background: "var(--color-action, #0a66c2) !important",
  color: "#fff",
  border: "none",
  padding: "0 24px",
  cursor: "pointer",
  borderRadius: "28px !important",
  marginTop: 16,
  fontWeight: 600,
  fontSize: 16,
  height: 55,
  width: 300,
  "@media (max-width: 800px)": {
    width: 350,
  },
});
export const OtherOptions = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 12,
  "@media (max-width: 900px)": {
    marginLeft: 30,
  },
});
export const OrText = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  cursor: "default",
  lineHeight: "1.42857",
  color: "rgba(0,0,0,0.6)",
  margin: "0 12px",
});
export const ButtonOtherOptions = styled("button")({
  backgroundColor: "rgba(0,0,0,0)",
  borderRadius: "28px !important",
  diplay: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--color-text-low-emphasis-shift, rgba(0,0,0,0.6)) !important",
  padding: "0 24px",
  lineHeight: "42px",
  cursor: "pointer",
  border: "1px solid ",
  fontSize: 16,
  fontWeight: 600,
  height: 43,
  width: 300,
  marginTop: 12,
  "@media (max-width: 800px)": {
    width: 350,
  },
});
export const NewUser = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 15,
  "@media (max-width: 800px)": {
    marginTop: "0px",
  },
});
export const TxtNewLinkedIn = styled(Typography)({
  fonteSize: 16,
  color: "#000000E6",
  cursor: "default",
});
export const TxtRegister = styled(Typography)({
  fonteSize: 16,
  fontWeight: 600,
  color: "#0a66c2",
  padding: "0 8px",
  cursor: "pointer",
})


