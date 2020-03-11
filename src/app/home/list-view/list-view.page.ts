import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Class } from './list.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  loadedclass: Class[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.classes.subscribe(classes => {
      this.loadedclass = classes;
    });
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
