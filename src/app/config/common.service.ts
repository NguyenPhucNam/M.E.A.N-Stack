import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from "./config";
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient, private config: Config) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }

  getPagination() {
    // now returns an Observable of Config
    // return this.http.get<Config>();
  }

}
