import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Overdue } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.page.html',
  styleUrls: ['./overdue.page.scss'],
})
export class OverduePage implements OnInit {

  loadedoverdue: Overdue[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.loadedoverdue = this.tasksService.overdues;
  }

  onDelete(overdueId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', overdueId);
  }

  stop(event: Event) {
    console.log('stop');
    event.stopPropagation();
  }

}
