import stitches from "stiches";

const { styled } = stitches;

export const Button = styled("button", {
  padding: "12.5px 20px",
  color: "#fff",
  background: "$buttonColor",
  border: "2px solid $headerColor",
  borderRadius: "5px",
  "&:hover": {
    background: "$hoverColor",
    cursor: "pointer",
    transform: "scale(1.1, 1.1)",
  },
});

export const ButtonHolder = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "15px",
  width: "auto",
  marginTop: "20px",
});
