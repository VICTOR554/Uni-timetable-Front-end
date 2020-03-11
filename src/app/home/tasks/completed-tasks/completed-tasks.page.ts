import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonItemSliding } from '@ionic/angular';
import { Completedtask } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit, OnDestroy {
  loadedcompletedtask: Completedtask[];
  private taskSub: Subscription;


  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskSub = this.tasksService.completedtasks.subscribe(completedtasks => {
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

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
