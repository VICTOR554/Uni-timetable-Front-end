import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../tasks.model';
import { Subscription } from 'rxjs';
import { LoadingController, IonItemSliding } from '@ionic/angular';
import { TasksService } from '../tasks.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.page.html',
  styleUrls: ['./all-tasks.page.scss'],
})
export class AllTasksPage implements OnInit, OnDestroy {
  loadedalltask: Task[];
  private taskSub: Subscription;
  selectedPath1 = '/home/tabs/tasks';
  selectedPath2 = '/home/tabs/tasks/all-tasks';
  counter = 0;


  constructor(private tasksService: TasksService, private router: Router, private loadingCtrl: LoadingController, ) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event)
      if (event.url !== undefined && event instanceof NavigationEnd) {
        if ((event.url === this.selectedPath1 || event.url === this.selectedPath2) && this.counter !== 0) {
          this.update();
          console.log('refreshed page');
          console.log('counter = ', this.counter);
        }
        this.counter = this.counter + 1;
      }

    });
  }


  ngOnInit() {
    console.log('hi');
    this.getTasks();
  }

  update() {
    this.getTasks();
  }

  getTasks() {
    this.taskSub = this.tasksService.getOnScheduleTasks().subscribe((alltasks: any) => {
      this.loadedalltask = alltasks;
      console.log(alltasks);
    });
  }

  onDelete(alltaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(alltaskId).subscribe(() => {
          this.update();
          loadingEl.dismiss();
        });
        console.log('delete item', alltaskId);
      });
  }

  Flag(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();

        task.is_flagged = true;

        this.tasksService.UpdateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task._id,
          task.is_completed,
          task.is_flagged).subscribe(() => {
            this.update();
            loadingEl.dismiss();
          });
        console.log('updated to flag', task);
      });
  }

  Complete(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_completed = true;
        this.tasksService.UpdateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task._id,
          task.is_completed,
          task.is_flagged).subscribe(() => {
            this.update();
            loadingEl.dismiss();
          });
        console.log('updated to complete', task);
      });
  }




  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }

}
