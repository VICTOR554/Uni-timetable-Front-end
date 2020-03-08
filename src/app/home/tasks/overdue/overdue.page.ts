import { Component, OnInit } from '@angular/core';
import { Overdue } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.page.html',
  styleUrls: ['./overdue.page.scss'],
})
export class OverduePage implements OnInit {

  loadedoverdue: Overdue[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedoverdue = this.homeService.overdues;
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
