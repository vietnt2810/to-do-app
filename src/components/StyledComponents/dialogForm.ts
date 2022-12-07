import stitches from "stiches";

const { styled } = stitches;

export const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgb(111,111,111,0.7)",
});

export const Dialog = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "30%",
  minWidth: "300px",
  minHeight: "200px",
  border: "2px solid $headerColor",
  borderRadius: "5px",
  background: "$backgroundColor",
  transform: "translate(-50%,-50%)",
});

export const DialogHeader = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  background: "$headerColor",
});

export const DialogContent = styled("div", {
  padding: "24px 48px",
});

export const FieldName = styled("p", {
  fontWeight: "bold",
  lineHeight: "1.5",
});

export const InputField = styled("input", {
  width: "100%",
  margin: "10px 0",
  padding: "12.5px 10px",
  fontSize: "16px",
  border: "1px solid rgb(206,212,218)",
  borderRadius: "5px",
});

export const CategorySelectField = styled("select", {
  width: "100%",
  margin: "10px 0",
  padding: "12.5px 5px",
  fontSize: "16px",
  border: "1px solid rgb(206,212,218)",
  borderRadius: "5px",
  outline: "none",
});
