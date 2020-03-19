import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage,
    children:
      [
        {
          path: 'all-tasks',
          loadChildren: () => import('./all-tasks/all-tasks.module').then(m => m.AllTasksPageModule)
        },
        {
          path: 'flags',
          loadChildren: () => import('./flags/flags.module').then(m => m.FlagsPageModule)
        },
        {
          path: 'overdue',
          loadChildren: () => import('./overdue/overdue.module').then(m => m.OverduePageModule)
        },
        {
          path: 'completed-tasks',
          loadChildren: () => import('./completed-tasks/completed-tasks.module').then(m => m.CompletedTasksPageModule)
        },
        {
          path: '',
          redirectTo: '/home/tabs/tasks/all-tasks',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/tasks/all-tasks',
    pathMatch: 'full'
  },
  {
    path: 'all-tasks',
    loadChildren: () => import('./all-tasks/all-tasks.module').then( m => m.AllTasksPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
