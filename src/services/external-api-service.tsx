import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "../models/api-response";

export const callExternalApi = async (options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error as AxiosError;
      const { response } = axiosError;

      if (!response) {
        return {
          data: null,
          error: {
            message: "http request failed",
          },
        };
      }

      const { data, statusText } = response;

      const message = data && data.message ? data.message : statusText;

      return {
        data: null,
        error: {
          message: message,
        },
      };
    }

    return {
      data: null,
      error: {
        message: (error as Error).message,
      },
    };
  }
};
