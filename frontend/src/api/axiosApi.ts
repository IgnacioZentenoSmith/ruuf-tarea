import { IHttpMethod } from "../types/api";
import axiosInstance from "./axiosInstance";
import baseApi from "./baseApi";

export default class AxiosApi extends baseApi implements IHttpMethod {
  constructor(provider: IHttpMethod = axiosInstance) {
    super(provider);
    this.provider = provider;
  }

  get<T>(url: string, config = {}) {
    return this.provider.get<T>(url, config);
  }

  post<T>(url: string, data = {}, config = {}) {
    return this.provider.post<T>(url, data, config);
  }

  put<T>(url: string, data = {}, config = {}) {
    return this.provider.put<T>(url, data, config);
  }

  patch<T>(url: string, data = {}, config = {}) {
    return this.provider.patch<T>(url, data, config);
  }

  delete<T>(url: string, config = {}) {
    return this.provider.delete<T>(url, config);
  }
}