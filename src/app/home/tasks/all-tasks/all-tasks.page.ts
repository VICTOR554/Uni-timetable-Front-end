import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Alltask } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.page.html',
  styleUrls: ['./all-tasks.page.scss'],
})
export class AllTasksPage implements OnInit {
  loadedalltask: Alltask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.loadedalltask = this.tasksService.alltasks;
  }

  onDelete(alltaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', alltaskId);
  }

  stop(event: Event) {
    console.log('stop');
    event.stopPropagation();
  }

}
