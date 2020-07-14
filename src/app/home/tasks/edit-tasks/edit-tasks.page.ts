import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import * as moment from 'moment';


@Component({
    selector: 'app-edit-tasks',
    templateUrl: './edit-tasks.page.html',
    styleUrls: ['./edit-tasks.page.scss'],
})
export class EditTasksPage implements OnInit, OnDestroy {
    loadedalltask: Task;
    form: FormGroup;
    private taskSub: Subscription;
    date;
    datenow;
    datek;
    // tslint:disable-next-line: variable-name
    is_completed = false;
    // tslint:disable-next-line: variable-name
    is_flagged = false;


    // tslint:disable-next-line: max-line-length
    constructor(private tasksService: TasksService, private route: ActivatedRoute, private navCtrl: NavController, private loadingCtrl: LoadingController, private router: Router) {

    }

    ngOnInit() {

        // Subscribe to changes in route params
        this.route.paramMap.subscribe(paramMap => {
            // check if it has the note id if not go back to notes
            if (!paramMap.has('taskId')) {
                this.navCtrl.navigateBack('/home/tabs/notes');
                return;
            }
            this.taskSub = this.tasksService.getOneTask(paramMap.get('taskId')).subscribe((alltasks: any) => {
                this.loadedalltask = alltasks;
                // load detail of item in form by removing null and calling the title and description
                this.form = new FormGroup({
                    title: new FormControl(this.loadedalltask.title, {
                        updateOn: 'blur',
                        validators: [Validators.required]
                    }),
                    module_code: new FormControl(this.loadedalltask.module_code, {
                        updateOn: 'blur',
                    }),
                    due_date_time: new FormControl(this.loadedalltask.due_date_time, {
                        updateOn: 'blur',
                        validators: [Validators.required],
                    }),
                    body: new FormControl(this.loadedalltask.body, {
                        updateOn: 'blur',
                        validators: [Validators.required, Validators.maxLength(180)]
                    })
                });
                this.date = moment.unix(this.loadedalltask.due_date_time).toISOString();
                this.datenow = moment().toISOString();
                console.log('date', this.date);
                console.log('datenow', this.datenow);

            });
        });
    }

    onUpdateTask() {
        console.log(this.form);
        console.log(this.is_completed);
        console.log(this.is_flagged);
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl.create({
            message: 'Updating Task'
        }).then(loadingEl => {
            loadingEl.present();
            this.tasksService.UpdateTask
                (
                    this.form.value.title,
                    this.form.value.module_code,
                    this.form.value.due_date_time,
                    this.form.value.body,
                    this.loadedalltask._id,
                    this.is_completed,
                    this.is_flagged
                )
                .subscribe(() => {
                    setTimeout(() => {
                        loadingEl.dismiss();
                        this.form.reset();
                        this.router.navigate(['/home/tabs/tasks']);
                    }, 1000);
                });
        });

    }

    // used to clear subscription to avoid memory leaks
    ngOnDestroy() {
        if (this.taskSub) {
            this.taskSub.unsubscribe();
        }
    }



}
