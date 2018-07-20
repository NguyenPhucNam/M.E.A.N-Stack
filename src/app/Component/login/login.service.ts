import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class loginService {
    constructor(private http: Http) {}

    postLogin(data) {
        const url = "http://localhost:3000/tai-khoan/dang-nhap";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(data);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json());
    }
}