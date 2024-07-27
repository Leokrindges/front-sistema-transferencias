import { isAxiosError } from "axios";
import { CreateTransferRequestBody, Transfer } from "./transfer.types";
import { ResponseAPI, sistemaTransferenciasAPI } from "../api-cliente-http";

export async function createTransfer(data: CreateTransferRequestBody) {
  try {
    const response = await sistemaTransferenciasAPI.post("/transfers", data);


    return response.data as ResponseAPI<Transfer>;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar transferência",
    };
  }
}
