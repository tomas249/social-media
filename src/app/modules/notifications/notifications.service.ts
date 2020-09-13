import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private api: ApiService,
    // private socket: Socket
  ) { }


  getNotifications(onlyUnread = true) {
    const queryParam = '?onlyUnread=' + onlyUnread;
    return this.api.get('/notifications' + queryParam);
  }

  markAsRead(notificationId) {
    return this.api.get('/notifications/read/' + notificationId);
  }

  // connect() {
  //   this.socket.emit('everybody', 'hellooo people')
  // }
  

  // sub() {
  //   return this.socket.fromEvent('everybody');
  // }

  // sendMessage(){
  //   console.log('myId', this.socket.ioSocket.id)
  //   this.socket.emit("message", this.socket.ioSocket.id);
  // }

  // getMessage() {
  //   return this.socket
  //     .fromEvent("message");
  // }

}
