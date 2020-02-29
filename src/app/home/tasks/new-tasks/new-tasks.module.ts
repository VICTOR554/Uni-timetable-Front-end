import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTasksPageRoutingModule } from './new-tasks-routing.module';

import { NewTasksPage } from './new-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTasksPageRoutingModule
  ],
  declarations: [NewTasksPage]
})
export class NewTasksPageModule {}
