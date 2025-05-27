import { DatePipe, Time } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingForm } from '../../Model/booking-form';
import { taxi } from '../../Model/taxi';
import { CarService } from '../../Services/car.service';
import { GoogleMap } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  constructor(
    private car: CarService,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {}
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
  dropId: any;
  pickupId: any;
  pickUpDate: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  pickUpTime: any = this.datePipe.transform(new Date(), 'HH:mm');
  cars: taxi;
  google: any;
  vechileType: string = 'Sedan';
  tripType: string = 'OneWaytrip';
  distance: any;
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
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the Earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c; // Distance in km
      return distance;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    let pickLanLat = [];
    let dropLanLat = [];
    var apiKey: string =
      'pk.eyJ1IjoibXV0aHVyYW0wNSIsImEiOiJjbHd4cHRuM2QxMmExMnJxejBtbGk1M2J0In0.Vc9lVGDg_i3Nb1G-ISGu-w';
    this.http
      .get(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${this.pickupId}?session_token=[GENERATED-UUID]&access_token=${apiKey}`
      )
      .subscribe(
        (response: any) => {
          pickLanLat = response.features[0].geometry.coordinates;
          console.log(response.features[0].geometry.coordinates);
          this.http
            .get(
              `https://api.mapbox.com/search/searchbox/v1/retrieve/${this.dropId}?session_token=[GENERATED-UUID]&access_token=${apiKey}`
            )
            .subscribe(
              (response: any) => {
                dropLanLat = response.features[0].geometry.coordinates;
                console.log(response.features[0].geometry.coordinates);
                this.distance = getDistanceFromLatLonInKm(
                  pickLanLat[1],
                  pickLanLat[0],
                  dropLanLat[1],
                  dropLanLat[0]
                );
              },
              (error) => {
                // Handle errors here
                console.error(error);
              }
            );
        },
        (error) => {
          // Handle errors here
          console.error(error);
        }
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
    location.href = `https://api.whatsapp.com/send?phone=+919940084409&text= Thanks for Choosing Suba travels
    Your Booking Details:
        ${encodeURIComponent(`name: ${this.name} 
        Trip Type:${this.tripType}
        Email: ${this.emailAddress},
        Mobile No: ${this.mobileNumber},
        PickUp Location: ${this.pickupLocation},
        Drop Location: ${this.dropLocation},
        PickUp Date: ${this.pickUpDate},
        PickUp Time: ${this.pickUpTime},
        Vehicle: ${this.vechileType}

        Toll, parking, permit extra

        For any questions pleace contact 9003355976

        https://subatravels.com/
        `)}`;
    this.showBookingInfo = false;
  }
  pickupSuggestions: any[] = [];
  dropSuggestions: any[] = [];
  selectSuggestion(suggestion: any, type: string) {
    if (type === 'pickup') {
      this.pickupLocation = suggestion.name;
      this.pickupId = suggestion.mapbox_id;
      this.pickupSuggestions = [];
    } else if (type === 'drop') {
      this.dropLocation = suggestion.name;
      this.dropId = suggestion.mapbox_id;
      this.dropSuggestions = [];
    }
  }
  fetchLocations(text: string, type: string) {
    var apiKey: string =
      'pk.eyJ1IjoibXV0aHVyYW0wNSIsImEiOiJjbHd4cHRuM2QxMmExMnJxejBtbGk1M2J0In0.Vc9lVGDg_i3Nb1G-ISGu-w';
    this.http
      .get(
        `https://api.mapbox.com/search/searchbox/v1/suggest?q=${text}&access_token=${apiKey}&session_token=user_id`
      )
      .subscribe(
        (response: any) => {
          if (type === 'pickup') {
            this.pickupSuggestions = response.suggestions;
          } else if (type === 'drop') {
            this.dropSuggestions = response.suggestions;
          }
        },
        (error) => {
          // Handle errors here
          console.error(error);
        }
      );
  }
}
