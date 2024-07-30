import { Box, Container, Stack } from "@mui/material";
import TableTransfers from "../components/functional/Table";
import { useEffect, useState } from "react";
import { Transfer } from "../config/services/sistema-transferencias-api/transfer/transfer.types";
import {
  getTransferAll,
  getTransferById,
} from "../config/services/sistema-transferencias-api/transfer/transfers.service";

export function Home() {
  const [transfers, setTransfers] = useState<Array<Transfer>>([]);
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>(
    null
  );

  async function listTransfers(page: number, limit: number) {
    const resultado = await getTransferAll({ page, limit });

    if (!resultado.ok) {
      alert(resultado.message);
      setTransfers([]);
      return;
    }
    setTransfers(resultado.data!);
  }

  useEffect(() => {
    listTransfers(1, 10);
  }, [transfers]);

  //Para buscar por ID
  async function fetchTransferById(id: string) {
    const resultado = await getTransferById(id);

    if (!resultado.ok) {
      alert(resultado.message);
      setSelectedTransfer(null);
      return;
    }
    setSelectedTransfer(resultado.data!);
  }

  useEffect(() => {
    listTransfers(1, 10);
  }, []);

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        width: "97vw",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection:"row",
        paddingTop:"5%"
      }}
    >
      <Stack maxWidth="lg" sx={{ width: "100%" }}>
        <Box component="section">
          <TableTransfers listTransfer={transfers} />
        </Box>
      </Stack>
    </Container>
  );
}
