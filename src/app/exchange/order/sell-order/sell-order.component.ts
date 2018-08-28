import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exchange-sell-order',
  templateUrl: './sell-order.component.html',
  styleUrls: ['./sell-order.component.css']
})
export class SellOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSell(): void {
    console.log("sell working");
  }
}
