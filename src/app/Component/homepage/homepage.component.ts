import { Component, OnInit, AfterViewInit } from '@angular/core';
import { columnService } from './homepage.service';
import {foop} from './file';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [columnService, foop]
})

export class HomepageComponent implements OnInit,AfterViewInit {
  objectProducts: any[];
  url = "http://chototvanlang.tk";
  baColumns: any[];
  variable: number;
  people;
  value = 0;
  form: FormGroup;

  constructor(private columnService: columnService,
    private fo: foop, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {

  }

  onClick(e: number) {
    // this.all[e].form = this.arrForm[e];
    // this.variable = e;
  }

  onSubmit(e: FormGroup) {
    // e.value.name = this.all[this.variable].name;
    // e.value.id = this.variable;
    // console.log(e.value);
  }

  getForm(numb: number) {
    return this.fo.formGroup_Data(numb);
  }

  getData() {
    this.columnService.getProducts()
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

  reLoad() {
    $(".fill").css({'color':'green'});
    this.ajax();
  }

  ajax() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/",
      headers: {
        'Content-Type':'application/json; charset=utf-8'
      },
      // contentType: "application/json; ",
      cache: false,
      // success: function (result) {
      //   this.baColumns = result.map(result => {
      //     return {
      //      id: result._id,
      //      name: result.Product_Name,
      //      abc: result.Description
      //     }
      //   });
      // },
      // error: function (error) {
      //     console.log(JSON.stringify(error));
      // }
    }).done((data: String) => {
      console.log(data);
    }).fail((jqXHR, textStatus) => {
      alert(jqXHR + textStatus);
    });
  }

}
