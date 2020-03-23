import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NotesPage } from '../notes.page';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.page.html',
  styleUrls: ['./new-notes.page.scss'],
})
export class NewNotesPage implements OnInit {
  form: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private notesService: NotesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      module_code: new FormControl(null, {
        updateOn: 'blur',
      }),
      body: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateNote() {
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Creating Note'
    }).then(loadingEl => {
      loadingEl.present();
      this.notesService.addNote(
        this.form.value.title,
        this.form.value.module_code,
        this.form.value.body,
      ).subscribe((res) => {
        setTimeout(() => {
          loadingEl.dismiss();
          console.log(res);
          this.form.reset();
          this.router.navigate(['home/tabs/notes']);
        }, 1000);
      });
    });
  }


}
