import { DatePipe, Time } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingForm } from '../../Model/booking-form';
import { taxi } from '../../Model/taxi';
import { CarService } from '../../Services/car.service';
import { GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  constructor(private car: CarService, private datePipe: DatePipe) {}
  @ViewChild('bookingForm') form: NgForm;
  @ViewChild('pickupLocation') pickuplocation: ElementRef;
  // @ViewChild('pickupTime')pickupTime:ElementRef;
  // @ViewChild('pickUpDate') pickupDate:ElementRef;
  isloading: boolean = false;
  showBookingInfo: boolean = false;
  autoComplete: google.maps.places.Autocomplete | undefined;
  bookingForm: BookingForm;
  name: string;
  isSubmitted: Boolean = false;
  emailAddress: string = '';
  mobileNumber: string = '';
  pickupLocation: string = '';
  dropLocation: string = '';
  pickUpDate: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  pickUpTime: any = this.datePipe.transform(new Date(), 'HH:mm');
  cars: taxi;
  google: any;
  vechileType: string = 'Sedan';
  tripType: string = 'OneWaytrip';
  trip = [
    { id: 'check-oneWay', value: 'OneWaytrip', displayValue: 'One way Trip' },
    { id: 'check-twoWay', value: 'Twowaytrip', displayValue: 'Two way Trip' },
  ];
  ngOnInit(): void {
    // this.initAutocomplete();
  }

  // initAutocomplete() {
  //   const input = document.getElementById(
  //     'autocomplete-input'
  //   ) as HTMLInputElement;
  //   const autocomplete = new google.maps.places.Autocomplete(input);
  //   autocomplete.addListener('place_changed', () => {
  //     const place = autocomplete.getPlace();
  //     console.log(place);
  //     // Handle place selection
  //   });
  // }
  ngDoCheck() {
    this.car.carValue.subscribe((value) => {
      this.cars = value;
    });
    this.setValues();
  }
  onSubmit() {
    console.log(this.form);
    this.showBookingInfo = true;
    this.isSubmitted = true;
    this.name = this.form.value.Name;
    this.emailAddress = this.form.value.email;
    this.mobileNumber = this.form.value.PhoneNumber;
    this.pickupLocation = this.form.value.pickupLocation;
    this.dropLocation = this.form.value.dropLocation;
    this.pickUpDate = this.form.value.pickUpDate;
    this.vechileType = this.form.value.vechileType;
    this.pickUpTime = this.form.value.pickupTime;
    this.tripType = this.form.value.tripType;
    //  this.car =new taxi (this.car.carCard.filter(data=>data.carType.toLowerCase().includes(this.vechileType.toLowerCase())));
    this.cars = this.car.carCard.find(
      (data) => data.carType == this.vechileType
    );
    this.bookingForm = new BookingForm(
      this.name,
      this.tripType,
      this.emailAddress,
      this.mobileNumber,
      this.pickupLocation,
      this.dropLocation,
      this.pickUpDate,
      this.pickUpTime,
      this.vechileType,
      this.cars
    );
    console.log(this.bookingForm);
    this.isloading = true;
    setTimeout(() => {
      this.isloading = false;
    }, 2000);
  }

  ngAfterViewInit() {
    this.autoComplete = new google.maps.places.Autocomplete(
      this.pickuplocation.nativeElement
    );
    this.autoComplete.addListener('place_changed', () => {
      const place = this.autoComplete.getPlace();
      console.log(place);
    });
  }
  setValues() {
    this.vechileType = this.cars ? this.cars.carType : this.vechileType;
  }
  ngOnDestroy() {
    this.car.carValue.unsubscribe();
  }
  OnConfirming() {
   

    alert('Thanks for booking , you will recieve call. Plese wait for 5 mins');
    this.showBookingInfo = false;
  }
}
