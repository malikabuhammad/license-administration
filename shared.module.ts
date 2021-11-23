import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import { ToastrModule, ToastNoAnimationModule} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { NgxPrintModule } from 'ngx-print';
import { AboutSliderComponent } from './about-slider/about-slider.component';
import { TestimonialComponent } from './testimonial/testimonial.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    UserNavbarComponent,
    AboutSliderComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ToastrModule,
    ToastNoAnimationModule,
    NgxPrintModule
  ],
  exports:[
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    ToastNoAnimationModule,
    MatRadioModule,
    MatSelectModule,
    UserNavbarComponent,
    NgxPrintModule,
    AboutSliderComponent,
    TestimonialComponent
    
  ]
})
export class SharedModule { }
