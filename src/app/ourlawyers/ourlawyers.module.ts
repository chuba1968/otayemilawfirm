import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurlawyersPageRoutingModule } from './ourlawyers-routing.module';

import { OurlawyersPage } from './ourlawyers.page';
import { SwiperModule } from 'swiper/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    LazyLoadImageModule,
    OurlawyersPageRoutingModule
  ],
  declarations: [OurlawyersPage]
})
export class OurlawyersPageModule {}
