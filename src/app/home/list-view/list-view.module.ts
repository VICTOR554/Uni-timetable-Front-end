import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListViewPageRoutingModule } from './list-view-routing.module';

import { ListViewPage } from './list-view.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListViewPageRoutingModule,
    SharedModule
  ],
  declarations: [ListViewPage]
})
export class ListViewPageModule {}
