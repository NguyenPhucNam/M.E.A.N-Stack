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
  mang1000: any[];

  constructor(private columnService: columnService) {}

  ngOnInit(): void {

    this.matchBrowser();

    this.getArr();
    
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

  getArr() {
    this.mang1000 = [];
    for(let i = 0; i < 90000; i++) {
      this.mang1000.push(i);
    }
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

  fnExcelReport()
  {
    var tab_text = '<table border="1px" style="font-size:20px" ">';
    var j = 0;
    var tab = document.getElementById('DataTableId').getElementsByTagName('tr'); // id of table
    var lines = tab.length;

    // the first headline of the table
    if (lines > 0) {
        tab_text = tab_text + '<tr bgcolor="#DFDFDF">' + tab[0].innerHTML + '</tr>';
    }

    // table data lines, loop starting from 1
    for (j = 1 ; j < lines; j++) {     
        tab_text = tab_text + "<tr>" + tab[j].innerHTML + "</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");             //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi,"");                 // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, "");    // reomves input params
    // console.log(tab_text); // aktivate so see the result (press F12 in browser)

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

     // if Internet Explorer
    // if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    //   frame.document.open("txt/html","replace");
    //   frame.document.write(tab_text);
    //   frame.document.close();
    //   frame.focus(); 
    //     var sa = frame.document.execCommand("SaveAs", true, "DataTableExport.xls");
    // }  
    // else // other browser not tested on IE 11
        var sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  


    return (sa);
  }

}
