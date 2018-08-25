import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
===========================================================================================================================================
  export class DatepickerOverviewExample implements OnInit {
  intCount: any = 0;
  max: any = 0;
  name: string = '';
  boolFunc: boolean = false;
  mang: any[];
  flag:boolean = false;

  ngOnInit() {
    this.taoMang();
  }

  taoMang() {
    this.mang = [];
    for (let i = 0; i < 10; i++) {
      this.mang.push(i);
    }
  }

  add() {
    this.boolFunc = true;
    setTimeout(() => {
      var them = document.getElementsByClassName('them')[0];
      if (typeof (them) != "undefined") {
        this.max = document.getElementsByClassName('all')[0].getElementsByTagName('input').length;
        this.intCount = document.getElementsByClassName('them')[0].getElementsByTagName('input').length;
        for (let i = (this.max - this.intCount); i < this.max; i++) {
          this.appendChilda(i);
          this.disableDate(i);
        }
      }
    }, 0);
  }

  appendChilda(e) {
    var btnTbd = document.getElementsByClassName('btn-TBD')[0];

    if(btnTbd == undefined) {
       document.getElementsByClassName("mat-icon-button")[e]
      .addEventListener("click", () => {
        var node = document.createElement("button");
        var textnode = document.createTextNode("TBD");
        node.appendChild(textnode);
        node.setAttribute("class", "btn-TBD");
        node.setAttribute("style", "cursor: pointer; background-color: green; float: right; margin-right: 15px;");
        document.getElementsByTagName('mat-calendar')[0].appendChild(node);
        var gtri;
        // click
        document.getElementsByClassName('btn-TBD')[0].addEventListener("click", () => {
          this.chooseTBD(e, "TBD");
          this.remove(e);
          document.getElementsByClassName('cdk-overlay-backdrop')[0].setAttribute("id","test");
          document.getElementById('test').click();
        });


        // .getElementsByClassName("tdb")[e]
        // // focus
        // document.getElementsByTagName("input")[e].addEventListener("focus", () => {
        //   gtri = getElementsByTagName("input")[e].value;
        //   console.log(gtri);
        //   this.chooseTBD(e, gtri);
        // });
        // // blur
        // document.getElementsByTagName("input")[e].addEventListener("blur", () => {
        //   gtri = document.getElementsByTagName("input")[e].value;
        //   setTimeout(() => {
        //     this.chooseTBD(e, gtri); 
        //     this.name = gtri;         
        //   },100);   
        // });
      });
    }

  }

  onBlur(e) {
    e.target.value = "";
    e.target.value = this.name;
  }

  onFocus(e) {
    this.name = e.target.value;
  }

  onChange(e, className) {
    var c = e.target.closest("tbody").getElementsByClassName(className).length;
    if (e.target.value != 1) {
      for (let i = 0; i < c; i++) {
        document.getElementsByClassName(className)[i].getElementsByTagName("button")[0].setAttribute("disabled", "");
        document.getElementsByClassName(className)[i].getElementsByTagName("input")[0].value = e.target.options[e.target.selectedIndex].text;
      }
    } else {
      for (let i = 0; i < c; i++) {
        document.getElementsByClassName(className)[i].getElementsByTagName("button")[0].removeAttribute("disabled");
        document.getElementsByClassName(className)[i].getElementsByTagName("input")[0].value = "";
      }
    }
  }

  chooseTBD(e, value) {
    var valueInput = document
    .getElementsByTagName("input")[e];
    valueInput.value = "";
    valueInput.value = value;
  }

  remove(e) {
    var parentEmelent = document.getElementsByClassName("cdk-overlay-container")[0].childNodes[1].firstChild;
    var butn = document.getElementById("btn");
    while (parentEmelent.hasChildNodes()) {
      parentEmelent.removeChild(parentEmelent.firstChild);
      setTimeout(() => {
        document.getElementsByTagName('input')[e].focus();
      }, 2000);
    }
  }

  disableDate(c) {
    document.getElementsByClassName("mat-icon-button")[c].setAttribute("disabled", "");
  }

}
