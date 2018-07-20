import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class sellerService {
    constructor(private http: Http) {}

    getsellerPage() {
        const url = "http://localhost:3000/kenh-nguoi-ban";
        const headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')});
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }

}