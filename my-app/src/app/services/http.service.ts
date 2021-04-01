import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }


  getUsers() {
    return this.http.get<any>(`${this.url}/`);
  }

  getData() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    return this.http.request(req);
  }

}
