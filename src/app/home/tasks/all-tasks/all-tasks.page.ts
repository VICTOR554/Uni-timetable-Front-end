import { Component, OnInit } from '@angular/core';
import { Alltask } from '../../home.model';
import { IonItemSliding } from '@ionic/angular';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.page.html',
  styleUrls: ['./all-tasks.page.scss'],
})
export class AllTasksPage implements OnInit {
  loadedalltask: Alltask[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedalltask = this.homeService.alltasks;
  }

  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', homeId);
  }

  stop(event: Event) {
    console.log('stop');
    event.stopPropagation();
  }

}
