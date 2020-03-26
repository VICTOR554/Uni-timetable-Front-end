import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipePipe } from './moment-pipe/moment-pipe.pipe';




@NgModule({
  declarations: [MomentPipePipe],
  imports: [CommonModule],
  exports: [MomentPipePipe],
})
export class SharedModule { }
