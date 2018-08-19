import { Component, OnInit } from '@angular/core';
import { columnService } from './homepage.service';
// import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [columnService]
})
export class HomepageComponent implements OnInit {

  objectProducts: any[];
  url = "http://chototvanlang.tk";
  frozenCols: any[];
  baColumns: any[];
  enableSticky: boolean;

  constructor(private columnService: columnService) {}

  ngOnInit(): void {

    this.matchBrowser();
    
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
      console.log(this.baColumns);
    })
    .catch((err) => {console.log(err)});

  }

  matchBrowser() {
    const browser = this.get_browser();
    const browserEdge = browser.toString().split(" ");

    // 1
    const ie = (browserEdge[0] == "IE");
    const firefox = (browser.name == "Firefox") && (browser.version >= 59);
    const chrome = (browser.name == "Chrome") && (browser.version >= 56);
    const edge = (browserEdge[0] == "Edge") && (browserEdge[1] >= 16);
    const opera = (browser.name == "Opera") && (browser.version >= 43);
    const safari = (browser.name == "Safari") && (browser.version >= 6.1);
    const browserCurrent = (firefox || chrome || edge || opera || safari);

    // 2
    const validate = (((browser.name == "Firefox") && (browser.version >= 59)) || ((browser.name == "Chrome") && (browser.version >= 56)) || ((browserEdge[0] == "Edge") && (browserEdge[1] >= 16)) || ((browser.name == "Opera") && (browser.version >= 43)) || ((browser.name == "Safari") && (browser.version >= 6.1)));

    if(validate) {
    // if(browserCurrent) {
      if(!ie) {
        this.enableSticky = true;
      } else {
        this.enableSticky = false;
      }
    } else {
      this.enableSticky = false;
    }

  }

  get_browser() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    // return M.join(' ');
    return {
      name: M[0],
      version: M[1]
    };
  }


  keoxuong(e) {
    document.getElementById("keo").scrollTop = e.target.scrollTop;
  }

}
