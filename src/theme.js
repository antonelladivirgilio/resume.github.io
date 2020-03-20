import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 30px 30px",
        color: "#000",
        margin: "0 0 50px"
      }
    },
    MuiTypography: {
      root: {
        "&.MuiTypography-h1": {
          color: "#bbb",
          fontSize: "3rem"
        },
        "&.MuiTypography-h2": {
          color: "#bbb",
          fontSize: "1.75rem"
        }
      }
    },
    MuiButton: {
      root: {
        borderRadius: "25px"
      }
    }
  }
});
