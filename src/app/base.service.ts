import { Injectable } from '@angular/core';
import Axios          from 'axios';

@Injectable()
export class BaseService {

  private baseUrl: String;
  private axios: any;
  private headers: Headers;

  constructor() {
    this.baseUrl = "http://localhost:8002/";
    this.axios = Axios;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');
  }

  /*
   * get request
   * */
  get(path, params) {
    return new Promise((resolve, reject) => {
      this.axios.get(this.baseUrl + path, {
        params: params,
        headers: this.headers
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
