import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { SocketIoModule } from 'ngx-socket-io';
import { config } from './web-socket.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
	SocketIoModule.forRoot(config)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
	YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
