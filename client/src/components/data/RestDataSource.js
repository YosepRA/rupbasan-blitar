import Axios from 'axios';
import { Urls } from './Urls';

export class RestDataSource {
  getRequest(dataType, params) {
    return this.sendRequest('get', Urls[dataType], params);
  }

  postRequest(dataType, data) {
    return this.sendRequest('post', Urls[dataType], {}, data);
  }

  sendRequest(method, url, params, data) {
    return Axios.request({ method, url, params, data });
  }
}
