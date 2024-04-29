import ResourceFactory from "./ResourceFactory";
import { Resource } from '../../types/resource';
import { IApiResponse } from "../../types/api";

export default class GenericResource<T> extends ResourceFactory {
  constructor(resource: Resource) {
    super(resource);
    this.resource = resource;
  }

  create(data: Object, config?: Object): Promise<IApiResponse<T> | any> {
    return this.axiosApi.post<T>(this.url, data, config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        this.alertStore.setAlert('success', response.data.message);
        return response;
      }
    })
    .catch((error: any) => {
      console.log(error)
      this.alertStore.setAlert('error', error.response.data.payload.message || "Ha ocurrido un error inesperado.");
      return error
    })
  }

  findOne(id: number, config?: Object): Promise<IApiResponse<T> | undefined> {
    return this.axiosApi.get<T>(this.url + `/${id}`, config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response;
      }
    })
    .catch((error: any) => {
      console.log(error)
      return undefined
    })
  }

  findAll(config?: Object): Promise<IApiResponse<T[]> | undefined> {
    return this.axiosApi.get<T[]>(this.url, config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response;
      }
    })
    .catch((error: any) => {
      console.log(error)
      return undefined
    })
  }

  update(id: number, data: Object, config?: Object): Promise<IApiResponse<T> | undefined> {
    return this.axiosApi.patch<T>(this.url + `/${id}`, data, config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        this.alertStore.setAlert('success', response.data.message);
        return response;
      }
    })
    .catch((error: any) => {
      console.log(error)
      this.alertStore.setAlert('error', error.response.data.payload.message || "Ha ocurrido un error inesperado.");
      return undefined
    })
  }

  delete(id: number, config?: Object): Promise<IApiResponse<T> | undefined> {
    return this.axiosApi.delete<T>(this.url + `/${id}`, config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        this.alertStore.setAlert('success', response.data.message);
        return response;
      }
    })
    .catch((error: any) => {
      console.log(error)
      this.alertStore.setAlert('error', error.response.data.payload.message || "Ha ocurrido un error inesperado.");
      return undefined
    })
  }
}