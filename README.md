# M.E.A.N-Stack
    var text: string = `<p>adasdasdas&ndash;asdasdasdasdas #&nbsp;#</p>
    <p>ádasdasdas&ndash;asdasdasdasdas&nbsp;</p>
    <p>ádasdasdas&ndash;asdasdasdasdas&nbsp;&amp;</p>
    <p>ádasdasdas&ndash;asdasdasdasdas&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>ádasdasdas&ndash;asdasdasdasdas&amp;</p>`,
    // doc = new DOMParser().parseFromString(text, "text/html");
    doc = new DOMParser().parseFromString(text, "text/html");
    console.clear();
    this.mycontent = unescape(doc.querySelector("body").innerHTML).trim();
    console.log(unescape(doc.querySelector("body").innerText).toString().length);
 https://grokonez.com/frontend/angular/angular-4-uploadget-images-tofrom-spring-boot-server
 https://developers.google.com/web/updates/2016/10/capture-stream
