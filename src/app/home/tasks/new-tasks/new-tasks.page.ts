import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Router, RoutesRecognized } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { filter, pairwise } from 'rxjs/operators';
import * as moment from 'moment';
@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.page.html',
  styleUrls: ['./new-tasks.page.scss'],
})
export class NewTasksPage implements OnInit {
  form: FormGroup;
  date;
  previousUrl: string;

  constructor(private tasksService: TasksService, private router: Router, private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.router.events
      .pipe(filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      ).subscribe((e: any) => {
        console.log('tndnjjtdtkjkdkdj' + e[0].urlAfterRedirects); // previous url
      });

    this.date = new Date().toISOString();
    // this.date = moment(this.dates).format('MM/DD/YYYY hh:mm A');
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      modul: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      duedate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateAlltask() {
    console.log(this.router.url);
    if (!this.form.valid) {

      return;
    }
    this.loadingCtrl.create({
      message: 'Creating Task'
    }).then(loadingEl => {
      loadingEl.present();
      this.tasksService.addAlltask(
        this.form.value.title,
        this.form.value.modul,
        new Date(this.form.value.duedate),
        this.form.value.description,
      ).subscribe(() => {
        loadingEl.dismiss();
        console.log(this.tasksService.alltasks);
        this.form.reset();
        this.router.navigate(['home/tabs/tasks']);

      });
    });
  }


}




