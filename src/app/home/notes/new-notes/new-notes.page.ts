import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.page.html',
  styleUrls: ['./new-notes.page.scss'],
})
export class NewNotesPage implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private notesService: NotesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      modul: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateNote() {

    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Creating Note'
    }).then(loadingEl => {
      loadingEl.present();
      this.notesService.addNote(
        this.form.value.title,
        this.form.value.modul,
        this.form.value.description,
      ).subscribe(() => {
        loadingEl.dismiss();
        console.log(this.notesService.notes);
        this.form.reset();
        this.router.navigate(['home/tabs/notes']);

      });
    });
  }


}
