import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { BookingComponent } from './Dashboard/booking/booking.component';
import { TarifComponent } from './Dashboard/tarif/tarif.component';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';
import { ServiceComponent } from './Dashboard/service/service.component';
import { ContactUsComponent } from './Dashboard/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './shared/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookingComponent,
    TarifComponent,
    AboutUsComponent,
    ServiceComponent,
    ContactUsComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
 
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
