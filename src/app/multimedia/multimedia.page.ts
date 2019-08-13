import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  videoPlayList = [];

  constructor(
    private domSanitizer: DomSanitizer,
	private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
    this.videoPlayList = [{
	  'id': 'O776f8snC00',	
      'url': this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OgeLyH_1JJE')
    },{
	  'id': 'TE1K5gyprBo',
      'url': this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TE1K5gyprBo')
    }];
  }
  
  onShowVideo(videoId){
	  this.youtube.openVideo(videoId);
  }
}
