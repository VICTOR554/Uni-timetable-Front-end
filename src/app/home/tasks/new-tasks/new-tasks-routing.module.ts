import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTasksPage } from './new-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: NewTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTasksPageRoutingModule {}
