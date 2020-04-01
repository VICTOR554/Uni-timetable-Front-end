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
  loadedactivity: Activity[];
  loadedweek: Week[];
  loadedmodules: Module[];
  private listSub: Subscription;
  selectedPath = '/home/tabs/list-view';
  locationPath = '/home/tabs/list-view/location';
  counter = 0;
  day = 0;
  noclass;
  is_Week;

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
        if (event.url === this.locationPath) {
          this.getWeekByNumber(this.is_Week);
          console.log('refreshed page');
          console.log('counter = ', this.counter);
        }
        this.counter = this.counter + 1;
      }
    });
  }




  ngOnInit() {
    console.log('hi');
    this.getCurrentWeek();


  }

  update() {
    this.getCurrentWeek();
  }

  getCurrentWeek() {
    this.listSub = this.listService.GetCurrentWeek().subscribe((week: any) => {
      this.loadedweek = week;
      console.log('Week', this.loadedweek);

      this.getActivity(week.dates[0]);
      this.day = week.dates[0];
      console.log('YOU FKFJKFK', this.day);
    });
  }



  getWeekByNumber(weekNumber) {
    this.listSub = this.listService.GetWeekByNumber(weekNumber).subscribe((week: any) => {
      this.loadedweek = week;
      console.log('specific Week', this.loadedweek);

      this.getActivity(week.dates[0]);
      this.day = week.dates[0];


    });
  }


  getActivity(currentday) {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.listSub = this.listService.GetAllActivity(currentday).subscribe((activities: any) => {
          this.loadedactivity = activities;
          console.log('day', currentday);
          console.log('Activity', activities);

          if (activities.length === 0) {
            this.noclass = true;
          } else {
            this.noclass = false;
          }

          this.loadedmodules = [];
          // checks the module code and calls getmodule to get module name
          activities.forEach(element => {
            this.getModule(element.module_code);
          });
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });

  }

  // gets module name
  getModule(ModuleCode) {
    this.listSub = this.listService.GetModule(ModuleCode).subscribe((module: any) => {
      this.loadedmodules.push(module);
      console.log('Module Code', ModuleCode);
      console.log('Module', module);
      console.log('modules for the week', this.loadedmodules);
    });
  }



  previousWeek(weeknumber) {
    this.getWeekByNumber(weeknumber - 1);
  }

  nextWeek(weeknumber) {
    this.getWeekByNumber(weeknumber + 1);
  }

  CurrentDay(currentday) {
    this.getActivity(currentday);
    this.day = currentday;
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

  SelectedDay(day) {
    this.is_Week = day;
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
