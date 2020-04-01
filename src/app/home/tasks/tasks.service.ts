import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { Overdue, Flag, Completedtask, Task } from './tasks.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // tslint:disable-next-line: variable-name
  private _tasks = new BehaviorSubject<Task[]>([]);

  // tslint:disable-next-line: variable-name
  private _completedtasks = new BehaviorSubject<Completedtask[]>([]);

  // tslint:disable-next-line: variable-name
  private _flags = new BehaviorSubject<Flag[]>([]);

  // tslint:disable-next-line: variable-name
  private _overdues = new BehaviorSubject<Overdue[]>([]);


  constructor(private authService: AuthService, private http: HttpClient) { }


  // ALL TASK

  getOnScheduleTasks() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/task/onschedule', this.authService.httpOptions);
  }
  getCompleteTasks() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/task/completed', this.authService.httpOptions);
  }
  getFlaggedTasks() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/task/flagged', this.authService.httpOptions);
  }
  getOverdueTasks() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/task/overdue', this.authService.httpOptions);
  }

  getOneTask(taskId: string) {
    // console.log(taskId);
    return this.http.get('https://timetable-plus.herokuapp.com/student/task/one/' + taskId, this.authService.httpOptions);
  }
  GetModule(ModuleCode: string) {
    return this.http.get('https://timetable-plus.herokuapp.com/student/module/' + ModuleCode, this.authService.httpOptions);
  }

  // tslint:disable-next-line: variable-name
  addTask(title: string, module_code: string, due_date_time: string, body: string) {
    // tslint:disable-next-line: variable-name
    const created_date_time = +moment().format('X');
    // tslint:disable-next-line: variable-name
    const is_completed = false;
    // tslint:disable-next-line: variable-name
    const is_flagged = false;
    // tslint:disable-next-line: variable-name
    const due_date = +moment(due_date_time.toString()).format('X');
    const newTask = new Task(
      title,
      module_code,
      created_date_time,
      due_date,
      body,
      is_completed,
      is_flagged
    );
    return this.http.post('https://timetable-plus.herokuapp.com/student/task/new', newTask, this.authService.httpOptions);
  }


  UpdateTask(
    title: string,
    // tslint:disable-next-line: variable-name
    module_code: string,
    // tslint:disable-next-line: variable-name
    due_date_time: any,
    body: string,
    taskId: string,
    // tslint:disable-next-line: variable-name
    is_completed: boolean,
    // tslint:disable-next-line: variable-name
    is_flagged: boolean
  ) {
    // tslint:disable-next-line: variable-name
    const created_date_time = +moment().format('X');
    // tslint:disable-next-line: variable-name
    console.log(due_date_time);
    // tslint:disable-next-line: variable-name
    let due_date;
    if (typeof due_date_time === 'string') {
      due_date = +moment(due_date_time.toString()).format('X');
    } else {
      due_date = due_date_time;
    }

    console.log(due_date);
    const updatedTask = new Task(
      title,
      module_code,
      created_date_time,
      due_date,
      body,
      is_completed,
      is_flagged
    );
    return this.http.put('https://timetable-plus.herokuapp.com/student/task/edit/' + taskId, updatedTask, this.authService.httpOptions);
  }



  deleteTask(taskId: string) {
    return this.http.delete('https://timetable-plus.herokuapp.com/student/task/delete/' + taskId, this.authService.httpOptions);
  }



}
