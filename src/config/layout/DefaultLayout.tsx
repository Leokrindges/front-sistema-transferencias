import { Stack } from "@mui/material";

import Navbar from "../../components/functional/Navbar";
import { Footer } from "../../components/functional/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Stack spacing={5}>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
