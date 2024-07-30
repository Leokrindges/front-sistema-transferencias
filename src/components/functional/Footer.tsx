import { Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container component="footer" maxWidth={false} disableGutters>
      <Typography
        variant="body2"
        color={"GrayText"}
        textAlign="center"
        marginTop={5}
        fontSize={25}
      >
        Copyright &copy;&nbsp; &nbsp;Leonardo Krindges{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
