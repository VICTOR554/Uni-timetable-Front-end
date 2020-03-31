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
            children:
              [
                {
                  path: '',
                  loadChildren: () => import('./list-view/list-view.module').then(m => m.ListViewPageModule)
                },
                {
                  path: 'location/:activitylocation',
                  loadChildren: () => import('./list-view/location/location.module').then(m => m.LocationPageModule)
                },
              ]
          },
          {
            path: 'notes',
            children:
              [
                {
                  path: '',
                  loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
                },
                {
                  path: 'new-notes',
                  loadChildren: () => import('./notes/new-notes/new-notes.module').then(m => m.NewNotesPageModule)
                },
                {
                  // add note id so dat when you click the notes the will have the id as a url
                  path: 'edit/:noteId',
                  loadChildren: () => import('./notes/edit-notes/edit-notes.module').then(m => m.EditNotesPageModule)
                },
              ]
          },
          {
            path: 'tasks',
            children:
              [
                {
                  path: '',
                  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
                },
                {
                  path: 'new-tasks',
                  loadChildren: () => import('./tasks/new-tasks/new-tasks.module').then( m => m.NewTasksPageModule)
                },
                {
                  path: 'edit/:taskId',
                  loadChildren: () => import('./tasks/edit-tasks/edit-tasks.module').then(m => m.EditTasksPageModule)
                },
              ]
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
