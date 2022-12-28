import stitches from "stiches";

import searchIcon from "assets/images/magnifyingGlassIcon.png";

const { styled } = stitches;

export const Container = styled("div", {
  width: "80%",
  minWidth: "300px",
  margin: "50px auto",
});

export const SearchBar = styled("div", {
  width: "50%",
  minWidth: "300px",
  height: "40px",
  padding: "1px",
  marginBottom: "15px",
  lineHeight: "1.5",
  border: "1px solid $greyColor",
  borderRadius: "10px",
});

export const SearchInput = styled("input", {
  width: "100%",
  height: "100%",
  fontSize: "1.1rem",
  padding: "6.5px 15px 6.5px 40px",
  outline: "none",
  border: "none",
  borderRadius: "10px",
  backgroundImage: `url(${searchIcon})`,
  backgroundSize: "23px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px center",
  "&:hover": {
    cursor: "pointer",
  },
});

export const TaskTable = styled("table", {
  width: "100%",
  textAlign: "center",
  color: "#fff",
  borderSpacing: "3px",
});

export const TableHeaderRow = styled("tr", {
  height: "50px",
  background: "$headerColor",
  "& th": {
    "&:first-child": {
      width: "35%",
    },
    "&:nth-child(2)": {
      width: "30%",
    },
    "&:last-child": {
      width: "15%",
    },
  },
});

export const TableContentRow = styled("tr", {
  height: "50px",
  background: "$greyColor",
  "& td": {
    "&:last-child": {
      background: "$backgroundColor",
    },
  },
});

export const TaskButtonHolder = styled("div", {
  flex: 1,
});

export const TaskButton = styled("button", {
  width: "40px",
  aspectRatio: "1/1",
  padding: "5px",
  margin: "5px",
  color: "#fff",
  background: "$buttonColor",
  border: "2px solid $headerColor",
  borderRadius: "5px",
  "&:hover": {
    background: "$hoverColor",
  },
});

export const Pagination = styled("div", {
  marginTop: "20px",
  textAlign: "center",
  "& li": {
    display: "inline-block",
    padding: "0 1.5px",
    "& a": {
      position: "relative",
      float: "left",
      padding: "5px 10px",
      lineHeight: "1.5",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "$greyColor",
      border: "1px solid $headerColor",
      borderRadius: "5px",
      "&:hover": {
        background: "$hoverColor",
      },
    },
  },

  "& li.active": {
    "& a": {
      color: "#fff",
      backgroundColor: "$buttonColor",
      borderColor: "$greyColor",
    },
  },
});
