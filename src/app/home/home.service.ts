import { Injectable } from '@angular/core';
import { Homes } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // tslint:disable-next-line: variable-name
  private _home: Homes[] = [
    new Homes(
      'HCI',
      10,
      'HCI',
      'lecture',
      '12:00 am',
      '1:00 pm',
      'Victor Lawuyi',
      'WLFB',
      'Calender Problems',
    ),
    new Homes(
      'software',
      11,
      'Software Engineering',
      'lab',
      '2:00 pm',
      '3:00 pm',
      'David Jackson',
      'HWLL',
      'Tabs'
    ),
    new Homes(
      'Game',
      12,
      'Games and Design',
      'seminar',
      '3:00 pm',
      '4:00 pm',
      'Travis Scott',
      'ESGW',
      'Ionic'
    ),
    new Homes(
      'Advanced',
      13,
      'Advanced Topics',
      'exam',
      '4:00 pm',
      '5:00 pm',
      'Chris Brown',
      'Lect D',
      'Block Chain in the supply chain'
    ),
    new Homes(
      'cyber',
      14,
      'Cyber Security',
      'lecture',
      '5:00 pm',
      '6:00 pm',
      'Clark Kent',
      'Lect 202',
      'Dissertation'
    )
  ];

  // create get home to duplicate array so changes are not made
  get home() {
    return [...this._home];
  }

  constructor() { }
}
