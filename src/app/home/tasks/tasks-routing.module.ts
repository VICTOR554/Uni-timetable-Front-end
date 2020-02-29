import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage
  },
  {
    path: 'all-tasks',
    loadChildren: () => import('./all-tasks/all-tasks.module').then( m => m.AllTasksPageModule)
  },
  {
    path: 'flags',
    loadChildren: () => import('./flags/flags.module').then( m => m.FlagsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
