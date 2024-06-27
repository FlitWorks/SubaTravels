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
      carImg: './assets/Images/sedan.png',
      carType: 'Sedan',
      oneWayTrip: ' 14/Km',
      roundTrip: ' 13/Km',
      driverBeta: '500',
    },
    {
      carImg:
        './assets/Images/Toyota-Etios-front-three-quarter-press-shot_1.png',
      carType: 'Etios',
      oneWayTrip: ' 15/Km',
      roundTrip: ' 14/Km',
      driverBeta: '600',
    },
    {
      carImg: './assets/Images/SUV_1.png',
      carType: 'SUV',
      oneWayTrip: ' 19/Km',
      roundTrip: ' 18/Km',
      driverBeta: '700',
    },
    {
      carImg: './assets/Images/avant-garde-bronze-1600x600_1.png',
      carType: 'Innova',
      oneWayTrip: ' 20/Km',
      roundTrip: ' 19/Km',
      driverBeta: '800',
    },
  ];
}
