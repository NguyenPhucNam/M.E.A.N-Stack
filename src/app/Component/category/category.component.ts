import { Component, OnInit } from '@angular/core';
import { cateService } from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [cateService]
})
export class CategoryComponent implements OnInit {
  objectProducts: any[];
  baColumns: any[];

  constructor(private columnService: cateService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.columnService.getCate()
    .then(apiHome => {
      this.objectProducts = apiHome,
      this.baColumns = this.objectProducts.map(result => {
        return {
         id: result._id,
         name: result.Product_Name,
         abc: result.Description
        }
      });
    })
    .catch((err) => {console.log(err)});
  }

}
