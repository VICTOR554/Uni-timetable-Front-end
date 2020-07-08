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
          path: 'in-progress',
          loadChildren: () => import('./in-progress/in-progress.module').then( m => m.InProgressPageModule)
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
          redirectTo: '/home/tabs/tasks/in-progress',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/tasks/in-progress',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
