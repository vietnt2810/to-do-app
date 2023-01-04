import { styled } from "@stitches/react";

export const Background = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  minHeight: "600px",
  backgroundImage:
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
});

export const Form = styled("form", {
  width: "30%",
  minWidth: "350px",
  padding: "48px",
  backgroundColor: "#fff",
  borderRadius: "15px",
});

export const Title = styled("p", {
  marginBottom: "8px",
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
});

export const SubTitle = styled("p", {
  marginBottom: "16px",
  fontSize: "1.25rem",
  fontWeight: "300",
  textAlign: "center",
});

export const AccountField = styled("p", {
  marginBottom: "8px",
  fontWeight: "500",
  lineHeight: "1.5",
  color: "#212529",
});

export const InputField = styled("input", {
  width: "100%",
  marginBottom: "8px",
  padding: "12.5px 10px",
  fontSize: "16px",
  border: "1px solid rgb(206,212,218)",
  borderRadius: "5px",
});

export const ForgetPassword = styled("a", {
  display: "inline-block",
  margin: "12px 0 20px",
  fontSize: "16px",
  color: "rgb(108,117,125)",
  "&:hover": { fontWeight: "600" },
});

export const Button = styled("button", {
  width: "100%",
  padding: "12px 26px",
  color: "#fff",
  fontWeight: "bold",
  lineHeight: "1.3",
  backgroundColor: "rgb(40,167,69)",
  border: "none",
  borderRadius: "0.3rem",
  transform: "scale(1, 0.9)",
  "&:hover": {
    cursor: "pointer",
  },
});

export const OptionLine = styled("div", {
  width: "100%",
  marginTop: "24px",
  textAlign: "center",
});

export const OptionButton = styled("a", {
  marginLeft: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  border: "none",
  background: "none",
  "&:hover": {
    color: "purple",
    cursor: "pointer",
  },
});
