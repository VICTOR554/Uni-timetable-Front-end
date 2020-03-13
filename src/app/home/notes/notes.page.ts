import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Note } from './notes.model';
import { NotesService } from './notes.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {
  loadednote: Note[];
  private noteSub: Subscription;

  // tslint:disable-next-line: max-line-length
  constructor(
    private notesService: NotesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private http: HttpClient) { }

  ngOnInit() {
    this.noteSub = this.notesService.notes.subscribe(notes => {
      this.loadednote = notes;
    });




  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notesService.cancelNote(noteId).subscribe(() => {
          loadingEl.dismiss();
        });
        console.log('delete item', noteId);
      });
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
