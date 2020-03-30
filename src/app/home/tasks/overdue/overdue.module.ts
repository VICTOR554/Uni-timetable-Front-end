import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverduePageRoutingModule } from './overdue-routing.module';

import { OverduePage } from './overdue.page';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverduePageRoutingModule,
    SharedModule
  ],
  declarations: [OverduePage]
})
export class OverduePageModule {}
