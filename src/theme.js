import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Baloo Chettan 2"].join(","),
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 30px 30px",
        color: "#212121",
        margin: "0 0 50px",
      },
    },
    MuiTypography: {
      root: {
        "&.MuiTypography-h1": {
          color: "#212121",
          fontSize: "3rem",
          fontWeight: "500",
          margin: "10px 0 30px",
          textShadow: "3px -4px #BCD915",
        },
        "&.MuiTypography-h2": {
          fontSize: "1.75rem",
          display: "inline-block",
          margin: "0px 0 25px",
          padding: "0 10px",
          border: "3px solid #212121",
          borderRadius: "3px",
          boxShadow: "5px 5px 0 #BCD915",
        },
        "&.MuiTypography-body1": {
          color: "#424242",
          fontSize: "18px",
          padding: "0 0 10px",
        },
        "&.MuiTypography-body1.text-name": {
          fontWeight: 600,
          fontSize: "24px",
        },
        "&.MuiTypography-body1.text-profession": {
          fontSize: "18px",
          color: "#424242",
        },
        "&.text-bold-label": {
          fontWeight: 600,
          fontSize: "15px",
        },
      },
    },
    MuiButton: {
      root: {
        margin: "30px 0 10px",
        borderRadius: "25px",
        fontWeight: "bold",
        "&.MuiButton-outlined": {
          backgroundColor: "#fff",
          color: "#212121",
          border: "3px solid #BCD915",
        },
        "&.MuiButton-contained": {
          backgroundColor: "#BCD915",
          color: "#212121",
          boxShadow: "none",
        },
        "&.MuiButton-contained:hover": {
          backgroundColor: "#BCD915",
          color: "#212121",
        },
        "& a": {
          color: "#212121",
          textDecoration: "none",
        },
      },
    },
    MuiDivider: {
      root: {
        margin: "25px 0 40px",
        backgroundColor: "#9e9e9e",
      },
    },
    MuiAvatar: {
      root: {
        margin: "10px 0 35px",
      },
    },
    MuiLinearProgress: {
      root: {
        margin: "5px 0 15px",
        boxShadow: "0px 1px 4px -1px",
        "&.MuiLinearProgress-colorPrimary": {
          backgroundColor: "#eeeeee",
        },
        "& .MuiLinearProgress-bar1Determinate": {
          backgroundColor: "#BCD915",
        },
      },
    },
  },
});
