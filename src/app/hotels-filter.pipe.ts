import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  transform(hotels: any, type?: any): any {
    if(type === 'All'){
      return hotels;
    } else{
      return hotels.filter(hotel => hotel.type === type);
    }
  }

}
