import { Time } from '@angular/common';
import { taxi } from './taxi';

export class BookingForm {
  constructor(
    public name: string,
    public tripType: string,
    public emailAddress: string,
    public mobileNumber: string,
    public pickupLocation: string,
    public dropLocation: string,
    public pickUpDate: any,
    public pickUpTime: any,
    public vechileType: string,
    public cars?:taxi,
  ) {}
}
