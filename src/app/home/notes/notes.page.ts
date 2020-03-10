import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Note } from './notes.model';
import { NotesService } from './notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  loadednote: Note[];

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit() {
    this.loadednote = this.notesService.notes;
  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'notes']);
    console.log('Delete item', noteId);
  }

}
