import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Flag } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit, OnDestroy {

  loadedflag: Flag[];
  private taskSub: Subscription;


  constructor(private tasksService: TasksService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.taskSub = this.tasksService.flags.subscribe(flags => {
      this.loadedflag = flags;
    });
  }

  onDelete(flagId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.cancelFlag(flagId).subscribe(() => {
          loadingEl.dismiss();
        });
        console.log('delete item', flagId);
      });
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
