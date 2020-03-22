import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTasksPageRoutingModule } from './all-tasks-routing.module';

import { AllTasksPage } from './all-tasks.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AllTasksPageRoutingModule,
    SharedModule
  ],
  declarations: [AllTasksPage],
})
export class AllTasksPageModule {}
