import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Flag, Module } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit, OnDestroy {

  loadedflag: Flag[];
  loadedmodules: Module[];
  private taskSub: Subscription;
  selectedPath = '/home/tabs/tasks/flags';
  counter = 0;
  noflags;


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
    this.loadingCtrl.create({ message: 'Loading Flagged Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getFlaggedTasks().subscribe((flags: any) => {
          this.loadedflag = flags;
          console.log(flags);

          this.loadedmodules = [];
          // checks the module code and calls getmodule to get module name
          flags.forEach(element => {
            if (element.module_code) {
              this.getModule(element.module_code);
            } else {

              this.getModule('no module');
            }
          });

          if (flags.length === 0) {
            this.noflags = true;
          } else {
            this.noflags = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  // gets module name
  getModule(ModuleCode) {
    if (ModuleCode === 'no module') {
      this.loadedmodules.push({
        name: 'no module',
        code: 'no module',
        course_id: 0
      });

    } else {
      this.taskSub = this.tasksService.GetModule(ModuleCode).subscribe((module: any) => {
        this.loadedmodules.push(module);
        console.log('Module Code', ModuleCode);
        console.log('Module', module);
        console.log('modules for the week', this.loadedmodules);
      });
    }
  }

  Complete(task: any, slidingItem: IonItemSliding) {
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

  NotFlag(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Unflagged...' })
      .then(loadingEl => {
        loadingEl.present();

        task.is_flagged = false;

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

  onDelete(flagId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(flagId).subscribe(() => {
          this.update();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', flagId);
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
