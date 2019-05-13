import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { HotelCardComponent } from './hotels-list/hotel-card/hotel-card.component';
import { HotelsFilterPipe } from './hotels-filter.pipe';
import { PhoneNumberPipe } from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    WidgetsListComponent,
    HotelCardComponent,
    HotelsFilterPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
