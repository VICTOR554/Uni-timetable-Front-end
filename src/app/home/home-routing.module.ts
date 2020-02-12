import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes =
  [
    {
      path: 'tabs',
      component: HomePage,
      children:
        [
          {
            path: 'list-view',
            loadChildren: () => import('./list-view/list-view.module').then(m => m.ListViewPageModule)
          },
          {
            path: 'notes',
            loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
          },
          {
            path: 'tasks',
            loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
          },
          {
            path: 'more',
            loadChildren: () => import('./more/more.module').then(m => m.MorePageModule)
          },
          // makes the path return to list view when path is null
          {
            path: '',
            redirectTo: '/home/tabs/list-view',
            pathMatch: 'full'
          }
        ]
    },
    // makes the path return to list view when path is null
    {
      path: '',
      redirectTo: '/home/tabs/list-view',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
