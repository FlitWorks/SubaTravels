import { Component, OnInit } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { taxi } from '../../Model/taxi';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css'
})
export class TarifComponent implements OnInit {
 constructor(private carservice:CarService,private activeRoute:ActivatedRoute){

 }
 cars:taxi[]=this.carservice.carCard;

 ngOnInit(){
   this.activeRoute.fragment.subscribe((data) => {
     this.jumpToSection(data);
     
   });
   
 }
 jumpToSection(value) {
   document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
   
 }
 booking(carType:taxi){
  this.carservice.carValue.next(carType)
 }
}
