import { AxiosError } from "axios";

interface IErrorHandling {
  getMessage(error: AxiosError): string;
}

export { IErrorHandling };
