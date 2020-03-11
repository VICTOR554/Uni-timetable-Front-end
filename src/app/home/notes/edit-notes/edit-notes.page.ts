import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Note } from '../notes.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit, OnDestroy {
  loadednote: Note;
  form: FormGroup;
  private noteSub: Subscription;


  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private notesService: NotesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    ) { }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('noteId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.noteSub = this.notesService.getNote(paramMap.get('noteId')).subscribe(notes => {
        this.loadednote = notes;
        // load detail of item in form by removing null and calling the title and description
        this.form = new FormGroup({
          title: new FormControl(this.loadednote.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          modul: new FormControl(this.loadednote.modul, {
            updateOn: 'blur',
            validators: [Validators.required],
          }),
          description: new FormControl(this.loadednote.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
        });
      });
    });
  }

  onUpdateNote() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    this.loadingCtrl.create({
      message: 'Updating Note'
    }).then(loadingEl => {
      loadingEl.present();
      this.notesService.updateNote
        (
          this.loadednote.id,
          this.form.value.title,
          this.form.value.modul,
          this.form.value.description,
        )
        .subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/notes']);

        });
    });

  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
