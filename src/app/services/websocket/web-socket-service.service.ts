import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as SockJS from 'sockjs-client';
import { environment } from '../../../environments/environment'; 
import {Subject} from 'rxjs/Subject';
import * as Stomp from 'stompjs';
//declare let Stomp:any;
  
  @Injectable()
  export class WebSocketService {
  
      private _stompClient;
      private _stompSubject : Subject<any> = new Subject<any>();
      private _webSocketUrl;
      private _channel = "/realtime";
      constructor(){
        this.connect();
      }
      public connect() : void {
          let self = this;
          var headerName = "authorization";
          var token = localStorage.getItem("token");
          var userChannel = localStorage.getItem("userChannel");
          self._webSocketUrl = environment.apiUrlWS;
          //let webSocket = new WebSocket(this._webSocketUrl);//without sockjs
          let webSocket = new SockJS(this._webSocketUrl);//with sockjs
          self._stompClient = Stomp.over(webSocket);
         // console.log('/user/'+userChannel+'notify');
          
          self._stompClient.connect({}, function (frame) {
            self._stompClient.subscribe('/user/'+userChannel+'/notify', function (stompUserResponse) {
                   
                  console.log("got data from userChannel notify"+stompUserResponse);
                  self._stompSubject.next(stompUserResponse);
              });

              self._stompClient.subscribe('/generic/realtime', function (stompGenericResponse) {
                   
                console.log("got data from realtime channel : "+stompGenericResponse);
                self._stompSubject.next(stompGenericResponse);
            });
          });
      }
  
      public send(_payload: string) {
          this._stompClient.send("/app/hello", {}, JSON.stringify({'inputField': _payload}));
      }
  
      public getObservable() : Observable<any> {
          return this._stompSubject.asObservable();
      }
  }

