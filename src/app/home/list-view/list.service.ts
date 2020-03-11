import { Injectable } from '@angular/core';
import { Class } from './list.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
   // tslint:disable-next-line: variable-name
   private _classes = new BehaviorSubject<Class[]>([
    new Class(
      'CL1',
      10,
      'HCI',
      'lecture',
      '12:00 am',
      '1:00 pm',
      'Victor Lawuyi',
      'WLFB',

    ),
    new Class(
      'CL2',
      11,
      'Software Engineering',
      'lab',
      '2:00 pm',
      '3:00 pm',
      'David Jackson',
      'HWLL',
    ),
    new Class(
      'CL3',
      12,
      'Games and Design',
      'seminar',
      '3:00 pm',
      '4:00 pm',
      'Travis Scott',
      'ESGW',

    ),
    new Class(
      'CL4',
      13,
      'Advanced Topics',
      'exam',
      '4:00 pm',
      '5:00 pm',
      'Chris Brown',
      'Lect D',
    ),
    new Class(
      'CL5',
      14,
      'Cyber Security',
      'lecture',
      '5:00 pm',
      '6:00 pm',
      'Clark Kent',
      'Lect 202',
    )
  ]);


  // create get home, notes, alltask, completedtask, overdue, flag to duplicate array so changes are not made
  get classes() {
    return this._classes.asObservable();
  }

  constructor() { }
}
