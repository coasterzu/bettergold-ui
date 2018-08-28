import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket/web-socket-service.service'
import { PipeTransform, Pipe } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-mini-market',
  templateUrl: './mini-market.component.html',
  styleUrls: ['./mini-market.component.css']
})
export class MiniMarketComponent implements OnInit {
     
     
  public serverResponse : any;
  public miniMarketTradeData: any;
  objectKeys = Object.keys;
  public trades:Object;
  constructor(private _stompService: WebSocketService) {
     
  }

  public ngOnInit(): void {
      this._stompService.getObservable().subscribe(payload => {
      this.serverResponse = payload;
      
      this.process(); 
    });
  }

  private process(): void{
    console.log("received data in miniMarket");
    if(JSON.parse(this.serverResponse.body).event === "marketUpdate"){
        
          this.miniMarketTradeData = JSON.parse(this.serverResponse.body);
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




 