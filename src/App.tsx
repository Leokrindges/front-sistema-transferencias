import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme/DefaultTheme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Sistema de transferências</h1>
    </ThemeProvider>
  );
}
