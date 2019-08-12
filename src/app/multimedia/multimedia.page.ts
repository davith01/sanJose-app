import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  videoPlayList = [];

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.videoPlayList = [{
      'url': this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/v=O776f8snC00')
    },{
      'url': this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/v=TE1K5gyprBo')
    }];
  }
}
