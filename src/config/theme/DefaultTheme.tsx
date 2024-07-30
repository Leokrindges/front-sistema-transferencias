import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EDEDED",
    },
    secondary: {
      main: "#808080",
    },
    text: {
      primary: "#42a991",
      secondary: "#42a991",
    },
    background: {
      default: "#EDEDED",
      paper: "#ced0d0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#E81E63", 
          color: "#FFFFFF", 
          '&:hover': {
            backgroundColor: "#d35a83",
          },
        },
      },
    },
  },
});
