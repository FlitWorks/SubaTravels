import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';
import { BookingComponent } from './Dashboard/booking/booking.component';
import { ContactUsComponent } from './Dashboard/contact-us/contact-us.component';
import { TarifComponent } from './Dashboard/tarif/tarif.component';
import { ServiceComponent } from './Dashboard/service/service.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tarif', component: TarifComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
