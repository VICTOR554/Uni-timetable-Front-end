import { Component, OnInit } from '@angular/core';
import { Homes } from '../home.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  list: Homes[];

  constructor() { }

  ngOnInit() {
  }

}
