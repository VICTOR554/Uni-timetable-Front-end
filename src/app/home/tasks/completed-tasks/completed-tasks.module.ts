import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedTasksPageRoutingModule } from './completed-tasks-routing.module';

import { CompletedTasksPage } from './completed-tasks.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedTasksPageRoutingModule,
    SharedModule
  ],
  declarations: [CompletedTasksPage]
})
export class CompletedTasksPageModule { }
