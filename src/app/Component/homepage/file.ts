import {FormGroup, FormBuilder} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()

export class foop {
  form1: FormGroup;
  form2: FormGroup;

  Bus: Object = {
    _id: 1,
    form: this.form1,
    name: "dataBus"
  };

  Per: Object = {
    _id: 2,
    form: this.form2,
    name: "dataPer"
  };

  bus: FormGroup;
  per: FormGroup;

  arrForm: Array<FormGroup>;
  All: Array<Object>;

  constructor(private fb: FormBuilder) {
    console.log("noooooooook");
    this.convertData();
  }

  convertData():void {
    console.log("noooooooook");
    this.bus = this.fb.group({
      option: "",
      email: "",
      pwd: "",
      sub: this.fb.group({
        remember: this.fb.group({
          re: false,
          read: ""
        }),
        noremember: this.fb.group({
          nre: false,
          noread: ""
        })
      })
    });
    this.per = this.fb.group({
      option1: "",
      email1: "",
      pwd1: ""
    });
    this.Bus['data'] = this.bus;
    this.Per['data'] = this.per;
    this.All = [this.Bus, this.Per];
  }

  formGroup_Data(numb: number): Object {
    return this.All[numb];
  }

}
