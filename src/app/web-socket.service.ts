import { Injectable } from '@angular/core';

import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(
    private socket: Socket
  ) { }
  
   /**
   * Signs the user to the websocket application 
   *
   * @param credentials - The user credentials
   * @returns data - The access and the refresh token to authenticate the user and the user
   */
  async auth(credentials: { email: string }): Promise<any> {
    return await this.socket.emit('auth', credentials);
  }
   
  on(method){
    let observable = new Observable(observer => {
      this.socket.on(method, (data) => {
        observer.next(data);
      });
    })
    return observable;
  }
  
}

export const config: SocketIoConfig = { url: 'http://localhost:8584', options: {}};