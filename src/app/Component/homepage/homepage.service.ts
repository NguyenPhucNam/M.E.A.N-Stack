import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class columnService {
    apihomePage: string = "http://localhost:3000";
    constructor(private http: Http) {}

    getProducts() {
        return this.http.get(this.apihomePage)
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }
}
