import { Component } from '@angular/core';
import { IHotels } from './hotels-list/hotels.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotelWidget: IHotels;

  public onCardClick(hotel: IHotels){
    this.hotelWidget = hotel;
  }
}
