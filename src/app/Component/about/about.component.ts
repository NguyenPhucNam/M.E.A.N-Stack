import { Component, OnInit } from '@angular/core';
import { aboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [aboutService]
})

export class AboutComponent implements OnInit {
  aboutData: String;
  url: string = 'http://chototvanlang.tk';

  constructor(private about: aboutService) {}

  ngOnInit(): void {
    this.about.getAbout()
    .then((result) => {
      result.map(result_map => 
        result_map['Img_Member'] = result_map.Img_Member.split(',')
      );
      this.aboutData = result[0];
    }).catch((err) => {
      console.log(err);
    });
  }

}


// date========================================================================================================================
export class DatepickerOverviewExample {
  intCount: Number = 0;
  max: Number = 0;
  name: string = '';
  boolFunc: boolean = false;

  add() {
    this.boolFunc = true;
    setTimeout(() => {
      var them = document.getElementsByClassName('them')[0];

      if (typeof (them) != "undefined") {

        this.max = document.getElementsByClassName('all')[0].getElementsByTagName('input').length;
        this.intCount = document.getElementsByClassName('them')[0].getElementsByTagName('input').length;

        for (let i = (this.max - this.intCount); i < this.max; i++) {
          this.appendChilda(i);
        }

      }
    }, 0);
  }

  appendChilda(e) {
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
        });

        // // focus
        // document.getElementsByClassName("tdb")[e].addEventListener("focus", () => {
        //   gtri = document.getElementsByClassName("tdb")[e].value;
        //   console.log(gtri);
        //   this.chooseTBD(e, gtri);
        // });

        // // blur
        // document.getElementsByClassName("tdb")[e].addEventListener("blur", () => {
        //   gtri = document.getElementsByClassName("tdb")[e].value;
        //   setTimeout(() => {
        //     this.chooseTBD(e, gtri); 
        //     this.name = gtri;         
        //   },100);   
        // });

      });
  }

  onBlur(e) {
    e.target.value = "";
    e.target.value = this.name;
  }

  onFocus(e) {
    this.name = e.target.value;
  }

  onChange(e, className) {
    if (e.target.value != 1) {
      var c = e.target.closest("tbody").getElementsByClassName(className).length;
      for(let i = 0; i < c; i++) 
      {
        document.getElementsByClassName(className)[i].getElementsByTagName("button")[0].setAttribute("disabled","");
        document.getElementsByClassName(className)[i].getElementsByTagName("input")[0].value = "NA";
      }

    } else {
      var c = e.target.closest("tbody").getElementsByClassName(className).length;
      for(let i = 0; i < c; i++) 
      {
        document.getElementsByClassName(className)[i].getElementsByTagName("button")[0].removeAttribute("disabled");
        document.getElementsByClassName(className)[i].getElementsByTagName("input")[0].value = "";
      }

    }
  }

  chooseTBD(e, value) {
    var valueInput = document.getElementsByClassName("tdb")[e];
    valueInput.value = "";
    valueInput.value = value;
  }

}
