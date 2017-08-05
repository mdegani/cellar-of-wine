import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private DEV_API_ADDRESS = 'http://localhost:3000';
  constructor(private http: Http) { }

  get(endpoint) {
    return this.http.get(`${this.DEV_API_ADDRESS}/${endpoint}`).map(response => {
      return response.json();
    });
  }
  post(endpoint, body) {
    return this.http.post(`${this.DEV_API_ADDRESS}/${endpoint}`, body).map(response => {
      return response.json();
    });
  }

}
