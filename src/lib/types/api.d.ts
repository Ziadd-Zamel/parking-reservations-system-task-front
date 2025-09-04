declare type ErrorResponse = {
  status: string;
  message?: string;
  errors?: {
    field: [""];
  };
};

declare type DataBaseProbs = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfulResponse<T> = T;

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
