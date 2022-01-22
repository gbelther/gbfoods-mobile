import { AxiosError } from "axios";

export interface IGetErrorInformations {
  message: string;
  statusCode: number;
}

interface IErrorHandling {
  getMessage(error: AxiosError): string;
  getStatusCode(error: AxiosError): number;
  getInformations(error: AxiosError): IGetErrorInformations;
}

export { IErrorHandling };
