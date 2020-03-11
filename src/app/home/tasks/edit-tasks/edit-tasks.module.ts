import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTasksPageRoutingModule } from './edit-tasks-routing.module';

import { EditTasksPage } from './edit-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditTasksPageRoutingModule
  ],
  declarations: [EditTasksPage]
})
export class EditTasksPageModule {}
