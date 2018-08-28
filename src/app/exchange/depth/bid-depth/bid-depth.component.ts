import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../../services/websocket/web-socket-service.service'
import { PipeTransform, Pipe } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-bid-depth',
  templateUrl: './bid-depth.component.html',
  styleUrls: ['./bid-depth.component.css'],
})
export class BidDepthComponent implements OnInit {
    public serverResponse : any;
    public depthData : any;
    objectKeys = Object.keys;
     
    constructor(private _stompService: WebSocketService) {
      this.depthData = {
        "event" : "depthUpdate",
        "bids" : [ {
          "price" : 150,
          "quantity" : 5
        } ],
        "offers" : [ {
          "price" : 160,
          "quantity" : 1
        } ],
        "symbol" : "BTCINR"
      };
    }
  
    public ngOnInit(): void {
        this._stompService.getObservable().subscribe(payload => {
        this.serverResponse = payload;
        this.process(); 
      });
    }
  
    private process(): void{
      
      if(JSON.parse(this.serverResponse.body).event === "depthUpdate"){
        this.depthData = JSON.parse(this.serverResponse.body);
             console.log(JSON.parse(this.serverResponse.body).bids[0].price);
    }
    }
   
  }

  // @Pipe({name: 'keys'})
  // export class KeysPipe implements PipeTransform {
  //   transform(value, args:string[]) : any {
  //     let keys = [];
  //     for (let key in value) {
  //       keys.push(key);
  //     }
  //     return keys;
  //   }
  // }