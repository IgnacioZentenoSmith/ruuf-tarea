import { IHttpMethod } from '../types/api'

export default abstract class {
  protected provider: IHttpMethod;

  constructor(provider: IHttpMethod) {
    this.provider = provider;
  }
}