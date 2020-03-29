import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from '../list.service';
import { Week } from '../list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit, OnDestroy {
  loadedweek: Week[];
  private listSub: Subscription;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listSub = this.listService.getallWeeks().subscribe((week: any) => {
      this.loadedweek = week;
      console.log('specific Week by week select', this.loadedweek);
    });


  }

  navigateweek(weekNumber) {
    console.log('hey NIGGGER', this.loadedweek);
    this.listSub = this.listService.GetWeekByNumber(weekNumber).subscribe((week: any) => {
      this.loadedweek = week;
      console.log('specific Week by specific week', this.loadedweek);

    });
  }


  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
