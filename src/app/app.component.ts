import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  message = {};
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	private websocket: WebSocketService
  ) {
    this.initializeApp();
	
	this.websocket.auth({ email: 'string' });
	
	this.websocket.on('message').subscribe((response: any) => {
		console.log(response);
		this.message = response.data;
    });
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	});
  }
}
