# M.E.A.N-Stack
    var nam = this.data.slice();
    this.mang = this.data;   
    console.log(this.mang);
    
    // setTimeout(() => {
      for(let i = 0; i < nam.length; i++) {
        for(let item in nam[i]) {
          if((nam[i][item] == 0) || (nam[i][item] == 1)) {
            delete nam[i][item];
          }
        }
      }
      console.log(nam);
    // }, 1000);
https://www.ag-grid.com/javascript-grid-cell-styles/
