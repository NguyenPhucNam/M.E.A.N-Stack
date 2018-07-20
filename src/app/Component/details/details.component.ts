import { Component, OnInit } from '@angular/core';
import { detailsComponent } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [detailsComponent]
})
export class DetailsComponent implements OnInit {
  detail: String;
  numberIndex: Number = 1;
  url = "http://chototvanlang.tk";

  constructor(private details: detailsComponent) { }

  ngOnInit(): void {
    this.details.getDetails()
    .then(result => {
      [result].map(imgD => {
        imgD['Img_Product'] = imgD.Img_Product.split(",");
        return imgD;
      });
      this.detail = result;
    }).catch((err) => {
      console.log(err);
    });
  }

  myClick(n) {
    if((this.numberIndex < 1) || (this.numberIndex > this.detail['Quantity'])) {
      this.numberIndex = 1;
    } else {
      this.numberIndex += n;
    }
  }

}
