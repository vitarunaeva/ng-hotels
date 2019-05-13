import { Component, OnInit, Input } from '@angular/core';
import { IHotels } from "../hotels.interface";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotels;

  constructor() { }

  ngOnInit() {
  }

}
