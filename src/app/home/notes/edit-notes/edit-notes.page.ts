import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Note } from '../notes.model';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit {
  loadednote: Note;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private notesService: NotesService) { }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('notesId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.loadednote = this.notesService.getNote(paramMap.get('notesId'));
      // load detail of item in form by removing null and calling the title and description
      this.form = new FormGroup({
        title: new FormControl(this.loadednote.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.loadednote.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });

  }

  onUpdateNote() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
