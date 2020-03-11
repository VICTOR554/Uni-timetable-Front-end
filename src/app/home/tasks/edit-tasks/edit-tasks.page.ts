import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Alltask } from '../tasks.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.page.html',
  styleUrls: ['./edit-tasks.page.scss'],
})
export class EditTasksPage implements OnInit, OnDestroy {
  loadedalltask: Alltask;
  form: FormGroup;
  private taskSub: Subscription;


  constructor(private tasksService: TasksService, private route: ActivatedRoute, private navCtrl: NavController) {

  }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('taskId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.taskSub = this.tasksService.getAlltask(paramMap.get('taskId')).subscribe(notes => {
        this.loadedalltask = notes;
        // load detail of item in form by removing null and calling the title and description
        this.form = new FormGroup({
          title: new FormControl(this.loadedalltask.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.loadedalltask.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
        });
      });
    });
  }

  onUpdateTask() {
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }



}
