import { Component, OnInit } from '@angular/core';
import { sellerService } from './seller-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css'],
  providers: [sellerService]
})
export class SellerPageComponent implements OnInit {
  dataT: String;
  dataF: String;
  url: string = "http://chototvanlang.tk";
  status: Boolean = true;

  constructor(private sellService: sellerService, private route: Router) { }

  dangBan(result) {
    const isSale = result.filter(sale => {
      return sale.Enable == this.status;
    });
    this.dataT = isSale;    
  }

  ngungBan(result) {
    const notSale = result.filter(sale => {
      return sale.Enable != this.status;
    });
    this.dataF = notSale;
  }

  ngOnInit() {
    this.sellService.getsellerPage()
    .then(result => {
      result.map(img => {
        return img.Img_Product = img.Img_Product.split(',', 1);
      });
      this.dangBan(result);
      this.ngungBan(result);
    })
    .catch(err => {
      this.route.navigate(['/tai-khoan/dang-nhap']);
    });
  }

}
