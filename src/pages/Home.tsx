import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import TableTransfers from "../components/functional/Table";
import { useEffect, useState } from "react";
import { Transfer } from "../config/services/sistema-transferencias-api/transfer/transfer.types";
import {
  getTransferAll,
  getTransferById,
} from "../config/services/sistema-transferencias-api/transfer/transfers.service";

export function Home() {
  const [transfers, setTransfers] = useState<Array<Transfer>>([]);
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>(null); //estado da rota de busca por ID
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRegisters, setTotalRegisters] = useState(0);

  useEffect(() => {
    listTransfers(page, 10);
  }, [page]);

  async function listTransfers(page: number, limit: number) {
    const result = await getTransferAll({ page, limit });

    if (!result.ok) {
      alert(result.message);
      setTransfers([]);
      return;
    }
    setTransfers(result.data!);
    setTotalPages(result.pagination?.totalPages ?? 1);
    setTotalRegisters(result.pagination?.count ?? 0);
  }

 //função busca por ID
  async function fetchTransferById(id: string) {
    const resultado = await getTransferById(id);

    if (!resultado.ok) {
      alert(resultado.message);
      setSelectedTransfer(null);
      return;
    }
    setSelectedTransfer(resultado.data!);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        width: "97vw",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "row",
        paddingTop: "5%",
      }}
    >
      <Stack maxWidth="lg" spacing={4} sx={{ width: "100%" }}>
        <Box component="section">
          <Typography>
            {totalRegisters === 0
              ? "AINDA NÃO FOI EFETUADA NENHUMA TRANSFERÊNCIA"
              : `TOTAL DE TRANSFERÊNCIAS REALIZADAS: ${totalRegisters}`}
          </Typography>
          <TableTransfers listTransfer={transfers} />
        </Box>
        <Box>
          <Stack spacing={2} alignItems="center">
            <Typography>Página: {page}</Typography>
            <Pagination
              count={totalPages > 1 ? totalPages : 1}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
