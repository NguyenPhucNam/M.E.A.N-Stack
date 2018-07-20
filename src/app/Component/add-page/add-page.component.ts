import { Component, OnInit } from '@angular/core';
import { addProService } from './add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css'],
  providers: [addProService]
})
export class AddPageComponent implements OnInit {
  imgArr: String;
  url: string = "http://localhost:3000";
  constructor(private add: addProService, private route: Router) {}

  ngOnInit() {
  }

  onChange(e) {
    this.add.uploadImg(e.target)
    .then(result => {
      const uiMang = result.imgisSave.map(img => img.filename);
      this.imgArr = uiMang;
      sessionStorage.setItem('img', uiMang);
    })
    .catch(err => console.log(err));
  }

  onSubmit(formAdd) {
    this.add.addProduct(formAdd.value)
    .then(result => {
      this.route.navigate(['/']);
    })
    .catch(err => console.log(err));
  }

}