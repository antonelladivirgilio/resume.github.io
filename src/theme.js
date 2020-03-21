import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Baloo Chettan 2"].join(",")
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 30px 30px",
        color: "#212121",
        margin: "0 0 50px"
      }
    },
    MuiTypography: {
      root: {
        "&.MuiTypography-h1": {
          color: "#212121",
          fontSize: "3rem",
          fontWeight: "500",
          margin: "10px 0 40px"
        },
        "&.MuiTypography-h2": {
          color: "#757575",
          fontSize: "1.75rem"
        },
        "&.MuiTypography-body1": {
          color: "#424242",
          fontSize: "18px"
        }
      }
    },
    MuiButton: {
      root: {
        margin: "30px 0 10px",
        borderRadius: "25px",
        fontWeight: "bold",
        "&.MuiButton-outlined": {
          backgroundColor: "#fff",
          color: "#212121",
          borderColor: "#4db6ac"
        },
        "&.MuiButton-contained": {
          backgroundColor: "#212121",
          color: "#fff"
        }
      }
    },
    MuiDivider: {
      root: {
        margin: "25px 0 40px",
        backgroundColor: "#9e9e9e"
      }
    },
    MuiAvatar: {
      root: {
        margin: "10px 0 35px"
      }
    }
  }
});
