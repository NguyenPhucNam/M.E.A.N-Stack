import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class cateService {
    apihomePage: string = "http://localhost:3000/danh-muc";
    constructor(private http: Http) {}

    getCate() {
        return this.http.get(this.apihomePage)
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }
}
