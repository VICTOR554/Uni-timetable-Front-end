import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Homes } from '../home.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  Notes: Homes[];

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.Notes = this.homeService.home;
  }

  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'notes']);
    console.log('Editing item', homeId);
  }

}
