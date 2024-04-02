import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { jugarpage } from './jugar.page';

const routes: Routes = [
  {
    path: '',
    component: jugarpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugarPageRoutingModule {}
