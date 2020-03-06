import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Class } from '../home.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  loadedclass: Class[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedclass = this.homeService.classes;
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
