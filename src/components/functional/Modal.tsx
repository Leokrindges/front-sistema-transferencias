import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Alert,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { createTransfer } from "../../config/services/sistema-transferencias-api/transfer/transfers.service";
import { CreateTransferRequestBody } from "../../config/services/sistema-transferencias-api/transfer/transfer.types";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalTransferProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTransfer({ isOpen, onClose }: ModalTransferProps) {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value);
  };

  const validateInputs = (data: CreateTransferRequestBody): boolean => {
    if (!data.externalId || !data.expectedOn || !type || !data.amount) {
      setAlertOpen(true);
      return false;
    }
    setAlertOpen(false);
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const externalId: string = event.currentTarget.externalId.value;
    const amount = event.currentTarget.amount.value;
    const expectedOn = event.currentTarget.expectedOn.value;

    const formattedDate = moment(expectedOn).format("DD/MM/YYYY");

    const data = {
      externalId: externalId,
      expectedOn: formattedDate,
      amount: Number(amount),
      type: type,
    };

    if (!validateInputs(data)) {
      return;
    }

    const result = await createTransfer(data);
    if (!result.ok) {
      alert(result.message);
      return;
    }
    alert(result.message);
    setAlertOpen(false);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Nova Transferência
        </Typography>

        {alertOpen && (
          <Alert severity="error" onClose={() => setAlertOpen(false)}>
            Todos os campos são obrigatórios!
          </Alert>
        )}
        <TextField
          margin="normal"
          fullWidth
          name="externalId"
          label="Id externo"
          type="text"
          id="externalId"
        />
        <TextField
          margin="normal"
          fullWidth
          name="expectedOn"
          type="date"
          id="expectedOn"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleTypeChange}
          fullWidth
          required
        >
          <MenuItem value={"Entrada"}>Entrada</MenuItem>
          <MenuItem value={"Saida"}>Saida</MenuItem>
        </Select>
        <TextField
          margin="normal"
          fullWidth
          name="amount"
          label="Valor"
          type="number"
          id="amount"
          autoComplete="amount"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Modal>
  );
}
