import { Component, OnInit } from '@angular/core';
import { Flag } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit {

  loadedflag: Flag[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedflag = this.homeService.flags;
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
