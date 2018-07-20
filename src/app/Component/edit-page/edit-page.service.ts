import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()

export class editSerrvice {
    params_id: string;
    addImg: string = "http://localhost:3000/kenh-nguoi-ban/them-anh";
    url: string = "http://localhost:3000/kenh-nguoi-ban/chinh-sua/";

    constructor(private http: Http, private route: ActivatedRoute) {}

    getId() {
        this.route.paramMap.subscribe((id: ParamMap) => this.params_id = id.get('id'));
    }

    getEdit() {
        this.getId();
        const headers = new Headers({ 'Authorization': 'Bearer '+localStorage.getItem('token') });
        return this.http.get(this.url+this.params_id, { headers })
        .toPromise()
        .then(res => res.json());
    }

    uploadImg(img) {
        const headers = new Headers({ 'Authorization': 'Bearer '+localStorage.getItem('token') });
        const arrImg = img.files.length;
        const formData = new FormData();
        for(let i = 0; i < arrImg; i++) {
            formData.append('uploadImg', img.files[i]);
        }
        return this.http.post(this.addImg, formData, { headers })
        .toPromise()
        .then(res => res.json())
    }

    putEdit(data) {
        this.getId();
        const headers = new Headers({ 'Authorization': 'Bearer '+localStorage.getItem('token') });
        return this.http.put(this.url+this.params_id, data, { headers })
        .toPromise()
        .then(res => res.json());
    }

}