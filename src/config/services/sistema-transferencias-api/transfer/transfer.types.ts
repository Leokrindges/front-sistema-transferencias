export interface CreateTransferRequestBody {
  externalId: string;
  amount: number;
  expectedOn?: string | null;
  type: TypeTransfer;
}

export interface ListAllRequestParams {
  limit?: number;
  page?: number;
}

enum TypeTransfer {
  Entrada = "Entrada",
  Saida = "Saida",
}

enum StatusTransfer {
  Entrada = "Entrada",
  Saida = "Saida",
}

export interface Transfer {
  id: string;
  externalId: string;
  amount: number;
  expectedOn: string | null;
  status: StatusTransfer;
  createdAt: Date;
  type: TypeTransfer;
}