import { createStitches } from "@stitches/react";

const stitches = createStitches({
  // media: {
  //   sm: "(max-width: 390px)",
  //   md: "(max-width: 1000px)",
  // },
  theme: {
    colors: {
      headerColor: "#343d46",
      greyColor: "#828385",
      buttonColor: "#343434",
      backgroundColor: "#c0c5ce",
      hoverColor:"#595959"
    },
  },
});

const injectGlobalStyles = stitches.globalCss();

injectGlobalStyles();

export default stitches;
