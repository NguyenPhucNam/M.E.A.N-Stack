import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class aboutService {
    api:string = "http://localhost:3000/gioi-thieu";

    constructor(private http: Http) {}

    getAbout() {
        return this.http.get(this.api)
        .toPromise()
        .then(resJson => resJson.json())
        .then(result => result);
    }

}