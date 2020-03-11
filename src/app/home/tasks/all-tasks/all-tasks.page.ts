import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Alltask } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.page.html',
  styleUrls: ['./all-tasks.page.scss'],
})
export class AllTasksPage implements OnInit, OnDestroy {
  loadedalltask: Alltask[];
  private taskSub: Subscription;


  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskSub = this.tasksService.alltasks.subscribe(alltasks => {
      this.loadedalltask = alltasks;
    });
  }

  onDelete(alltaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', alltaskId);
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
