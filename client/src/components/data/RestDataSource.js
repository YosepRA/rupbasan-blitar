import axios from 'axios';
import { Urls } from './Urls';

axios.defaults.withCredentials = true;

export class RestDataSource {
  getRequest(dataType, params) {
    return this.sendRequest('get', Urls[dataType], params || {});
  }

  postRequest(dataType, data) {
    return this.sendRequest('post', Urls[dataType], {}, data);
  }

  sendRequest(method, url, params, data) {
    return axios.request({ method, url, params, data });
  }
}
