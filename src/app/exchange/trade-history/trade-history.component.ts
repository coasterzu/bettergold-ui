import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket/web-socket-service.service'
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  public serverResponse : any;
  public tradeData = [];
  objectKeys = Object.keys;
   
  constructor(private _stompService: WebSocketService) {
     
  }

  public ngOnInit(): void {
      this._stompService.getObservable().subscribe(payload => {
      this.serverResponse = payload;
      
      this.process(); 
    });
  }

  private process(): void{
    
    if(JSON.parse(this.serverResponse.body).event === "tradeUpdate"){
      
      if(this.tradeData.length<10){
        console.log("trade data in history: less than 10: tradedata lenght: "+this.tradeData.length);
         this.tradeData.push(JSON.parse(this.serverResponse.body));
      }
      else{
        console.log("trade data in history: greater than 10:: tradedata lenght: "+this.tradeData.length);
        this.tradeData.shift();
        this.tradeData.push(JSON.parse(this.serverResponse.body));
    }
          // console.log(JSON.parse(this.serverResponse.body).bids[0].price);
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

 
