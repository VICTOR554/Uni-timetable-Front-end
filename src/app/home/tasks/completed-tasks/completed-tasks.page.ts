import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Task } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit, OnDestroy {
  loadedcompletedtask: Task[];
  private taskSub: Subscription;
  selectedPath = '/home/tabs/tasks/completed-tasks';
  counter = 0;


  constructor(private tasksService: TasksService, private loadingCtrl: LoadingController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event)
      if (event.url !== undefined && event instanceof NavigationEnd) {
        if ((event.url === this.selectedPath) && this.counter !== 0) {
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
    this.loadingCtrl.create({ message: 'Loading Overdue Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getCompleteTasks().subscribe((completedtasks: any) => {
          this.loadedcompletedtask = completedtasks;
          console.log(completedtasks);
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  Flag(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Flagged...' })
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
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to flag', task);
        }, 1000);
      });
  }

  NotComplete(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is not Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_completed = false;
        this.tasksService.UpdateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task._id,
          task.is_completed,
          task.is_flagged).subscribe(() => {
            this.update();
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to complete', task);
        }, 1000);
      });
  }

  onDelete(completedtaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(completedtaskId).subscribe(() => {
          this.update();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', completedtaskId);
        }, 1000);
      });
  }



  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
