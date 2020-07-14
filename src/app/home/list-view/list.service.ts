import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  GetAllActivity(currentDay: number) {
    return this.http.get('https://timetable-plus.herokuapp.com/student/activity/day/' + currentDay, this.authService.httpOptions);
  }

  GetModule(moduleCode: string) {
    return this.http.get('https://timetable-plus.herokuapp.com/student/module/' + moduleCode, this.authService.httpOptions);
  }

  GetCurrentWeek() {
    // tslint:disable-next-line: variable-name
    const created_date_time = +moment().format('X');
    console.log('Created_date_time', created_date_time);
    return this.http.get('https://timetable-plus.herokuapp.com/student/week/date/' + created_date_time, this.authService.httpOptions);
  }

  getAllWeeks() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/week/', this.authService.httpOptions);
  }

  getLocation(key) {
    return this.http.get('https://timetable-plus.herokuapp.com/student/location/' + key, this.authService.httpOptions);
  }

  GetWeekByNumber(weekNumber: number) {
    console.log('WeekNumber', weekNumber);
    return this.http.get('https://timetable-plus.herokuapp.com/student/week/number/' + weekNumber, this.authService.httpOptions);
  }




}
