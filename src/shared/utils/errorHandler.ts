import axios, {AxiosError} from 'axios';

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{message?: string}>;
    if (axiosError.response) {
      return (
        axiosError.response.data?.message || 'A server-side error occurred.'
      );
    } else if (axiosError.request) {
      return 'No response from the server. Please check your connection.';
    } else {
      return `Request error: ${axiosError.message}`;
    }
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'An unexpected error occurred.';
  }
};

export default getErrorMessage;
