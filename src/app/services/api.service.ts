import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  get(endpoint) {
    return this.http.get(`http://localhost:3000/${endpoint}`).map(response => {
      return response.json();
    });
  }

}
