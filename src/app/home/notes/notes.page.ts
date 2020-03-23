import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
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
  loadednotes: Note[];
  private noteSub: Subscription;
  selectedPath = '/home/tabs/notes';
  counter = 0;
  // tslint:disable-next-line: max-line-length
  constructor(
    private notesService: NotesService,
    private router: Router,
    private loadingCtrl: LoadingController) {
      this.router.events.subscribe((event: RouterEvent) => {
        if (event.url !== undefined && event instanceof NavigationEnd) {
          if (event.url === this.selectedPath && this.counter !== 0) {
            this.update();
            console.log('refreshed page');
            console.log('counter = ', this.counter);
          }
          this.counter = this.counter + 1;
        }

      });
  }

  ngOnInit() {
    console.log('hi');
    this.getNotes();
  }

  update() {
    this.getNotes();
  }

  getNotes() {
    this.loadingCtrl.create({ message: 'Loading Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.noteSub = this.notesService.getAllNotes().subscribe((notes: any) => {
          this.loadednotes = notes;
          console.log(notes);
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notesService.deleteNote(noteId).subscribe(() => {
          this.update();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', noteId);
        }, 1000);
      });
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
