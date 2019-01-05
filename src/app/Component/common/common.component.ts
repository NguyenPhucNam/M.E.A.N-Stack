import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  @Input() isURL: string;
  @Input() arrayData: any[];
  @Output() myClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  increValue() {
    this.myClick.emit();
  }

}
