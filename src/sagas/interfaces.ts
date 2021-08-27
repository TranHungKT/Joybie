import { ApiResponse, ApiErrorResponse } from 'apisauce';

export type ResponseTypes<T> = ApiResponse<T, ApiErrorResponse<any>>;
