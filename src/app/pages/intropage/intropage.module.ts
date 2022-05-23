import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntropagePageRoutingModule } from './intropage-routing.module';

import { IntropagePage } from './intropage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    IntropagePageRoutingModule
  ],
  declarations: [IntropagePage]
})
export class IntropagePageModule {}
