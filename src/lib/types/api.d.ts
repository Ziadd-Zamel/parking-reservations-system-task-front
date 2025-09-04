declare type ErrorResponse = {
  error: string;
  code?: string;
  message?: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type DataBaseProbs = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
