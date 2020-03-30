import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewPage } from './list-view.page';

const routes: Routes = [
  {
    path: '',
    component: ListViewPage
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListViewPageRoutingModule {}
