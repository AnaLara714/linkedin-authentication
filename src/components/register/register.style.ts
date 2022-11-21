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
  "& .boxMainOut": {
    marginBottom: 20,
    marginTop: 20,
    width: 430,
    padding: 24,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    boxShadow: "0 4px 12px rgb(0 0 0 / 15%)",
    "@media (max-width: 800px)": {
      width: 400,
    },
  },
  "& .boxMainInside": {
    width: 400,
  },
  "& .inputs": {
    marginBottom: 16,
    width: "100%",
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
  marginTop: 16,
  fontWeight: 600,
  fontSize: 16,
  height: 55,
  width: 400,
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
});
export const TxtLogin = styled(Typography)({
  fonteSize: 16,
  fontWeight: 600,
  color: "#0a66c2",
  padding: "0 8px",
  cursor: "pointer",
});
export const TxtTerms = styled(Typography)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  color: "rgba(0,0,0,0.6)",
  fontSize: 13,
  fontWeight: 400,
});
export const BlueWords =  styled(Typography)({
  marginLeft: 3,
  marginRight: 3,
  fontWeight: 600,
  fontSize: 12,
  display: "flex",
  flexDirection: "row",
  color: "#0a66c2",
});