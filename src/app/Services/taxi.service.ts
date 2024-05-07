import { Injectable } from '@angular/core';
import { ServingPlace } from '../Model/serving-places';

@Injectable({
  providedIn: 'root',
})
export class TaxiService {
  constructor() {}

  servingPlaces: ServingPlace[] = [
    {
      place: 'Chennai One Way Taxi',
      placesImg: '../../../assets/Images/chennai.png',
      destinationPlaces1: 'Chennai to Tirunelveli One Way Taxi',
      destinationPlaces2: 'Chennai to Kanyakumari One Way Taxi',
      destinationPlaces3: 'Chennai to Salem One Way Taxi',
      destinationPlaces4: 'Chennai to Pondicherry One Way Taxi',
      destinationPlaces5: 'Chennai to Coimbatore One Way Taxi',
      destinationPlaces6: 'Chennai to Trichy One Way Taxi',
    },
    {
      place: 'Madurai One Way Taxi',
      placesImg: '../../../assets/Images/madurai.png',
      destinationPlaces1: 'Madurai to Chennai One Way Taxi',
      destinationPlaces2: 'Madurai to Kanyakumari One Way Taxi',
      destinationPlaces3: 'Madurai to Salem One Way Taxi Taxi',
      destinationPlaces4: 'Madurai to Pondicherry One Way Taxi',
      destinationPlaces5: 'Madurai to Coimbatore One Way Taxi',
      destinationPlaces6: 'Madurai to Trichy One Way Taxi',
    },
    {
      place: 'Kanyakumari One Way Taxi',
      placesImg: '../../../assets/Images/kanyakumari.png',
      destinationPlaces1: 'Kanyakumari to Chennai One Way Taxi',
      destinationPlaces2: 'Kanyakumari to Madurai One Way Taxi',
      destinationPlaces3: 'Kanyakumari to Salem One Way Taxi',
      destinationPlaces4: 'Kanyakumari to Pondicherry One Way Taxi',
      destinationPlaces5: 'Kanyakumari to Coimbatore One Way Taxi ',
      destinationPlaces6: 'Kanyakumari to Trichy One Way Tax',
    },
    {
      place: 'Bangalore One Way Taxi',
      placesImg: '../../../assets/Images/bangalore.png',
      destinationPlaces1: 'Bangalore to Tirunelveli One Way Taxi',
      destinationPlaces2: 'Bangalore to Kanyakumari One Way Taxi',
      destinationPlaces3: 'Bangalore to Salem One Way Taxi',
      destinationPlaces4: 'Bangalore to Pondicherry One Way Taxi',
      destinationPlaces5: 'Bangalore to Chennai One Way Taxi',
      destinationPlaces6: 'Bangalore to Trichy One Way Taxi',
    },
    {
      place: 'Tirunelveli One Way Taxi',
      placesImg: '../../../assets/Images/tirunelveli.png',
      destinationPlaces1: 'Tirunelveli to Madurai One Way Taxi',
      destinationPlaces2: 'Tirunelveli to Trichy One Way Taxi',
      destinationPlaces3: 'Tirunelveli to Salem One Way Taxi',
      destinationPlaces4: 'Tirunelveli to Pondicherry One Way Taxi',
      destinationPlaces5: 'Tirunelveli to Chennai One Way Taxi',
      destinationPlaces6: 'Tirunelveli to Trichy One Way Taxi',
    },
    {
      place: 'Pondicherry One Way Taxi',
      placesImg: '../../../assets/Images/pondicherry.png',
      destinationPlaces1: 'Pondicherry to Chennai One Way Taxi',
      destinationPlaces2: 'Pondicherry to Madurai One Way Taxi',
      destinationPlaces3: 'Pondicherry to Kanyakumari One Way Taxi',
      destinationPlaces4: 'Pondicherry to Salem One Way Taxi',
      destinationPlaces5: 'Pondicherry to Tirunelveli One Way Taxi',
      destinationPlaces6: 'Pondicherry to Trichy One Way Taxi',
    },
    {
      place: 'Salem One Way Taxi',
      placesImg: '../../../assets/Images/salem.png',
      destinationPlaces1: 'Salem to Madurai One Way Taxi',
      destinationPlaces2: 'Salem to Chenai One Way Taxi',
      destinationPlaces3: 'Salem to Kanyakumari One Way Taxi',
      destinationPlaces4: 'Salem to Trichy One Way Taxi',
      destinationPlaces5: 'Salem to Pondicherry One Way Taxi',
      destinationPlaces6: 'Salem to Coimbatore One Way Taxi',
    },
    {
      place: 'Coimbatore One Way Taxi',
      placesImg: '../../../assets/Images/coimbatore.png',
      destinationPlaces1: 'Coimbatore to Madurai One Way Taxi',
      destinationPlaces2: 'Coimbatore to Trichy One Way Taxi',
      destinationPlaces3: 'Coimbatore to Salem One Way Taxi',
      destinationPlaces4: 'Coimbatore to Pondicherry One Way Taxi ',
      destinationPlaces5: 'Coimbatore to Chennai One Way Taxi',
      destinationPlaces6: 'Coimbatore to Kanyakumari One Way Taxi',
    },
    {
      place: 'Trichy One Way Taxi',
      placesImg: '../../../assets/Images/trichy.png',
      destinationPlaces1: 'Trichy to Chennai One Way Taxi',
      destinationPlaces2: 'Trichy to Madurai One Way Taxi',
      destinationPlaces3: 'Trichy to Kanyakumari One Way Taxi',
      destinationPlaces4: 'Trichy to Salem One Way Taxi',
      destinationPlaces5: 'Trichy to Tirunelveli One Way Taxi',
      destinationPlaces6: 'Trichy to Pondicherry One Way Taxi',
    },
  ];
}
