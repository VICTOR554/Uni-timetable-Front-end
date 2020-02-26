import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewPage } from './list-view.page';

const routes: Routes = [
  {
    path: '',
    component: ListViewPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
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
