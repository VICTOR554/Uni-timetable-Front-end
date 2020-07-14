import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task, Module } from '../tasks.model';
import { Subscription } from 'rxjs';
import { LoadingController, IonItemSliding } from '@ionic/angular';
import { TasksService } from '../tasks.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage implements OnInit, OnDestroy {

  loadedInProgress: Task[];
  loadedModules: Module[];
  private taskSub: Subscription;
  selectedPath1 = '/home/tabs/tasks';
  selectedPath2 = '/home/tabs/tasks/in-progress';
  counter = 0;
  notasks;


  constructor(private tasksService: TasksService, private router: Router, private loadingCtrl: LoadingController) {
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
    this.receiveInProgressTasks();
  }

  update() {
    this.receiveInProgressTasks();
  }

  receiveInProgressTasks() {
    this.loadingCtrl.create({ message: 'Loading In Progress Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getInProgressTasks().subscribe((inProgressTask: any) => {
          this.loadedInProgress = inProgressTask;
          console.log(inProgressTask);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          inProgressTask.forEach(element => {
            if (element.module_code) {
              this.getModule(element.module_code);
            } else {

              this.getModule('No module');
            }
          });

          if (inProgressTask.length === 0) {
            this.notasks = true;
          } else {
            this.notasks = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  // gets module name
  getModule(ModuleCode) {
    if (ModuleCode === 'No module') {
      this.loadedModules.push({
        name: 'No module',
        code: 'No module',
        course_id: 0
      });

    } else {
      this.taskSub = this.tasksService.GetModule(ModuleCode).subscribe((module: any) => {
        this.loadedModules.push(module);
        console.log('Module Code', ModuleCode);
        console.log('Module', module);
        console.log('modules for the week', this.loadedModules);
      });
    }
  }

  onDelete(inProgressTaskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Task...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(inProgressTaskId).subscribe(() => {
          this.update();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete task', inProgressTaskId);
        }, 1000);
      });
  }

  flagTask(task: any, slidingItem: IonItemSliding) {
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

  completeTask(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Completed...' })
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
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to complete', task);
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
