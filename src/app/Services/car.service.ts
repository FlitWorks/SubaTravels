import { Injectable } from '@angular/core';
import { taxi } from '../Model/taxi';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}
  carValue = new BehaviorSubject<taxi>(null);
  carCard: taxi[] = [
    {
      carImg: '../../../assets/Images/sedan.png',
      carType: 'Sedan',
      oneWayTrip: ' 13/Km',
      roundTrip: ' 12/Km',
      driverBeta: '400',
    },
    {
      carImg:
        '../../../assets/Images/Toyota-Etios-front-three-quarter-press-shot_1.png',
      carType: 'Etios',
      oneWayTrip: ' 13/Km',
      roundTrip: ' 12/Km',
      driverBeta: '400',
    },
    {
      carImg: '../../../assets/Images/SUV_1.png',
      carType: 'SUV',
      oneWayTrip: ' 18/Km',
      roundTrip: ' 17/Km',
      driverBeta: '400',
    },
    {
      carImg: '../../../assets/Images/avant-garde-bronze-1600x600_1.png',
      carType: 'Innova',
      oneWayTrip: ' 18/Km',
      roundTrip: ' 17/Km',
      driverBeta: '400',
    },
  ];
}
