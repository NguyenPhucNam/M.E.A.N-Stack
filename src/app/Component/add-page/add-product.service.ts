import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class addProService {
    constructor(private http: Http) {}

    uploadImg(value) {
        const url = "http://localhost:3000/kenh-nguoi-ban/them-anh";
        const headers = new Headers({ 'Authorization': 'Bearer '+localStorage.getItem('token') });
        const formData = new FormData();
        for(let i=0; i < value.files.length; i++) {
            formData.append('uploadImg', value.files[i]);
        }
        return this.http.post(url, formData, { headers })
        .toPromise()
        .then(result => result.json());
    }

    addProduct(value) {
        const url = "http://localhost:3000/kenh-nguoi-ban/them";
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token') });
        value['Url_clound'] = "/images/";
        value['img_Product'] = sessionStorage.getItem('img');
        return this.http.post(url, value, { headers })
        .toPromise()
        .then(result => result.json());
    }

}