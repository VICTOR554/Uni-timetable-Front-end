import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from './list.service';
import { Week, Activity, Module } from './list.model';
import { Subscription } from 'rxjs';
import { LoadingController, PopoverController } from '@ionic/angular';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { LecturerComponent } from './lecturer/lecturer.component';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit, OnDestroy {
  loadedActivity: Activity[];
  loadedWeek: Week;
  loadedModules: Module[];
  private listSub: Subscription;
  selectedPath = '/home/tabs/list-view';
  counter = 0;
  day = 0;
  noActivity;

  constructor(
    private listService: ListService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private popoverController: PopoverController
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log('Event', event);
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
    console.log('hiiiiii', this.loadedWeek);
    this.receiveCurrentWeek();
  }

  update() {
    this.receiveCurrentWeek();
  }

  receiveCurrentWeek() {
    this.listSub = this.listService.GetCurrentWeek().subscribe((week: any) => {
      this.loadedWeek = week;
      console.log('Week', this.loadedWeek);

      this.receiveActivity(week.dates[0]);
      this.day = week.dates[0];
      console.log('First day of the week', this.day);
    });
  }

  receiveWeekByNumber(weekNumber) {
    this.listSub = this.listService.GetWeekByNumber(weekNumber).subscribe((week: any) => {
      this.loadedWeek = week;
      console.log('specific Week', this.loadedWeek);

      this.receiveActivity(week.dates[0]);
      this.day = week.dates[0];


    });
  }

  receiveActivity(currentDay) {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.listSub = this.listService.GetAllActivity(currentDay).subscribe((activities: any) => {
          this.loadedActivity = activities;
          console.log('day', currentDay);
          console.log('Activity', activities);
          if (activities.length === 0) {
            this.noActivity = true;
          } else {
            this.noActivity = false;
          }
          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          activities.forEach(element => {
            this.receiveModule(element.module_code);
          });
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });
  }

  // gets module name
  receiveModule(moduleCode) {
    this.listSub = this.listService.GetModule(moduleCode).subscribe((module: any) => {
      this.loadedModules.push(module);
      console.log('Module Code', moduleCode);
      console.log('Module', module);
      console.log('modules for the actvities in a day', this.loadedModules);
    });
  }

  previousWeek(weekNumber) {
    this.receiveWeekByNumber(weekNumber - 1);
  }

  nextWeek(weekNumber) {
    this.receiveWeekByNumber(weekNumber + 1);
  }

  chosenDay(chosenDay) {
    this.receiveActivity(chosenDay);
    this.day = chosenDay;
  }




  async lecturerPopover(eve, lecturer) {
    const popover = await this.popoverController.create({
      component: LecturerComponent,
      componentProps: { key1: lecturer },
      event: eve,
      mode: 'ios',
      translucent: true,
      cssClass: 'popOver'
    });
    return await popover.present();
  }


  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
