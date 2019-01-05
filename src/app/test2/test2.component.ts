import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Output() myclick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.myclick.emit(true);
  }

  sub() {
    this.myclick.emit(false);
  }

}
