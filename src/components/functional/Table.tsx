import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Transfer } from "../../config/services/sistema-transferencias-api/transfer/transfer.types";
import moment from "moment";
import { formattedValuesDecimal } from "../../util/formatedValuesDecimal.utils";

interface TableProps {
  listTransfer: Transfer[];
}

interface RowProps {
  row: Transfer;
}

function Row({ row }: RowProps) {
  const [open, setOpen] = React.useState(false);

  const formattedCreatedAt = moment(row.createdAt).format("DD/MM/YYYY HH:mm");
  const formattedExpectedOn = row.expectedOn
    ? moment(row.expectedOn).format("DD/MM/YYYY") : "N/A"; 

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {formattedCreatedAt}
        </TableCell>
        <TableCell align="right">{row.type}</TableCell>
        <TableCell align="right">R$ {formattedValuesDecimal(Number(row.amount).toFixed())}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data Validade</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">External ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {formattedExpectedOn}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell align="right">{row.externalId}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableTransfers(props: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Data transferência</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listTransfer.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
