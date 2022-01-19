import { AxiosError } from "axios";

import { IErrorHandling } from "../IErrorHandling";

class ErrorHandling implements IErrorHandling {
  getMessage(error: AxiosError<any, any>): string {
    const { response, message } = error;

    if (typeof response.data.message === "string") {
      return response.data.message;
    }

    return message;
  }
}

export { ErrorHandling };
