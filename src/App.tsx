import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme/DefaultTheme";
import { AppRoutes } from "./routes/AppRoutes";
import { SnackbarProvider } from "notistack";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <AppRoutes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
