import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurlawyersPage } from './ourlawyers.page';

const routes: Routes = [
  {
    path: '',
    component: OurlawyersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurlawyersPageRoutingModule {}
