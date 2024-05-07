import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private activeRoute:ActivatedRoute){}
  ngOnInit(){
    this.activeRoute.fragment.subscribe((data) => {
      this.jumpToSection(data);
    });
    
  }
  jumpToSection(value) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
  }
}
