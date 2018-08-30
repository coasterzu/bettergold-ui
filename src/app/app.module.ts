import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';
import { FundsComponent } from './funds/funds.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
//import { LogoutAuthGuardService } from './services/logout-auth-guard/logout-auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { BuyOrderComponent } from './exchange/order/buy-order/buy-order.component';
import { SellOrderComponent } from './exchange/order/sell-order/sell-order.component';
import { BidDepthComponent } from './exchange/depth/bid-depth/bid-depth.component';
import { OfferDepthComponent } from './exchange/depth/offer-depth/offer-depth.component';
import { WebSocketService } from './services/websocket/web-socket-service.service';
import { MatchPriceComponent } from './exchange/depth/match-price/match-price.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor/jwt-interceptor.service';
import { SymbolComponent } from './exchange/symbol/symbol/symbol.component';
import { TradeHistoryComponent } from './exchange/trade-history/trade-history.component';
import { MiniMarketComponent } from './exchange/mini-market/mini-market.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'exchange', component: ExchangeComponent, canActivate: [AuthGuardService]  },
  { path: 'funds', component: FundsComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService]  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ExchangeComponent,
    FundsComponent,
    OrdersComponent,
    ProfileComponent,
    LogoutComponent,
    BuyOrderComponent,
    SellOrderComponent,
    BidDepthComponent,
    OfferDepthComponent,
    MatchPriceComponent,
    SymbolComponent,
    TradeHistoryComponent,
    MiniMarketComponent
  
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService,AuthGuardService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  },
  WebSocketService


],
  bootstrap: [AppComponent]
})
export class AppModule { }
