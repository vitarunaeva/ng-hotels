import { Component, OnInit, Input } from '@angular/core';
import { IHotels } from '../hotels-list/hotels.interface';

@Component({
  selector: 'widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {
  @Input() hotel: IHotels;

  constructor() { }

  ngOnInit() {
  }

}
