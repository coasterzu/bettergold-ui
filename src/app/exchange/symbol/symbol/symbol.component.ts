import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment'; 
@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {
   //private BASE_URL: string = 'https://www.bettergold.io'; 
  private BASE_URL: string = environment.apiUrl;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
   symbols:object;
   selectedSymbol:string;

  constructor(private http: Http) {
    
  }
   
  ngOnInit() {
    let url: string = `${this.BASE_URL}/symbols`;
    this.http.get(url).subscribe(sym => {
      console.log("sym--: "+sym.json()); 
      this.symbols = sym.json();
      this.selectedSymbol = this.symbols[0].symbol;
      
    },
    err => {
      console.log("Error occured.")
    });
    
  }

  onSymbolSelected(val:any){
    alert("selected:"+val);

  }

}


export class Symbol {
  
  id: string;
  symbol: string;
  constructor(id:string, symbol:string) { 
    this.id = id;
    this.symbol = symbol;
  }

  ngOnInit() {
  }

}