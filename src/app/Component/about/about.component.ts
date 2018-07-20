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
