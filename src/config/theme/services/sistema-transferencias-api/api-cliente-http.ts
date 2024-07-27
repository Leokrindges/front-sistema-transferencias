import axios from "axios";

export const sistemaTransferenciasAPI = axios.create({
  baseURL: "http/localhost:8082",
});

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  data?: T;
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
