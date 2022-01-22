import { AxiosError } from "axios";

import { IErrorHandling, IGetErrorInformations } from "../IErrorHandling";

class ErrorHandling implements IErrorHandling {
  public static updateNecessary = false;

  getMessage(error: AxiosError): string {
    const { response, message } = error;

    if (response.data && typeof response.data.message === "string") {
      return response.data.message;
    }

    return message;
  }

  getStatusCode(error: AxiosError): number {
    const { response } = error;

    return response.status;
  }

  getInformations(error: AxiosError): IGetErrorInformations {
    const message = this.getMessage(error);
    const statusCode = this.getStatusCode(error);

    return {
      message,
      statusCode,
    };
  }
}

export { ErrorHandling };
