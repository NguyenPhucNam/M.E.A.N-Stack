import { Component, OnInit } from '@angular/core';
import { columnService } from './homepage.service';
import { $ } from '../../../../node_modules/protractor';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [columnService]
})
export class HomepageComponent implements OnInit {

  objectProducts: String;
  url = "http://chototvanlang.tk";

  constructor(private columnService: columnService) {}

  ngOnInit(): void {
    this.columnService.getProducts()
    .then(apiHome => this.objectProducts = apiHome)
    .catch((err) => {console.log(err)});
  }

  keoxuong(e) {
    document.getElementById("keo").scrollTop = e.target.scrollTop;
  }

}
