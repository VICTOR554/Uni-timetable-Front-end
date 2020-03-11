import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Note } from './notes.model';
import { NotesService } from './notes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {
  loadednote: Note[];
  private noteSub: Subscription;

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit() {
    this.noteSub = this.notesService.notes.subscribe(notes => {
      this.loadednote = notes;
    });
  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'notes']);
    console.log('Delete item', noteId);
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
