import { Box, Container, Fab, Stack } from "@mui/material";
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
  }, []);

  async function fetchTransferById(id: string) {
    const resultado = await getTransferById(id);
    console.log(resultado);

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
      maxWidth="xl"
      sx={{ justifyContent: "center", minHeight: "80vh" }}
    >
      <Stack maxWidth="lg">
        <Box component="section" sx={{ width: "100%" }}>
          <TableTransfers listTransfer={transfers} />
        </Box>
      </Stack>
    </Container>
  );
}
