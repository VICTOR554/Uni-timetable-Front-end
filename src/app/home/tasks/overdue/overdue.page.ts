import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Overdue } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.page.html',
  styleUrls: ['./overdue.page.scss'],
})
export class OverduePage implements OnInit, OnDestroy {

  loadedoverdue: Overdue[];
  private taskSub: Subscription;


  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskSub = this.tasksService.overdues.subscribe(overdues => {
      this.loadedoverdue = overdues;
    });
  }

  onDelete(overdueId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', overdueId);
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
