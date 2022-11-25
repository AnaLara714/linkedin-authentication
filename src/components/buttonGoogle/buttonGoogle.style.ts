import { styled } from "@mui/system";

export const ButtonOtherOptions = styled("button")({
  backgroundColor: "rgba(0,0,0,0)",
  borderRadius: "28px !important",
  display: "flex",
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
  width: "100%",
  marginTop: 12,
  "& .iconGoogle": {
    width: 25,
    hight: 25,
    marginRight: 5,
    marginBottom: "2px",
  },
});