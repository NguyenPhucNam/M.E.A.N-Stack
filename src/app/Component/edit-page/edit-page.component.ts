import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { editSerrvice } from './edit-page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  providers: [editSerrvice]
})
export class EditPageComponent implements OnInit {
  data: String;
  url: string = "http://localhost:3000";

  constructor(private getEdit: editSerrvice, private route: Router) { }

  ngOnInit() {
    this.getEdit.getEdit()
    .then(result => {
      [result].map(product => product['Img_Product'] = product.Img_Product.split(','));
      this.data = result;
      sessionStorage.setItem('imgE', result.Img_Product);
    })
    .catch(err => {
      this.route.navigate(['/tai-khoan/dang-nhap'])
    });
  }

  onChange(e) {
    this.getEdit.uploadImg(e.target)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }

  onSubmit(formEdit) {
    // this.getEdit.putEdit(formEdit.value)
    // .then(result => {})
    // .catch(err => {});
  }

}
