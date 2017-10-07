import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class DataserviceService {
  constructor(private http: Http) { }

  create(model: any) {
    return this.http.post('http://localhost:65011/api/Employee', model).map((response: Response) => response.json());
  }

  getDataStudent() {
    return this.http.get('http://localhost:65011/api/Employee')
      .map(response => response.json());
  }


}