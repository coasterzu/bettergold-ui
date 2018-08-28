import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exchange-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css']
})
export class BuyOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onBuy(): void {
    console.log("buy working");
  }
}
