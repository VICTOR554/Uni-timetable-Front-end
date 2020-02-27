import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'new-notes',
    loadChildren: () => import('./new-notes/new-notes.module').then( m => m.NewNotesPageModule)
  },
  {
    path: 'edit-notes',
    loadChildren: () => import('./edit-notes/edit-notes.module').then( m => m.EditNotesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}
