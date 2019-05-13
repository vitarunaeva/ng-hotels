import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: any, args?: any): any {
    phone = phone.toString();
    const result = phone.substring(0,2) + '-' + phone.substring(2,4) + '-' + phone.substring(4,6);
    return result;
  }

}
