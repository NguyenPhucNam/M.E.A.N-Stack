import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  number = 0;

  constructor() { }

  ngOnInit() {
  }

  myclick(flag: boolean) {
    if(flag) {
      this.number = this.number + 1;
    } else {
      this.number = this.number - 1;
    }
  }

}
