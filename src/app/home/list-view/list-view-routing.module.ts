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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListViewPageRoutingModule {}
