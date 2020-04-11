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
        },
        "&.MuiTypography-h2": {
          color: "#757575",
          fontSize: "1.75rem",
          padding: "0 0 25px",
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
          borderColor: "#4db6ac",
        },
        "&.MuiButton-contained": {
          backgroundColor: "#212121",
          color: "#fff",
        },
        "& a": {
          color: "#ffffff",
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
        "&.MuiLinearProgress-colorPrimary": {
          backgroundColor: "#ddd",
        },
        "& .MuiLinearProgress-bar1Determinate": {
          backgroundColor: "#4db6ac",
        },
      },
    },
  },
});
