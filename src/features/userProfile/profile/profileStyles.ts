import { styled } from "@stitches/react";

import EditIcon from "@mui/icons-material/Edit";

export const Container = styled("div", {
  width: "30%",
  maxWidth: "300px",
  minWidth: "200px",
  height: "auto",
  paddingBottom: "30px",
  margin: "50px auto",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
});

export const ProfileTopper = styled("div", {
  position: "relative",
  width: "100%",
  height: "75px",
  backgroundColor: "$headerColor",
});

export const EditingIcon = styled(EditIcon, {
  position: "absolute",
  right: "10px",
  bottom: "10px",
  color: "#fff",
  "&:hover": { cursor: "pointer", transform: "scale(1.1, 1.1)" },
});

export const Avatar = styled("img", {
  display: "block",
  width: "75px",
  height: "75px",
  margin: "0 auto",
  padding: "3px",
  borderRadius: "50%",
  background: "#fff",
  transform: "translateY(-50%)",
});

export const Username = styled("p", {
  position: "relative",
  top: "-5%",
  fontSize: "18px",
  fontWeight: "700",
});

export const Email = styled("p", {
  position: "relative",
  top: "-5%",
  marginBottom: "25px",
});
