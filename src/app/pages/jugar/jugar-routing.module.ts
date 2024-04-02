import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugarpage } from './jugar.page';

const routes: Routes = [
  {
    path: '',
    component: Jugarpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugarPageRoutingModule {}
