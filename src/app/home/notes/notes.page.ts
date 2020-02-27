import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Homes } from '../home.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  Notes: Homes[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.Notes = this.homeService.home;
  }

}
