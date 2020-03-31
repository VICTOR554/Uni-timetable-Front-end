import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipePipe } from './moment-pipe/moment-pipe.pipe';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [MomentPipePipe],
  imports: [CommonModule, IonicModule],
  exports: [MomentPipePipe],
  entryComponents: []
})
export class SharedModule { }
