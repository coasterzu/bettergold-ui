import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../../services/websocket/web-socket-service.service'
import { PipeTransform, Pipe } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-match-price',
  templateUrl: './match-price.component.html',
  styleUrls: ['./match-price.component.css'],
  
})
export class MatchPriceComponent implements OnInit {
    
    public serverResponse : any;
    public tradeData : any;
    objectKeys = Object.keys;
     
    constructor(private _stompService: WebSocketService) {
      this.tradeData = {
        "event" : "tradeUpdate",
        "symbol" : "BTCINR",
        "price" : 150,
        "quantity" : 1
      };
    }
  
    public ngOnInit(): void {
        this._stompService.getObservable().subscribe(payload => {
        this.serverResponse = payload;
        this.process(); 
      });
    }
  
    private process(): void{
      console.log("trade data received");
      if(JSON.parse(this.serverResponse.body).event === "tradeUpdate"){
        this.tradeData = JSON.parse(this.serverResponse.body);
                      console.log("trade data received");
             console.log(JSON.parse(this.serverResponse.body).price);
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