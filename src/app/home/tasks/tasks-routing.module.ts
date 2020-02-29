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
  {
    path: 'edit-tasks',
    loadChildren: () => import('./edit-tasks/edit-tasks.module').then( m => m.EditTasksPageModule)
  },
  {
    path: 'new-tasks',
    loadChildren: () => import('./new-tasks/new-tasks.module').then( m => m.NewTasksPageModule)
  },
  {
    path: 'overdue',
    loadChildren: () => import('./overdue/overdue.module').then(m => m.OverduePageModule)
  },
  {
    path: 'completed-tasks',
    loadChildren: () => import('./completed-tasks/completed-tasks.module').then( m => m.CompletedTasksPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
