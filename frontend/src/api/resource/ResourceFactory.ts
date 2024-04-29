import AxiosApi from '../axiosApi';
import { Resource } from '../../types/resource';
import { useAlertStore } from '@/store/AlertStore';

export default abstract class ResourceFactory {
  protected axiosApi = new AxiosApi();
  protected resource: Resource;
  protected url: string;
  protected alertStore = useAlertStore();

  constructor(resource: Resource) {
    this.resource = resource;
    this.url = `/backend/${this.resource}`;
  }
}