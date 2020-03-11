import { Component, OnInit } from '@angular/core';

import { IonItemSliding } from '@ionic/angular';
import { Completedtask } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit {
  loadedcompletedtask: Completedtask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.completedtasks.subscribe(completedtasks => {
      this.loadedcompletedtask = completedtasks;
    });
  }

  onDelete(completedtaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', completedtaskId);
  }

  stop(event: Event) {
    console.log('stop');
    event.stopPropagation();
  }
}
