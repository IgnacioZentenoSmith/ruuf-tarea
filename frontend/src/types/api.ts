export interface IApiResponse<T> {
  data: {
    message: string;
    payload: T;
  };
  status: number;
  statusText: string;
  message?: string;
}

export interface IHttpMethod {
  get<T>(url: string, config?: any): Promise<IApiResponse<T>>;
  post<T>(url: string, data?: any, config?: any): Promise<IApiResponse<T>>;
  put<T>(url: string, data?: any, config?: any): Promise<IApiResponse<T>>;
  patch<T>(url: string, data?: any, config?: any): Promise<IApiResponse<T>>;
  delete<T>(url: string, config?: any): Promise<IApiResponse<T>>;
}
