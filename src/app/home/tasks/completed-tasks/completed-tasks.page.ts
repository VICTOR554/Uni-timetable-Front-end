import { Component, OnInit } from '@angular/core';
import { Completedtask } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit {
  loadedcompletedtask: Completedtask[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedcompletedtask = this.homeService.completedtasks;
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
