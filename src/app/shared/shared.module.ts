import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipePipe } from './moment-pipe/moment-pipe.pipe';
import { IonicModule } from '@ionic/angular';
import { StaticmapComponent } from './staticmap/staticmap.component';




@NgModule({
  declarations: [MomentPipePipe, StaticmapComponent],
  imports: [CommonModule, IonicModule],
  exports: [MomentPipePipe, StaticmapComponent],
  entryComponents: []
})
export class SharedModule { }
