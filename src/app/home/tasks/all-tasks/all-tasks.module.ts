import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTasksPageRoutingModule } from './all-tasks-routing.module';

import { AllTasksPage } from './all-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTasksPageRoutingModule
  ],
  declarations: [AllTasksPage]
})
export class AllTasksPageModule {}
