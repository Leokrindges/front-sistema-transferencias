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
      primary: "#4BBEA3",
      secondary: "#4BBEA3",
    },
    background: {
      default: "#839b96",
      paper: "#EDEDED",
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
