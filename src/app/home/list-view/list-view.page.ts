import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from './list.service';
import { Class, Week } from './list.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit, OnDestroy {
  loadedclass: Class[];
  loadedweek: Week[];
  date;
  private listSub: Subscription;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listSub = this.listService.weeks.subscribe(weeks => {
      this.loadedweek = weeks;
    });
    this.date = new Date().toISOString();
    this.listSub = this.listService.classes.subscribe(classes => {
      this.loadedclass = classes;
    });

  }

  stop(event: Event) {
    event.stopPropagation();
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
