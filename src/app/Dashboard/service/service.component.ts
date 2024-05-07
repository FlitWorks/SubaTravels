import { Component } from '@angular/core';
import { TaxiService } from '../../Services/taxi.service';
import { ServingPlace } from '../../Model/serving-places';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor(private taxiservice:TaxiService){}

  taxiService:ServingPlace[]=this.taxiservice.servingPlaces;
}
