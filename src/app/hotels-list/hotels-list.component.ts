import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotels } from './hotels.interface';
import { HOTELS$, FILTERS$ } from './hotels';

@Component({
  selector: 'hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  public dataHotels: IHotels[];
  public selectedHotel: IHotels;
  public filter: string;
  public filterTypes: string[];
  @Output() changeHotel = new EventEmitter<IHotels>();

  constructor() { }

  public onCardClicked(data: IHotels){
    this.selectedHotel = data;
    this.emitData();
  }

  ngOnInit() {
    HOTELS$.subscribe((data) => {
      this.dataHotels = data;
      this.selectedHotel = data[0];
      this.emitData();
    })

    FILTERS$.subscribe((data) => {
      this.filterTypes = data;
      this.filter = this.filterTypes[0];
    })
  }

  private emitData(){
    this.changeHotel.emit(this.selectedHotel);
  }

  public applyHotelFilter(event: MouseEvent, type: string ){
    event.preventDefault();
    this.filter = type;
  }
}
