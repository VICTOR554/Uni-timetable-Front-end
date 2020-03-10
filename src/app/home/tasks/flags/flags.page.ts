import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Flag } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit {

  loadedflag: Flag[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.loadedflag = this.tasksService.flags;
  }

  onDelete(flagId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', flagId);
  }

  stop(event: Event) {
    console.log('stop');
    event.stopPropagation();
  }

}
