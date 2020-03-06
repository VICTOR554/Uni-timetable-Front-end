import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Note } from '../home.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  loadednote: Note[];

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.loadednote = this.homeService.notes;
  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'notes']);
    console.log('Editing item', noteId);
  }

}
