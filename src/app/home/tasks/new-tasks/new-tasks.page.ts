import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Router, NavigationEnd } from '@angular/router';
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

  constructor(private tasksService: TasksService, private router: Router, private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.date = new Date().toISOString();
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      module_code: new FormControl(null, {
        updateOn: 'blur',
      }),
      due_date_time: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      body: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateAlltask() {
    console.log(this.form);

    if (!this.form.valid) {

      return;
    }
    this.loadingCtrl.create({
      message: 'Creating Task'
    }).then(loadingEl => {
      loadingEl.present();
      this.tasksService.addTask(
        this.form.value.title,
        this.form.value.module_code,
        this.form.value.due_date_time,
        this.form.value.body,
      ).subscribe((res) => {
        setTimeout(() => {
          loadingEl.dismiss();
          console.log(res);
          this.form.reset();
          this.router.navigate(['home/tabs/tasks']);
        }, 1000);
      });
    });
  }
}




