# M.E.A.N-Stack
  mycontent: string;
  mycontent1: string;
  mycontent2: string;
  flag: boolean = false;
  
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.flag) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    let maxHeight = 0;
    let mang = [];
    let mang2 = [];
    setTimeout(() => {
      let legth = e.path[2].childElementCount;
      for(let i = 0; i < legth; i++) {
        maxHeight += e.path[2].childNodes[i].clientHeight;
        if((maxHeight / 20) > 7) {
          mang.push(e.path[2].childNodes[i].innerHTML);
          this.mycontent1 = mang.join("<br />").toString().substr(0, (37 * 14));
          this.flag = true;
          break;
        } else {
          let data = e.path[2].childNodes[i].innerHTML.toString();
          mang.push(data);
        }
      }
    }, 100);
  }

  onChange($event: any, number: Number): void {
    if(number == 1) {
    this.mycontent = this.mycontent1;
    } else if(number == 2) {
    this.mycontent2 = this.mycontent1;
    }
  }
