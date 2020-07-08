import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressPageRoutingModule } from './in-progress-routing.module';

import { InProgressPage } from './in-progress.page';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    InProgressPageRoutingModule,
    SharedModule
  ],
  declarations: [InProgressPage]
})
export class InProgressPageModule {}
